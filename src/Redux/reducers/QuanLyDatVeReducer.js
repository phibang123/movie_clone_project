import {
	DAT_VE,
	SET_CHI_TIET_PHONG_VE,
} from "../actions/Types/QuanLyDatVeType";

import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";

const initialState = {
	chiTietPhongVe: new ThongTinLichChieu(),
	danhSachGheDangDat: [],
};

export const QuanLyDatVeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CHI_TIET_PHONG_VE: {
		
			state.chiTietPhongVe = action.chiTietPhongVe;
			return { ...state };
		}
		case DAT_VE: {
			
			//cap nhat danh sach ghe dang dat
			let danhSachGheCapNhat = [...state.danhSachGheDangDat];
		
			let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action?.gheDuocChon?.maGhe);
			console.log(index)
			if (index !== -1)
			{

				danhSachGheCapNhat.splice(index, 1)
			}
			else
			{
	
				danhSachGheCapNhat.push(action.gheDuocChon);
			}
			return { ...state,danhSachGheDangDat:danhSachGheCapNhat};
		}
		default:
			return state;
	}
};
