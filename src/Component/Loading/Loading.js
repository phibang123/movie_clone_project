import React, { Fragment } from "react";

import lodaing from "../../Assets/Img/Quarter-Circle-Loading-Image-1.gif";
import { useSelector } from "react-redux";

export default function Loading() {
	const { isLoading } = useSelector((state) => state.LoadingReducer);
	return (
		<Fragment>
			{isLoading ? (
				<div
					className="fixed flex top-0 left-0 w-full justify-center items-center h-full z-50"
					style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
				>
					<img src={lodaing} className="w-full" alt="Lodaing.js"></img>
				</div>
			) : (
				""
			)}
		</Fragment>
	);
}
