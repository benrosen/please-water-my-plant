import { NamedPing } from "named-ping";
import { Order } from "order";
import { Positioned } from "positioned";

export type PingOrder = NamedPing & Order & Positioned;
