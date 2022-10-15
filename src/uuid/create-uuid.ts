import { randomUUID } from "crypto";
import { Uuid } from "./uuid";

export const createUuid = (): Uuid => {
  return randomUUID() as Uuid;
};
