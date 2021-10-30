import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./Types/QuanLyRapType";

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

export const layThongTinChiTietPhim =  (id) =>
{
  return async dispatch =>
  {
     try {
       const result = await quanLyRapService.layDanhThongTinLichChieuPhim(id);

       console.log('result', result.data.content)
       
       if (result.status === 200)
       {
        dispatch({
          type: SET_CHI_TIET_PHIM,
          phimDetail: result.data.content
        })
       }
     } catch (error) {
       
     }
  }
}