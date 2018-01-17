// Type Definition
///////////////////////////////////////////////////////////
import {ITypeDefinition} from './interfaces'
import {UNDEFINED} from './util'

export class TypeDefinition implements ITypeDefinition {
  constructor (definition: IPExpandedTypeDefinition) {
    const {
      default: _default,
      set,
      validate,
      when,
      configurable,
      enumerable,
      writable,
      optional,
      type
    } = definition

    this._default = parseDefault(_default)
    this._set = parseSetters(set)
    this._validate = parseValidators(validate)
    this._when = parseWhen(when)
    this._configurable = configurable
    this._enumerable = enumerable
    this._writable = writable
    this._optional = this._default !== UNDEFINED
      ? true
      // By default, optional is false
      : optional !== true
    this._type = type
  }
}