import { GROUPID } from "../Util/settings/config";
import { baseService } from "./baseService";

class QuanLyPhimService extends baseService
{
  constructor()
  {
    super()
  }
  layDanhSachBanner = () =>
  {
    return this.get(`QuanLyPhim/LayDanhSachBanner`)
  }
  layDanhSachPhim = () =>
  {
    return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
  }
}

export const quanLyPhimService = new QuanLyPhimService()