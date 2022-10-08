import {EventEmitter} from "events";
import {ChangeEventName} from "../change-event-name";

/**
 * An object that emits a `change` event whenever its value changes.
 */
export class Observable<GenericType> extends EventEmitter {
  /**
   * Create an object that emits a `change` event whenever its value changes.
   * @param initialValue The initial value.
   */
  constructor(initialValue: GenericType) {
    super();

    this.value = initialValue;
  }

  private _value: GenericType;

  public get value(): GenericType {
    return this._value;
  }

  public set value(value: GenericType) {
    this.emit(ChangeEventName, (this._value = value));
  }
}
