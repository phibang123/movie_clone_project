import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../Assets/Style/circle.css";

import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import { Rate, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import React from "react";
import { SET_CHI_TIET_PHIM } from "../../Redux/actions/QuanLyRapAction";
import { layThongTinChiTietPhim } from "../../Redux/actions/QuanLyRapAction";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";

const { TabPane } = Tabs;
export default function Detail(props) {
	const { phimDetail } = useSelector((state) => state.QuanLyPhimReducer);
	const [tabPosition, setState] = useState("left");

	const dispatch = useDispatch();

	useEffect(() => {
		//lấy thông tin param từ url
		let { id } = props.match.params;
		dispatch(layThongTinChiTietPhim(id));
	}, []);
	return (
		<div
			style={{
				minHeight: "100vh",
				backgroundImage: `url(${phimDetail.hinhAnh})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPositionY: "center",
			}}
		>
			<CustomCard
				style={{ paddingTop: 100, minHeight: "100vh", paddingBottom: 150 }}
				effectColor="#000000" // required
				color="#fff"
				blur={100} // default blur value is 10px
				borderRadius={-10} // default border radius value is 10px
			>
				<div className="container">
					<div className="grid grid-cols-12 my-16">
						<div className="col-span-9 col-start-1">
							<div className="grid grid-cols-8">
								<div className="  col-span-2 w-44 h-64">
								<img
									className="rounded w-full"
									src={phimDetail.hinhAnh}
									alt="123"
								></img>
								</div>
								<div className="col-span-6 relative  ">
									<div
										style={{
											float: "none",
											clear: "both",
											position: "absolute",
											top: "50%",

											transform: "translateY(-50%)",
											left: "5%",
										}}
									>
										<div className="">
											<span className="text-xs font-medium">
												{moment(phimDetail.ngayKhoiChieu).format("yyyy-MM-DD ")}
											</span>
										</div>
									
										<div className="mb-15">
											<p className="text-4xl font-medium">
												{phimDetail.tenPhim}
											</p>
										</div>
										
										<div>
											<button
												style={{
													width: 100,
													outline: "none",
													background:
														"linear-gradient(to left, #fb4226, #ce3017 100%)",
												}}
												className="rounded w-full text-white py-3 font-medium tracking-wide"
											>
												MUA VÉ
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-3 flex items-center flex-col justify-center">
							<div className={`c100 p${Number(phimDetail.danhGia) * 10} `}>
								<span>{Number(phimDetail.danhGia) * 10}%</span>
								<div className="slice">
									<div className="bar"></div>
									<div className="fill"></div>
								</div>
							</div>
							<div className="w-full text-center pr-6">
								<h1
									style={{ marginLeft: "5%" }}
									className="text-red-500 text-2xl"
								>
									<Rate
										allowHalf
										value={phimDetail.danhGia / 2}
										style={{ color: "#78ed78", fontSize: 20 }}
									/>
								</h1>
							</div>
						</div>
					</div>
					<div>
						<Tabs style={{ height: "400px"}}defaultActiveKey="1" centered>
							<TabPane
								className="my-7"
								tab={
									<div>
										<h1
											style={{
												color: "white",
												fontWeight: "500",
												fontSize: "20px",
											}}
										>
											Thông Tin
										</h1>
									</div>
								}
								key="1"
							>
								<div className="flex text-white font-medium">
									<div className="w-1/2">
										<div className="flex w-full">
											<div className="w-2/6">Tên Phim:</div>
											<div className="w-3/6">{phimDetail.tenPhim}</div>
										</div>
										<div className="flex w-full my-5">
											<div className="w-2/6">Ngày công chiếu</div>
											<div className="w-3/6">
												{" "}
												{moment(phimDetail.ngayKhoiChieu).format("yyyy-MM-DD ")}
											</div>
										</div>

										{phimDetail.dangChieu ? (
											<div className="w-full my-5">
												{" "}
												<div className="w-2/6">Đang Chiếu</div>{" "}
											</div>
										) : (
											<></>
										)}
										{phimDetail.hot ? (
											<div className="w-full my-5">
												{" "}
												<div className="w-2/6">Hot</div>{" "}
											</div>
										) : (
											<></>
										)}
										{phimDetail.sapChieu ? (
											<div className="w-full my-5">
												{" "}
												<div className="w-2/6">Sắp Chiếu</div>{" "}
											</div>
										) : (
											<></>
										)}
										<div className="flex w-full my-5">
											<div className="w-2/6">Đáng Giá:</div>
											<div className="w-3/6">
												{" "}
												<Rate
													allowHalf
													value={phimDetail.danhGia / 2}
													style={{ color: "#78ed78", fontSize: 20 }}
												/>
											</div>
										</div>
									</div>
									<div className=" w-1/2">
										<div className="w-full">
											<p>Nội Dung</p>
										</div>
										<div className="w-full">
											<p>{phimDetail.moTa}</p>
										</div>
									</div>
								</div>

								<Tabs tabPosition={tabPosition}>
									{phimDetail.heThongRapChieu?.map((rap, index) => {
										<TabPane
											tab={
												<img
													src={rap.logo}
													className="rounded-full"
													alt=""
													width="50"
												></img>
											}
											key={index}
										></TabPane>;
									})}
								</Tabs>
							</TabPane>
							<TabPane
								tab={
									<div>
										<h1
											style={{
												color: "white",
												fontWeight: "500",
												fontSize: "20px",
											}}
										>
											Lịch Chiếu
										</h1>
									</div>
								}
								key="2"
							>
								<Tabs tabPosition={tabPosition} style={{padding: "10px"}} className="bg-white">
									{phimDetail.heThongRapChieu?.map((rap, index) => {
										return (
											<TabPane
												tab={
													<div className="flex flex-row items-center justify-center">
														<img
															src={rap.logo}
															className="rounded-full w-full"
															alt=""
															style={{ width: 50 }}
														/>
														<div className="text-center ml-2">
															{rap.tenHeThongRap}
														</div>
													</div>
												}
												key={index}
											>	
												{rap?.cumRapChieu.map((cumRap, index) => {
													return (
														<div className="mt-5" key={index}>
															<div className="flex  flex-row items-center">
																<img
																	alt=""
																	style={{ width: 50, height: 50 }}
																	src={cumRap.hinhAnh}
																></img>
																<div className="ml-3">
																	<p className="font-medium text-base " style={{lineHeight: 0}}>{cumRap?.tenCumRap}</p>
																	{cumRap?.diaChi}
																</div>
															</div>
															<div className="thong-tin-lich-chieu grid grid-cols-6 m-2">
																{cumRap?.lichChieuPhim?.slice(0,12).map((lichChieu, index) =>
																{
																	return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 font-bold">
																		  {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
																	</NavLink>
																})}
															</div>
															<hr />
														</div>
												
													);
												})}
											</TabPane>
										);
									})}

									{/* <TabPane tab="Tab 2" key="2">
										Content of Tab 2
									</TabPane>
									<TabPane tab="Tab 3" key="3">
										Content of Tab 3
									</TabPane> */}
								</Tabs>
							</TabPane>
						</Tabs>
					</div>
				</div>
			</CustomCard>
		</div>
	);
}
