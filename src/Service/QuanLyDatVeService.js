import { GROUPID } from "../Util/settings/config";
import { baseService } from "./baseService";

class QuanLyDatVeService extends baseService
{
  constructor() 
  {
    super()
  }
  layChiTietPhongVe = (maLichChieu) => //mã lịch chiếu lấy thông tin lịch chuiếu 
  {
    return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
  }
}

export const quanLyDatVeSevice  = new QuanLyDatVeService()