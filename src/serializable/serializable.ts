/**
 * An object that can easily be stored, transmitted, and/or reconstructed later.
 * @see https://en.wikipedia.org/wiki/Serialization
 * @see https://www.json.org/json-en.html
 */
export type Serializable =
  | string
  | number
  | null
  | boolean
  | Serializable[]
  | { [key: string]: Serializable };
