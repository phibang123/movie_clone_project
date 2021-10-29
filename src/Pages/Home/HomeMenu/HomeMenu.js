import { Radio, Space, Tabs } from "antd";
import React, { Fragment, memo, useState } from "react";

import { NavLink } from "react-router-dom";
import moment from "moment";

const { TabPane } = Tabs;
function HomeMenu(props) {
	const [state, setState] = useState({
		tabPosition: "left",
	});

	const { tabPosition } = state;
	const changeTabPosition = (e) => {
		setState({ tabPosition: e.target.value });
	};

	console.log("props", props);
	const renderHeThongRap = () => {
		return props.heThongRapChieu?.map((heThongRap, index) => {
			const { tabPosition } = state;
			return (
				<TabPane
					tab={
						<img
							src={heThongRap.logo}
							className="rounded-full"
							alt=""
							width="50"
						></img>
					}
					key={index}
				>
					<Tabs tabPosition={tabPosition}>
						{heThongRap.lstCumRap?.map((cumRap, index) => (
							<TabPane
								tab={
									<div
										className="grid grid-rows-3 grid-cols-4 grid-flow-col"
										style={{ width: "280px" }}
									>
										<img
											className="row-span-3 text-left "
											src={cumRap.hinhAnh}
											alt=""
											width="50"
										></img>
										<div className="col-span-2 text-sm text-left text-black font-bold">
											{cumRap.tenCumRap.length > 28
												? cumRap.tenCumRap.slice(0, 28) + "..."
												: cumRap.tenCumRap}
										</div>
										<div
											className="col-span-2 text-xs text-left text-gray font-bold"
											style={{ color: "#000000 !important" }}
										>
											{cumRap.diaChi.length > 28
												? cumRap.diaChi.slice(0, 28) + "..."
												: cumRap.diaChi}
										</div>
										<div className="col-span-2 text-sm text-left text-black">
											<span className="text-red-200">Chi Tiết</span>
										</div>
									</div>
								}
								key={index}
							>
								{/* load phim */}
								{cumRap.danhSachPhim?.map((danhSachPhim, index) => (
									<Fragment key={index}>
										<div className="my-5 flex">
											<div className="flex">
												<img
													src={danhSachPhim.hinhAnh}
													onError={(e) => {
														e.target.onerror = null;
														e.target.src = "https://picsum.photos/150/150";
													}}
													alt={danhSachPhim}
													style={{ width: 100, height: 150 }}
												></img>
												<div className="ml-3">
													<h1 className=" text-xl text-green-700">
														{danhSachPhim.tenPhim}
													</h1>
													<p>{cumRap.diaChi}</p>
													<div className=" grid grid-cols-6 gap-5 ">
														{danhSachPhim.lstLichChieuTheoPhim
															?.slice(0, 12)
															.map((lichChieu, index) => (
																<NavLink
																	className="text-lg text-green-400"
																	key={index}
																	to=""
																>
																	{moment(lichChieu.ngayChieuGioiChieu).format(
																		"hh:mm "
																	)}
																</NavLink>
															))}
													</div>
												</div>
											</div>
										</div>
									</Fragment>
								))}
							</TabPane>
						))}
					</Tabs>
				</TabPane>
			);
		});
	};
	return (
		<>
			<Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
		</>
	);
}

export default memo(HomeMenu);
