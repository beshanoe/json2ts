export interface IJson2TsOptions {
  prependWithI?: boolean;
  sortAlphabetically?: boolean;
  addExport?: boolean;
  prefix?: string;
}

export class Json2Ts {

  private interfaces: {
    [name: string]: {
      [field: string]: string;
    }
  } = {};

  constructor(
    private config: IJson2TsOptions = {}
  ) {}

  convert(json: {}) {
    this.interfaces = {};
    let result = `type JSON = ${this.unknownToTS(json)}\n\n`;
    result += this.interfacesToString();
    return result;
  }

  private unknownToTS(value: {}, key: string | undefined = void 0) {
    let type: string = typeof value;
    if (type === 'object') {
      if (Array.isArray(value)) {
        type = this.arrayToTS(value, key);
      } else {
        type = this.objectToTS(value, key && this.capitalizeFirst(key));
      }
    }
    return type;
  }

  private arrayToTS(array: {}[], key: string | undefined = void 0) {
    let type = array.length ? void 0 : 'any';
    for (let item of array) {
      const itemType = this.unknownToTS(item, this.keyToTypeName(key));
      if (type && itemType !== type) {
        type = 'any';
        break;
      } else {
        type = itemType;
      }
    }
    return `${type}[]`;
  }

  private keyToTypeName(key: string | undefined = void 0) {
    if (!key || key.length < 2) {
      return key;
    }
    const [first, ...rest]: string[] = Array.prototype.slice.apply(key);
    const last = rest.pop();
    return [first.toUpperCase(), ...rest, last === 's' ? '' : last].join('');
  }

  private capitalizeFirst(str: string) {
    const [first, ...rest]: string[] = Array.prototype.slice.apply(str);
    return [first.toUpperCase(), ...rest].join('');
  }

  private objectToTS(obj: {}, type: string = 'RootObject') {
    if (obj === null) {
      return 'any';
    }
    if (!this.interfaces[type]) {
      this.interfaces[type] = {};
    }
    const interfaceName = this.interfaces[type];
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const fieldType = this.unknownToTS(value, key);
      if (!interfaceName[key] || interfaceName[key].indexOf('any') === 0) {
        interfaceName[key] = fieldType;
      }
    });
    return type;
  }

  private interfacesToString() {
    const { prependWithI, sortAlphabetically, addExport } = this.config;
    return Object.keys(this.interfaces).map(name => {
      const interfaceStr = [`${addExport ? 'export ' : ''}interface ${prependWithI ? 'I' : ''}${name} {`];
      const fields = Object.keys(this.interfaces[name]);
      if (sortAlphabetically) {
        fields.sort();
      }
      fields
        .forEach(field => {
          const type = this.interfaces[name][field];
          interfaceStr.push(`  ${field}: ${type};`);
        });
      interfaceStr.push('}\n');
      return interfaceStr.join('\n');
    }).join('\n');
  }

}