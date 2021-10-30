import Footer from "./Layout/Footer/Footer";
import { Fragment } from "react";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
import { Route } from "react-router";

export const HomeTemplate = (
	props //props là : path exact và component
) => {
	const { Component, ...restProps } = props; //lấy componen ra còn lại là restProps

	return (
		<Route
			{...restProps}
			/*restProps là path và exact */ render={(
				propsRoute //propsRouter là nhửng cái local history , math
			) => {
				return (
					<Fragment>
						<Header {...propsRoute} />
        
           
            <Component {...propsRoute}></Component>
            <Footer></Footer>
					</Fragment>
				);
			}}
		></Route>
	);
};
