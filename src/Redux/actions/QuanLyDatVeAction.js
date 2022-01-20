import { DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./Types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { toastError, toastSuccess } from "../../Util/Toast/toast";

import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
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

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async dispatch =>
  {
    try
    {
      dispatch(displayLoadingAction)
      await quanLyDatVeSevice.datVe(thongTinDatVe);
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
      await dispatch({ type: DAT_VE_HOAN_TAT })
      
      dispatch(hideLoadingAction)
      toastSuccess("Đặt vé thành công");
    } catch (error) {
      dispatch(hideLoadingAction)
      toastError("lỗi")
    }
  }
}