import "./Phim_Flip.css";

import Item from "antd/lib/list/Item";
import { NavLink } from "react-router-dom";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import React from "react";

export default function Phim_Flip(props) {
	const { phim } = props;
	return (
		<div style={{ height: "385px" }}>
			<div className="flip-card mt-2 p-2 rounded-md">
				<div className="flip-card-inner ">
					<div className="flip-card-front">
						<img
							src={phim.hinhAnh}
							alt="Avatar"
							style={{ width: 300, height: 320, borderRadius: "4px" }}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "https://picsum.photos/300/300";
							}}
						/>
						<div className="show-play-trailer">
							<button
								className="play-trailer"
								
								data-src={phim.trailer}
							>
								<img
									src="https://tix.vn/app/assets/img/icons/play-video.png"
									alt="play-trailer"
								></img>
							</button>
						</div>
					</div>
					<div className="info-card h-auto">
						<div className="info  mt-3 grid grid-cols-10">
							{phim.dangChieu === true ? (
								<div className="DC col-span-2 ">
									<span className="  h-10 w-10 p-1    bg-green-800 rounded-lg  text-white">
										DC
									</span>
								</div>
							) : (
								<div className=" col-span-2">
									<span className="   h-10 w-10 p-1  text-white"></span>
								</div>
							)}
							{phim.sapChieu === true ? (
								<div className="SC col-span-2 ">
									<span className="   h-10 w-10 p-1  bg-red-800 rounded-lg  text-white">
										SC
									</span>
								</div>
							) : (
								<div className=" col-span-2">
									<span className="   h-10 w-10 p-1  text-white"></span>
								</div>
							)}
							<div className="TenPhim col-span-6 w-auto">
								<p className="text-center font-medium text-sm">
									{phim.tenPhim}
								</p>
							</div>
						</div>
						<div className="pay">
							<NavLink  to={`/detail/${phim.maPhim}`}>
							<button className="rounded w-full text-white py-3 font-medium tracking-wide">
								
								MUA VÉ
							</button>
							</NavLink>
						</div>
					</div>
         
					{/* <div
					className="flip-card-back "
					style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)", height: 300}}
				>
					<div style={{ position: "absolute", top: 0, left: 0 }}>
						<img
							src={phim.hinhAnh}
							alt="Avatar"
							style={{ width: 300, height: 300 , borderRadius: "4px" }}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "https://picsum.photos/300/300";
							}}
						/>
					</div>
					<div
						className="w-full h-full"
						style={{
							position: "absolute",
							backgroundColor: "rgba(0,0,0,.5)",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div>
							<div className="rounded-full cursor-pointer">
								<PlayCircleOutlined style={{ fontSize: "50px" }} />
							</div>
							<div className="text-2xl mt-2 font-bold">{phim.tenPhim}</div>
						</div>
					</div>
				</div> */}
				</div>
			</div>
		</div>
	);
}
