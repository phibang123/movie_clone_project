/* eslint-disable import/no-anonymous-default-export */
import "./Checkout.css";

import {
CHANGE_TAB,
DAT_VE,
} from "../../Redux/actions/Types/QuanLyDatVeType";
import { CheckOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import React, { Fragment, useEffect } from "react";
import {
	datVeAction,
	layChiTietPhongVeAction,
} from "../../Redux/actions/QuanLyDatVeAction";
import { useDispatch, useSelector } from "react-redux";

import { Tabs } from "antd";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import _ from "lodash";
import { layThongTinNguoiDungAction } from "../../Redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import style from "./Checkout.module.css";

function Checkout(props) {
	const dispatch = useDispatch();
	useEffect(() => {
		//
		window.scrollTo(0, 0);
		//
		const action = layChiTietPhongVeAction(props.match.params.id);
		dispatch(action);
	}, []);
	const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

	const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
		(state) => state.QuanLyDatVeReducer
	);
	const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

	const renderSeats = () => {
		return danhSachGhe.map((ghe, index) => {
			let classNameGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
			let classNameGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
			let indexGheDD = danhSachGheDangDat.findIndex(
				(gheDD) => gheDD.maGhe === ghe.maGhe
			);
			let classNameGheDangDat = indexGheDD != -1 ? "gheDangDat" : "";
			let classNameGheBanDat =
				ghe.taiKhoanNguoiDat === userLogin.taiKhoan ? "gheCuaBan" : "";
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
						className={`ghe ${classNameGheDaDat} ${classNameGheVip} ${classNameGheDangDat} ${classNameGheBanDat}`}
					>
						{classNameGheBanDat !== "" ? (
							<UserOutlined className="mb-2 font-bold" />
						) : ghe.daDat === true ? (
							<CloseOutlined className="mb-2 font-bold" />
						) : (
							<div className="mb-2  font-bold">{ghe.stt}</div>
						)}
					</button>
					{(index + 1) % 16 === 0 ? <br></br> : ""}
				</Fragment>
			);
		});
	};
	return (
		<div className=" min-h-screen max-h-screen ">
			<div className="grid grid-cols-12 mt-5">
				<div className="col-span-9">
					<div className="flex flex-col items-center mt-5">
						<div className="bg-black  w-4/5 h-3"></div>
						<div className={`${style.trapezoid} text-center`}>
							<h3 className="mt-3 text-black">Màn Hình</h3>
						</div>
						<div>{renderSeats()}</div>
						<div className="mt-10 flex justify-center w-2/3">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50 p-5">
									<tr>
										<th>Ghế chưa đặt</th>
										<th>Ghế đã đặt</th>
										<th>Ghế Vip</th>
										<th>ghế đang đặt</th>
										<th>Ghế mình đặt</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<tr>
										<td className="text-center">
											<button className="ghe">
												<CheckOutlined className="mb-2 font-bold" />
											</button>
										</td>
										<td className="text-center">
											<button className="ghe gheDaDat">
												<CloseOutlined className="mb-2 font-bold" />
											</button>
										</td>
										<td className="text-center">
											<button className="ghe gheVip">
												<CheckOutlined className="mb-2 font-bold" />
											</button>
										</td>
										<td className="text-center">
											<button className="ghe gheDangDat">
												<CheckOutlined className="mb-2 font-bold" />
											</button>
										</td>
										<td className="text-center">
											<button className="ghe gheCuaBan">
												{" "}
												<UserOutlined className="mb-2 font-bold" />
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="col-span-3 grid max-h-screen">
					<h3 className="text-green-400 text-center text-4xl mt-2">
						{danhSachGheDangDat
							.reduce((tongTien, ghe, index) => {
								return (tongTien += ghe.giaVe);
							}, 0)
							.toLocaleString()}{" "}
						đ
					</h3>
					<hr></hr>
					<h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
					<p>
						Địa điểm: {thongTinPhim.tenCumRap} -{thongTinPhim.tenRap}
					</p>
					<p>
						Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
					</p>
					<hr></hr>
					<div className="grid grid-cols-2 my-2">
						<div className="grid grid-cols-8">
							<div className="col-span-3 flex flex-col justify-start items-start">
								<span className="text-red-400">Ghế:</span>
							</div>
							<div className="col-span-5">
								{_.sortBy(danhSachGheDangDat, ["maGhe"]).map((ghe, index) => {
									return (
										<Fragment key={index}>
											<label
												onClick={() => {
													dispatch({
														type: DAT_VE,
														gheDuocChon: ghe,
													});
												}}
												className={`${
													ghe.loaiGhe === "Vip"
														? "bg-yellow-600"
														: "bg-green-700"
												} cursor-pointer  hover:bg-red-700 hover:transition transition text-white font-bold m-2 leading-10 p-2 rounded-md`}
											>
												{ghe.stt}
											</label>

											{(index + 1) % 4 === 0 ? <br></br> : ""}
										</Fragment>
									);
								})}
							</div>
						</div>

						<div className="text-right">
							<span className="text-green-400 text-lg">
								{danhSachGheDangDat
									.reduce((tongTien, ghe, index) => {
										return (tongTien += ghe.giaVe);
									}, 0)
									.toLocaleString()}{" "}
								đ
							</span>
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
						<div
							onClick={() => {
								const thongTinDatVe = new ThongTinDatVe();
								thongTinDatVe.maLichChieu = props.match.params.id;
								thongTinDatVe.danhSachVe = danhSachGheDangDat;
								dispatch(datVeAction(thongTinDatVe));
							}}
							className="bg-green-800 cursor-pointer text-white w-full text-center py-3 font-bold text-2xl border-2"
						>
							ĐẶT VÉ
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function KetQuaDatVe() {
	const dispatch = useDispatch();
	const { thongTinNguoiDung, userLogin } = useSelector(
		(state) => state.QuanLyNguoiDungReducer
	);

	useEffect(() => {
		const action = layThongTinNguoiDungAction();
		dispatch(action);
	}, []);

	const renderTicketItem = () => {
		return thongTinNguoiDung.thongTinDatVe.map((ticket, index) => {
			const fistDanhSachGhe = _.first(ticket.danhSachGhe);
			return (
				<div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
					<div className="h-full flex flex-wrap items-center border-gray-200 border p-4 rounded-lg">
						<img
							alt="team"
							className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
							src={ticket.hinhAnh}
						/>
						<div className="flex-grow ml-1">
							<h2 className="text-gray-900 title-font font-medium">
								{ticket.tenPhim}
							</h2>
							<p className="text-gray-500">
								<span>Ngày đặt: </span>{" "}
								{moment(ticket.ngayDat).format("hh:mm A - DD-MM-YYYY")}
							</p>
							<p className="text-gray-500">
								Địa điểm: {fistDanhSachGhe.tenCumRap}
							</p>
							<p className="text-gray-500">
								Tên cụm rạp: {fistDanhSachGhe.tenHeThongRap}
							</p>
						</div>
						<div className="grid grid-cols-12 w-full">
							<div className="col-span-2 flex flex-col justify-start text-center items-start">
								<span className="text-red-400">Ghế:</span>
							</div>
							<div className="col-span-10">
								{" "}
								{_.sortBy(ticket.danhSachGhe, ["maGhe"]).map((ghe, index) => {
									return (
										<Fragment key={index}>
											<label
												className={`bg-green-700 cursor-pointer  hover:bg-red-700 hover:transition transition text-white font-bold m-2 leading-10 p-2 rounded-md`}
											>
												{ghe.tenGhe}
											</label>

											{(index + 1) % 4 === 0 ? <br></br> : ""}
										</Fragment>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div className="p-5">
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-400">
							Lịch Sử Đặt Vé Khách Hàng
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven't heard of them.
						</p>
					</div>
					<div className="flex flex-wrap -m-2">{renderTicketItem()}</div>
				</div>
			</section>
		</div>
	);
}

const { TabPane } = Tabs;

export default function (props) {
	const { tabActive } = useSelector((state) => state.QuanLyDatVeReducer);
	const dispatch = useDispatch();
	
	
	return (
		<div className="p-5">
			<Tabs defaultActiveKey="1" activeKey={tabActive.toString()} onChange={(key) =>
			{
				dispatch({
					type: CHANGE_TAB,
					number: key
				})
			}}>
				<TabPane
					tab="01 CHỌN GHẾ và THANH TOÁN"
					key="1"
				>
					<Checkout {...props}></Checkout>
				</TabPane>
				<TabPane
					tab="02	KẾT QUẢ THANH TOÁN"
					key="2"
				>
					<KetQuaDatVe {...props}></KetQuaDatVe>
				</TabPane>
			</Tabs>
		</div>
	);
}
