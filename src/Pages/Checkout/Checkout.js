import React from "react";
import { useSelector } from "react-redux";

export default function Checkout(props)
{
  const {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
	return (
		<div className=" min-h-screen " style={{minHeight: '100vh'}}>
			<div className="grid grid-cols-12">
				<div className="col-span-9"></div>
				<div className="col-span-3">
					<h3 className="text-green-400 text-center text-2xl">0 đ</h3>
					<hr></hr>
					<h3 className="text-xl">Lập mặt 4</h3>
					<p>Địa điểm: BHD Star -Vincom 3/2</p>
					<p>Ngày chiếu: 25/04/2021 - 12:05 Rạp 5</p>
					<hr></hr>
					<div className="grid grid-cols-2 my-5">
            <div>
              <span className="text-red-400">Ghế</span>
            </div>
            <div className="text-right">
              <span className="text-green-400 text-lg">0 đ</span>
            </div>
          </div>
          <hr></hr>
          <div className="my-5">
            <i>Email</i><br></br>
            {userLogin?.email}
          </div>
          <hr></hr>
          <div className="my-5">
            <i>Phone</i><br></br>
            {userLogin?.soDT === null ? "Trống" : userLogin?.soDT}
          </div>
          <hr></hr>
          <div className="mb-0 h-1/2 flex flex-col justify-end items-center" style={{marginBottom: 0}}>
            <div className="bg-green-800 text-white w-full text-center py-3 font-bold text-2xl border-2">
              ĐẶT VÉ
            </div>
          </div>
				</div>
			</div>
		</div>
	);
}
