import { RdpDetail as TRdpDetail } from "../api/rdpDetail/RdpDetail";

export const RDPDETAIL_TITLE_FIELD = "username";

export const RdpDetailTitle = (record: TRdpDetail): string => {
  return record.username?.toString() || String(record.id);
};
