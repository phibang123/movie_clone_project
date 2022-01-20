import { GROUPID } from "../Util/settings/config";
import { baseService } from "./baseService";

class QuanLyNguoiDung extends baseService
{
  constructor()
  {
    super()
  }
  dangNhap = (thongTinDangNhap) =>
  {
    return this.post(`QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
  }
  layThongTinNguoiDung = () =>
  {
    return this.post(`QuanLyNguoiDung/ThongTinTaiKhoan`)
  }
}

export const quanLyNguoiDung = new QuanLyNguoiDung()