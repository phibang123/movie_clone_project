import { GROUPID } from "../Util/settings/config";
import { baseService } from "./baseService";

class QuanLyRapService extends baseService
{
  constructor()
  {
    super()
  }
  layDanhThongTinLichChieuHeThongRap = () =>
  {
    return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
  }

}

export const quanLyRapService = new QuanLyRapService()