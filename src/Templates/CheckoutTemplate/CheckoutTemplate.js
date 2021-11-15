import { Redirect, Route } from "react-router";

import { Fragment } from "react";
import { USER_LOGIN } from "../../Util/settings/config";

const CheckoutTemplate = (
	props //props là : path exact và component
) => {
	const { Component, ...restProps } = props; //lấy componen ra còn lại là restProps
	if (!localStorage.getItem(USER_LOGIN))
  {
    return <Redirect to="/login" ></Redirect>
  }
	return (
		<Route
			{...restProps}
			/*restProps là path và exact */ render={(
				propsRoute //propsRouter là nhửng cái local history , math
			) => {
				return (
					<Fragment>
					   <Component {...propsRoute}></Component>
					</Fragment>
				);
			}}
		></Route>
	);
};
export default CheckoutTemplate