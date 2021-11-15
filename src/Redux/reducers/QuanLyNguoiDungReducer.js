import { TOKEN, USER_LOGIN } from "../../Util/settings/config"

import { DANG_NHAP_ACTION } from "../actions/Types/QuanLyNguoiDung"

let user = {}
if (localStorage.getItem(USER_LOGIN))
{
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const initialState = {
   userLogin: user
}

export const QuanLyNguoiDungReducer =  (state = initialState, action) => {
  switch (action.type) {

    case DANG_NHAP_ACTION:
      const { thongTinDangNhap } = action
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))

       return { ...state,userLogin: thongTinDangNhap}

  default:
    return state
  }
}
