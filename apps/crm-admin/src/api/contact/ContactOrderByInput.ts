import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
