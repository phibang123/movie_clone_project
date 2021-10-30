import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../actions/Types/QuanLyPhimType";

import { SET_CHI_TIET_PHIM } from "../actions/Types/QuanLyRapType";

const initialState = {
	arrPhim: [
		{
			maPhim: 8907,
			tenPhim: "squid game",
			biDanh: "squid-game",
			trailer: "https://www.youtube.com/watch?v=2TvWZEVf6go&t=460s",
			hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/squid-game_gp01.jpg",
			moTa: "phim đang hot",
			maNhom: "GP01",
			ngayKhoiChieu: "2020-10-10T00:00:00",
			danhGia: 9,
			hot: true,
			dangChieu: false,
			sapChieu: false,
		},
  ],
  dangChieu: false,
  sapChieu: false,
	arrPhimDefault: [],
	phimDetail: {}
};

export const QuanLyPhimReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DANH_SACH_PHIM: {
      state.arrPhim = action.arrPhim;
      state.arrPhimDefault = state.arrPhim
			return { ...state, arrPhim: action.arrPhim };
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrPhim = state.arrPhimDefault.filter(film => film.dangChieu === state.dangChieu)
      return {...state}
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrPhim = state.arrPhimDefault.filter(film => film.sapChieu === state.sapChieu)
      return {...state}
		}
		case SET_CHI_TIET_PHIM: {
			state.phimDetail = action.phimDetail;
			return {...state}
			}
		default:
			return state;
	}
};
