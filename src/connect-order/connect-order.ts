import { Connect } from "connect";
import { Order } from "order";
import { RoleRelated } from "role-related";

export type ConnectOrder = Order<Connect> & RoleRelated;
