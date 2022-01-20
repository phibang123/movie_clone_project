import { DANG_NHAP_ACTION, LAY_THONG_TIN_NGUOI_DUNG } from "./Types/QuanLyNguoiDungType";
import { toastError, toastSuccess } from "../../Util/Toast/toast";

import { history } from "../../App";
import { quanLyNguoiDung } from "../../Service/QuanLyNguoiDung";

export const dangNhapAction = (thongTinDangNhap) => {
	return async (dispatch) => {
		try {
			const result = await quanLyNguoiDung.dangNhap(thongTinDangNhap);

			if (result.status === 200) {
				dispatch({
					type: DANG_NHAP_ACTION,
					thongTinDangNhap: result.data.content,
				});

				history.goBack();
				//chuyển hướng trang về trang trước đó

				toastSuccess("Đăng nhập thành công");
			}
		} catch (error) {
			console.log(error?.response.data.content);
			toastError(error?.response.data.content);
			console.log(error);
		}
	};
};

export const layThongTinNguoiDungAction = () =>
{
	return async (dispatch) =>
	{
		try {
			const result = await quanLyNguoiDung.layThongTinNguoiDung();
			if (result.status === 200)
			{
				dispatch({
					type: LAY_THONG_TIN_NGUOI_DUNG,
					thongTinNguoiDung: result.data.content
				})
			}
		} catch (error) {
			
		}
	}
}