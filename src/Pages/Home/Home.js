import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import HomeCarousel from "../../Templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import MultipleRowSlcik from "../../Component/RSlick/MultipleRowSlcik";
import MultipleRowSlick from '../../Component/RSlick/MultipleRowSlcik'
import Phim from "../../Component/Phim/Phim";
import { layDanhSachHeThongRapAction } from "../../Redux/actions/QuanLyRapAction";
import { layDanhSachPhimAction } from "../../Redux/actions/QuanLyPhimAction";

export default function Home() {
  const { arrPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch()
	useEffect(() => {
    dispatch(layDanhSachPhimAction())
    dispatch(layDanhSachHeThongRapAction())
  },[] )
  const heThongMemo = useMemo(() => heThongRapChieu,[heThongRapChieu])
  return (
    <>
       <HomeCarousel></HomeCarousel>
    <div className="container">
   
			<section className="text-gray-600">
        <div className=" px-5 py-20 mx-auto h-full">
          <MultipleRowSlcik arrPhim={arrPhim}></MultipleRowSlcik>
          {/* <div className="flex flex-wrap -m-4">
            

            
          </div> */}
				</div>
			</section>
      <div >
        <HomeMenu heThongRapChieu={heThongMemo}></HomeMenu>
        </div>
		</div>
   </>
	);
}
