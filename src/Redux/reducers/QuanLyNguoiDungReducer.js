import {
	DANG_NHAP_ACTION,
	LAY_THONG_TIN_NGUOI_DUNG,
} from "../actions/Types/QuanLyNguoiDungType";
import { TOKEN, USER_LOGIN } from "../../Util/settings/config";

import { ThongTinNguoiDung } from "../../_core/models/ThongTinNguoiDung";

let user = {};
let token;
if (localStorage.getItem(USER_LOGIN)) {
	user = JSON.parse(localStorage.getItem(USER_LOGIN));
	token = JSON.parse(localStorage.getItem(TOKEN));
}

const initialState = {
	userLogin: user,
	tokenLogin: token,
	thongTinNguoiDung: new ThongTinNguoiDung(),
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
	switch (action.type) {
		case DANG_NHAP_ACTION: {
			const { thongTinDangNhap } = action;
			localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
			localStorage.setItem(TOKEN, JSON.stringify(thongTinDangNhap.accessToken));
			return { ...state, userLogin: thongTinDangNhap };
		}
		case LAY_THONG_TIN_NGUOI_DUNG: {
			state.thongTinNguoiDung = action.thongTinNguoiDung;
			return { ...state };
		}

		default:
			return state;
	}
};
