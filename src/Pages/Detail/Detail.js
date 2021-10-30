import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../Assets/Style/circle.css";

import { Button, CustomCard } from "@tsamantanis/react-glassmorphism";
import { Rate, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";

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
	console.log(phimDetail);
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
				style={{ paddingTop: 150, minHeight: "100vh" }}
				effectColor="#000" // required
				color="#fff"
				blur={30} // default blur value is 10px
				borderRadius={-10} // default border radius value is 10px
			>
				<div className="container">
					<div className="grid grid-cols-12 my-10">
						<div className="col-span-10 col-start-1">
							<div className="grid grid-cols-8">
								<img
									className="rounded col-span-2 "
									src={phimDetail.hinhAnh}
									alt="123"
								></img>
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
										<div>
											<span className="text-xs font-medium">
												{moment(phimDetail.ngayKhoiChieu).format("yyyy-MM-DD ")}
											</span>
										</div>
										<div>
											<p className="text-4xl font-medium">
												{phimDetail.tenPhim}
											</p>
										</div>
										<div>
											<p className="text-lg font-medium">
												{" "}
												{phimDetail.moTa?.length > 200
													? phimDetail.moTa.slice(0, 200) + "..."
													: phimDetail.moTa}
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
						<div className="col-span-2 flex items-center flex-col">
							<div className={`c100 p${Number(phimDetail.danhGia) * 10} `}>
								<span>{Number(phimDetail.danhGia) * 10}%</span>
								<div className="slice">
									<div className="bar"></div>
									<div className="fill"></div>
								</div>
							</div>
							<div>
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
						<Tabs defaultActiveKey="1" centered>
							<TabPane tab="Tab 1" key="1" style={{ backgroundColor: "white" }}>
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
										>
											Content of Tab 1
										</TabPane>;
									})}
								</Tabs>
							</TabPane>
							<TabPane tab="Tab 2" key="2">
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
										>
											Content of Tab 1
										</TabPane>;
									})}
									<TabPane tab="Tab 1" key="1">
										Content of Tab 1
									</TabPane>
									<TabPane tab="Tab 2" key="2">
										Content of Tab 2
									</TabPane>
									<TabPane tab="Tab 3" key="3">
										Content of Tab 3
									</TabPane>
								</Tabs>
							</TabPane>
							<TabPane tab="Tab 3" key="3">
								Content of Tab Pane 3
							</TabPane>
						</Tabs>
					</div>
				</div>
			</CustomCard>
		</div>
	);
}
