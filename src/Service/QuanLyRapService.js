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
  layDanhThongTinLichChieuPhim = (maPhim) =>
  {
    return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
  }

}

export const quanLyRapService = new QuanLyRapService()