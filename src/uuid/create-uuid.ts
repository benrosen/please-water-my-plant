import { v4 } from "uuid-alias";
import { Uuid } from "./uuid";

export const createUuid = (): Uuid => {
  return v4() as Uuid;
};
