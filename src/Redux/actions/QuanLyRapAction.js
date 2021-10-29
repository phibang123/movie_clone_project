import { SET_HE_THONG_RAP_CHIEU } from "./Types/QuanLyRapType";
import { quanLyRapService } from "../../Service/QuanLyRapService"

export const layDanhSachHeThongRapAction = () =>
{
  return async dispatch =>
  {
    try
    {
      const result = await quanLyRapService.layDanhThongTinLichChieuHeThongRap();

      if (result.status === 200)
      {
        dispatch({
              type: SET_HE_THONG_RAP_CHIEU,
              heThongRapChieu: result.data.content
        })
      }
    }
    catch (e)
    {
      
    }
  }
}