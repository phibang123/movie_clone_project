import { GROUPID } from "../Util/settings/config";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
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
  datVe = (thongTinDatVe = new ThongTinDatVe()) =>
  {
    return this.post(`QuanLyDatVe/DatVe`,thongTinDatVe)
  }
}

export const quanLyDatVeSevice  = new QuanLyDatVeService()