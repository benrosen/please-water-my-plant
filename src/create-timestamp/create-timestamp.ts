import { Timestamp } from "timestamp";

export const createTimestamp = (): Timestamp => {
  return Date.now() as Timestamp;
};
