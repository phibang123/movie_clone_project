import { NavLink } from "react-router-dom";
import React from "react";
import logo from '../../../../Assets/Img/Logo/favpng_photographic-film-cinema-logo.png'

export default function Header(props) {
	return (
		<header className="py-4 px-10 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
			<div className=" flex justify-between h-16 mx-auto">
				<NavLink
					to="/home"
					aria-label="Back to homepage"
					className="flex items-center p-2"
				>
				 <img src={logo} className='w-24' alt='Header.js'></img>
				</NavLink>
				<ul className="items-stretch hidden space-x-3 lg:flex">
					<li className="flex">
						<NavLink
							to='/home'
              className="flex  items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white"
              activeClassName="text-yellow-400 border-b-2"
						>
							Home
						</NavLink>
					</li>
					<li className="flex">
						<NavLink
							to='/contact'
              className="flex items-center px-4 -mb-1  dark:border-transparent text-white"
              activeClassName="text-yellow-400 border-b-2"
						>
							Contact
						</NavLink>
					</li>
					<li className="flex">
						<NavLink
							to="/news"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="text-yellow-400 border-b-2"
						>
							News
						</NavLink>
					</li>
					
				</ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
            <NavLink
						to='/login'
              className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="text-yellow-400 border-b-2"
						>
							Sign in
						</NavLink>
          
            </li>
            <li className="flex">
            <NavLink
						to='/signup'
              className="flex items-center px-4 -mb-1 dark:border-transparent text-white"
              activeClassName="text-yellow-400 border-b-2"
						>
							Sign up
						</NavLink>
          
            </li>
          </ul>
		
					
				</div>
				<button className="p-4 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6 dark:text-coolGray-100"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
}
