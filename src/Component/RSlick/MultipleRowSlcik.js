import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import {
	SET_FILM_DANG_CHIEU,
	SET_FILM_SAP_CHIEU,
} from "../../Redux/actions/Types/QuanLyPhimType";
import { useDispatch, useSelector } from "react-redux";

import Phim from "../Phim/Phim";
import Phim_Flip from "../Phim/Phim_Flip";
import Slider from "react-slick";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;

	return (
		<div
			className={`${className} ${styleSlick["slick-prev"]}`}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		></div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${styleSlick["slick-prev"]}`}
			style={{ ...style, display: "block", left: "-50px" }}
			onClick={onClick}
		></div>
	);
}

const MultipleRowSlcik = (props) => {
	const { dangChieu, sapChieu } = useSelector(
		(state) => state.QuanLyPhimReducer
	);
	let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
	let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
	const dispatch = useDispatch();
	const renderPhim = () => {
		return props.arrPhim.slice(0, 100).map((item, index) => {
			return (
				<div className="mt-2" key={index}>
					<Phim_Flip phim={item} />
				</div>
			);
		});
	};
	console.log("dangChieu", dangChieu);
	console.log("sapChieu", sapChieu);

	const settings = {
		className: "center variable-width",
		//centerMode: true,
		infinite: true,
    centerPadding: "0",
    adaptiveHeight: true,
    innerHeight: "100%",
		slidesToShow: 2,
		speed: 1000,
		rows: 2,
		slidesPerRow: 2,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<div>
			<button
				className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white border-gray-800 mr-2 border`}
				onClick={() => {
					const action = { type: SET_FILM_DANG_CHIEU };
					dispatch(action);
				}}
			>
				PHIM ĐANG CHIẾU
			</button>
			<button
				className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
				onClick={() => {
					const action = { type: SET_FILM_SAP_CHIEU };
					dispatch(action);
				}}
			>
				PHIM SẮP CHIẾU
			</button>
			<Slider {...settings}>{renderPhim()}</Slider>
		</div>
	);
};

export default MultipleRowSlcik;
