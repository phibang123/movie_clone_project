import 'react-toastify/dist/ReactToastify.css';

import * as Yup from 'yup'

import { ToastContainer, toast } from 'react-toastify';

import React from "react";
import { dangNhapAction } from "../../Redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

export default function Login()
{
  const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			taiKhoan: "",
			matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required('Tài khoản không được bỏ trống'),
      matKhau:  Yup.string().min(6,"Mật Khẩu phải hơn 6 kí tự").required('Mật Khẩu không được bỏ trống').max(32,'Mật Khẩu phải ít hơn 32 kí tự')
  }),
    onSubmit: values =>
    {
      
      const action = dangNhapAction(values)
      dispatch(action)
		},
  });
  

	return (
		<form
      onSubmit={  (event) =>
        {
          event.preventDefault();
          formik.handleSubmit(event)
        }
    }
			className="lg:w-1/2 xl:max-w-screen-sm"
		>
			<div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
				<div className="cursor-pointer flex items-center">
				</div>
			</div>
			<div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
				<h2
					className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
				>
					Đăng nhập
				</h2>
				<div className="mt-12">
					<div>
						<div>
							<div className="text-sm font-bold text-gray-700 tracking-wide">
								Tài Khoản
							</div>
							<input
								name="taiKhoan"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
								className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
	
								placeholder="Nhập Tài Khoản"
              />
               <div className='text-red-700 text-base font-medium'>
                    {formik.errors.taiKhoan  && formik.touched.taiKhoan ? (<>{formik.errors.taiKhoan}</>):null}
                </div>
						</div>
						<div className="mt-8">
							<div className="flex justify-between items-center">
								<div className="text-sm font-bold text-gray-700 tracking-wide">
									Mật Khẩu
								</div>
								<div>
									<a
										className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                          cursor-pointer"
									>
										Forgot Password?
									</a>
								</div>
							</div>
							<input
								className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="matKhau"
                type="password"
								placeholder="Nhập Mật Khẩu"
              />
               <div className='text-red-700 text-base font-medium'>
                    {formik.errors.matKhau  && formik.touched.matKhau ? (<>{formik.errors.matKhau}</>):null}
                </div>
						</div>
						<div className="mt-10">
							<button
								className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
                type="submit"
                onSubmit={  (event) =>
                  {
                    event.preventDefault();
                    formik.handleSubmit(event)
                  }
              }
							>
								Enter
              </button>
              
             
						</div>
					</div>
					<div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
						Bạn chưa có tài khoản ?{" "}
						<a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
							Đăng kí
						</a>
					</div>
				</div>
			</div>

		</form>
	);
}
