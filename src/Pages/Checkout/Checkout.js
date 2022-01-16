import "./Checkout.css";

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseOutlined } from "@ant-design/icons";
import { DAT_VE } from "../../Redux/actions/Types/QuanLyDatVeType";
import _ from "lodash";
import { layChiTietPhongVeAction } from "../../Redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";

export default function Checkout(props) {
	useEffect(() => {
		const action = layChiTietPhongVeAction(props.match.params.id);
		dispatch(action);
	}, []);
	const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

	const dispatch = useDispatch();

	//
	window.scrollTo(0, 0);
	//

	const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
		(state) => state.QuanLyDatVeReducer
	);
	const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  console.log(danhSachGheDangDat)
	const renderSeats = () => {
		return danhSachGhe.map((ghe, index) => {
			let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
			let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
			let indexGheDD = danhSachGheDangDat.findIndex(
				(gheDD) => gheDD.maGhe === ghe.maGhe
			);
			let classGheDangDat = indexGheDD != -1 ? "gheDangDat" : "";
			return (
				<Fragment key={index}>
					<button
						onClick={() => {
							dispatch({
								type: DAT_VE,
								gheDuocChon: ghe,
							});
						}}
						disabled={ghe.daDat}
						className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}
					>
						{ghe.daDat === true ? (
							<CloseOutlined className="font-bold" />
						) : (
							ghe.stt
						)}
					</button>
					{(index + 1) % 16 === 0 ? <br></br> : ""}
				</Fragment>
			);
		});
	};
	return (
		<div className=" min-h-screen max-h-screen">
			<div className="grid grid-cols-12">
				<div className="col-span-9">
					<div className="flex flex-col items-center mt-5">
						<div className="bg-black  w-4/5 h-3"></div>
						<div className={`${style.trapezoid} text-center`}>
							<h3 className="mt-3 text-black">Màn Hình</h3>
						</div>
						<div>{renderSeats()}</div>
					</div>
				</div>
				<div className="col-span-3 grid max-h-screen">
					<h3 className="text-green-400 text-center text-4xl mt-2">0 đ</h3>
					<hr></hr>
					<h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
					<p>
						Địa điểm: {thongTinPhim.tenCumRap} -{thongTinPhim.tenRap}
					</p>
					<p>
						Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioiChieu}
					</p>
					<hr></hr>
					<div className="grid grid-cols-2 my-5">
						<div className="grid grid-cols-8">
							<div className="col-span-3 flex flex-col justify-start items-center">
								<span className="text-red-400">Ghế:</span>
							</div>
							<div className="col-span-5">
								{_.sortBy(danhSachGheDangDat,["maGhe"]).map((ghe, index) => {
									return (
										<Fragment key={index} >
											<label className="bg-green-700 text-white font-bold m-2 leading-10 p-2 rounded-md">
												{ghe.stt}
											</label>
											{(index + 1) % 4 === 0 ? <br></br> : ""}
										</Fragment>
									);
								})}
							</div>
						</div>

						<div className="text-right">
							<span className="text-green-400 text-lg">{danhSachGheDangDat.reduce((tongTien, ghe, index) =>
							{
								return tongTien += ghe.giaVe;
							},0).toLocaleString()} đ</span>
						</div>
					</div>
					<hr></hr>
					<div className="my-5">
						<i>Email</i>
						<br></br>
						{userLogin?.email}
					</div>
					<hr></hr>
					<div className="my-5">
						<i>Phone</i>
						<br></br>
						{userLogin?.soDT === null ? "Trống" : userLogin?.soDT}
					</div>
					<hr></hr>
					<div
						className="mb-0 h-full flex flex-col justify-end items-center"
						style={{ marginBottom: 0 }}
					>
						<div className="bg-green-800 text-white w-full text-center py-3 font-bold text-2xl border-2">
							ĐẶT VÉ
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
