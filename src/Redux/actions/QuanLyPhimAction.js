import { SET_DANH_SACH_PHIM } from "./Types/QuanLyPhimType";
import { quanLyPhimService } from "../../Service/QuanLyPhimService"

export const layDanhSachPhimAction = () =>
{
  return async (dispatch) =>
  {
    try
    {
      const result = await quanLyPhimService.layDanhSachPhim();

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrPhim: result.data.content
      })
    }
    catch (err)
    {
      console.log(err)
    }
  }
}