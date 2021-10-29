import { DOMAIN } from "../../Util/settings/config";
import { SET_CAROUSEL } from "./Types/CarouselType";
import axios from "axios";
import { quanLyPhimService } from "../../Service/QuanLyPhimService";

export const getCarouselAction =  () => {
  return async (dispatch) =>
  {
    try
    {
      //sử dụng tham số
      const result = await quanLyPhimService.layDanhSachBanner()
      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
