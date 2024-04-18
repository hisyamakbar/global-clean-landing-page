import React from "react";
import Image from "next/image";

import shoeCleaning from "/public/assets/images/shoeCleaning.jpg";
import { Navbar } from "./Navbar";

interface formProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	ClassName: string;
}

export const Header: React.FC<formProps> = ({ ClassName }) => {
	return (
		<header className={ClassName}>
			<Navbar ClassName="z-0 flex justify-between mb-6 col-span-full mt-11 items-center md:mb-10" />
			<div className="col-span-full md:col-span-8 lg:col-span-6 space-y-4 md:space-y-6">
				{/* Heading 1 */}
				<h1 className="text-4xl font-normal text-[#333333] leading-[56px] md:text-[52px] md:leading-[72px]">
					The <span className="text-4xl text-teal-500 md:text-[52px] md:leading-[72px]">Best</span> Shoe & <br className="hidden md:block lg:hidden" /> Sneaker Care Services
				</h1>
				<div className="space-y-6 md:space-y-10">
					<p className="text-neutral-500 md:text-lg">
						Pamper Your Shoes & Sneakers. Expert Cleaning & <br className="hidden md:block" /> Restoration Services. Elevate Your Style!
					</p>
					{/* Search Location */}
					<form action="#" className="items-center gap-2 p-3 outline outline-1 outline-[#D0D6E2] rounded-2xl flex flex-col bg-white md:flex-row md:max-w-[530px]">
						<div className="fill-[#c2c2c2] hidden md:block">
							<svg xmlns="http://www.w3.org/2000/svg" width={32} hanging={32} viewBox="0 0 24 24">
								<path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z" />
							</svg>
						</div>
						<input id="findInput" type="text" placeholder="Find the nearest outlet near you" className="w-full outline-none caret-[#333333] grow h-6 selection:bg-[#3CA19D] selection:text-white bg-transparent md:text-base" />
						<button type="submit" className="p-2 bg-[#3CA19D] rounded-[8px] inline-flex w-full justify-center items-center text-white font-semibold md:px-8 md:py-4 md:w-fit">
							Search
						</button>
					</form>
					{/* Statistic Data */}
					<div className="flex gap-8">
						{/* Country */}
						<div className="flex flex-col">
							<p className="text-3xl text-[#333333] md:text-5xl">12</p>
							<p className="text-[#717171] text-sm md:text-base">Country</p>
						</div>
						{/* Outlet */}
						<div className="flex flex-col">
							<p className="text-3xl text-[#333333] md:text-5xl">212</p>
							<p className="text-[#717171] text-sm md:text-base">Country</p>
						</div>
						{/* Satisfied Customer */}
						<div className="flex flex-col">
							<p className="text-3xl text-[#333333] md:text-5xl">202K</p>
							<p className="text-[#717171] text-sm md:text-base">Satisfied Customer</p>
						</div>
					</div>
				</div>
			</div>
			<div className="relative top-0 right-0 overflow-hidden rounded-2xl col-span-full md:col-span-8 lg:col-span-6 lg:absolute -z-10 h-[304px] md:h-[560px] lg:w-[640px] lg:h-[744px] lg:rounded-none">
				<Image
					src={shoeCleaning}
					alt="Shoe Cleaning Image"
					fill
					quality={100}
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</div>
		</header>
	);
};
