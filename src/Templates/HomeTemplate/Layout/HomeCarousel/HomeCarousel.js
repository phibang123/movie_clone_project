import './HomeCarousel.css'

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";
import axios from "axios";
import { getCarouselAction } from "../../../../Redux/actions/CarouselAction";

const contentStyle = {
	height: "700px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
	backgroundSize: '100%',
	backgroundRepeat: 'no-repeat'
};
export default function HomeCarousel()
{
	const dispatch = useDispatch()
	useEffect(  () => {
		 
    
		
		dispatch(getCarouselAction(1))
	}, [])
	const {arrImg} = useSelector(state => state.CarouselReducer)

	const renderImg = () =>
	( arrImg.map((item, index) =>
		( <div key={index}>
				<div style={{...contentStyle,backgroundImage: `url(${item.hinhAnh})`,}}>
				</div>
			</div>
		))
	)
	return (
		<Carousel effect="fade"autoplay>
			
		  {renderImg()}
		</Carousel>
	);
}
