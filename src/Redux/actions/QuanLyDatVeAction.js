import { SET_CHI_TIET_PHONG_VE } from "./Types/QuanLyDatVeType";
import { quanLyDatVeSevice } from "../../Service/QuanLyDatVeService"

export const layChiTietPhongVeAction = (maLichChieu) =>
{

  return async dispatch =>
  {
    try {
      const result = await quanLyDatVeSevice.layChiTietPhongVe(maLichChieu);
      if (result.status === 200)
      {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content
        })
      }
    } catch (error) {
      console.log(error.reponese?.data)
    }
  }
}