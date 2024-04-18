"use client";

import React from "react";
import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Facebook, Instagram, Linkedin } from "lucide-react";

import shoeCleaning from "/public/assets/images/shoeCleaning.jpg";
import Adidas from "/public/assets/images/Adidas.png";
import Nike from "/public/assets/images/Nike.png";
import Puma from "/public/assets/images/Puma.png";
import NB from "/public/assets/images/NB.png";

export default function Home() {
	return (
		<main className=" mx-auto px-[35px] max-w-[1440px] relative md:px-[70px]">
			{/* Header */}
			<header className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 lg:min-h-[744px]">
				<Navbar ClassName="z-0 flex items-center justify-between mb-6 col-span-full mt-11 md:mb-10 lg:mb h-fit" />
				<div className="mb-4 col-span-full md:col-span-8 lg:col-span-6 h-fit md:mb-6 lg:mb-0">
					{/* Heading 1 */}
					<h1 className="text-4xl font-normal text-[#333333] leading-[56px] md:text-[52px] md:leading-[72px] mb-4 md:mb-6">
						The <span className="text-4xl text-teal-500 md:text-[52px] md:leading-[72px]">Best</span> Shoe & <br className="hidden md:block lg:hidden" /> Sneaker Care Services
					</h1>
					<div className="space-y-6 md:space-y-10">
						<p className="text-neutral-500 md:text-lg">
							Pamper Your Shoes & Sneakers. Expert Cleaning & <br className="hidden md:block" /> Restoration Services. Elevate Your Style!
						</p>
						{/* Search Location */}
						<form action="">
							<label htmlFor="findInput" className="items-center gap-2 p-3 outline outline-1 outline-[#D0D6E2] rounded-2xl flex flex-col bg-white md:flex-row md:max-w-[530px]">
								<div className="fill-[#c2c2c2] hidden md:block">
									<svg xmlns="http://www.w3.org/2000/svg" width={32} hanging={32} viewBox="0 0 24 24">
										<path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z" />
									</svg>
								</div>
								<input id="findInput" type="text" placeholder="Find the nearest outlet near you" className="w-full outline-none caret-[#333333] grow h-6 selection:bg-[#3CA19D] selection:text-white bg-transparent md:text-base" />
								<button type="submit" className="p-2 bg-[#3CA19D] rounded-[8px] inline-flex w-full justify-center items-center text-white font-semibold md:px-8 md:py-4 md:w-fit">
									Search
								</button>
							</label>
						</form>
						{/* Statistic Data */}
						<div className="flex gap-8">
							{/* Country */}
							<div className="flex flex-col">
								<p className="text-3xl text-[#333333] md:text-5xl">12</p>
								<p className="text-[#717171] hover:text-[#333333] text-sm md:text-base">Country</p>
							</div>
							{/* Outlet */}
							<div className="flex flex-col">
								<p className="text-3xl text-[#333333] md:text-5xl">212</p>
								<p className="text-[#717171] text-sm md:text-base">Official Outlet</p>
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
			{/* Our Service */}
			<section id="services" className="grid grid-cols-4 gap-5 mt-6 md:grid-cols-8 lg:grid-cols-12 md:mt-24 lg:mt-32 py-6">
				<div className="col-span-full space-y-4 text-center w-min-[290px] lg:w-max-[410px] mb-6 md:mb-14 ">
					<h2 className="text-3xl md:text-5xl text-[#333333]">Our Services</h2>
					<p className="text-base md:text-lg text-[#717171]">Dive into Our Range of Expert Shoe & Sneaker Care Solutions</p>
				</div>
				{/* Cards */}
				{/* Shoe Cleaning */}
				<div className=" px-4 py-6 col-span-full md:col-span-4 lg:col-span-3 outline outline-1 outline-[#D0D6E2] rounded-2xl text-center space-y-6 hover:shadow-2xl hover:shadow-shadow/9  bg-white group">
					<svg xmlns="http://www.w3.org/2000/svg" className="size-16 fill-[#3CA19D] mx-auto" viewBox="0 0 80 80">
						<path d="M10.77 0C6.527 0 3.076 3.451 3.076 7.692c0 4.242 3.45 7.693 7.692 7.693 4.241 0 7.692-3.451 7.692-7.693 0-4.24-3.45-7.692-7.692-7.692zm0 12.308a4.62 4.62 0 01-4.616-4.616 4.62 4.62 0 014.615-4.615 4.62 4.62 0 014.615 4.615 4.62 4.62 0 01-4.615 4.616zM64.615 55.385c-6.786 0-12.308 5.521-12.308 12.307C52.307 74.48 57.83 80 64.615 80c6.787 0 12.308-5.521 12.308-12.308 0-6.786-5.522-12.307-12.308-12.307zm0 21.538c-5.09 0-9.23-4.14-9.23-9.23 0-5.09 4.14-9.231 9.23-9.231 5.09 0 9.23 4.14 9.23 9.23 0 5.09-4.14 9.231-9.23 9.231zM44.615 4.615c-14.421 0-26.154 11.733-26.154 26.154 0 14.422 11.733 26.154 26.154 26.154 14.422 0 26.154-11.732 26.154-26.154 0-14.421-11.732-26.154-26.154-26.154zm0 49.231c-12.725 0-23.077-10.351-23.077-23.077 0-12.725 10.352-23.077 23.077-23.077 12.726 0 23.077 10.352 23.077 23.077 0 12.726-10.351 23.077-23.077 23.077z"></path>
						<path d="M44.615 13.846c-9.331 0-16.923 7.592-16.923 16.923a1.538 1.538 0 103.077 0c0-7.635 6.21-13.846 13.846-13.846a1.538 1.538 0 100-3.077zM37.127 59.082a1.536 1.536 0 00-2.088.61 15.396 15.396 0 01-13.5 8c-8.483 0-15.385-6.902-15.385-15.384a15.385 15.385 0 019.29-14.132 1.539 1.539 0 00-1.22-2.824A18.46 18.46 0 003.078 52.308c0 10.18 8.281 18.461 18.461 18.461a18.471 18.471 0 0016.2-9.599 1.538 1.538 0 00-.61-2.088z"></path>
						<path d="M21.538 61.538c-5.09 0-9.23-4.14-9.23-9.23a1.538 1.538 0 10-3.077 0c0 6.786 5.521 12.307 12.307 12.307a1.538 1.538 0 100-3.077z"></path>
					</svg>
					<div className="space-y-4">
						<p className="text-xl text-[#333333]">Shoe Cleaning</p>
						<p className="text-base text-[#717171] lg:min-h-[72px]">Restore the brilliance of your shoes with our professional cleaning service.</p>
					</div>
					<a href="#" className=" px-8 py-4 text-base rounded-2xl bg-white text-[#333333] outline outline-1 outline-[#D0D6E2] flex items-center justify-center group-hover:bg-[#3CA19D] group-hover:font-bold group-hover:text-white">
						Read More
					</a>
				</div>
				{/* Shoe Restoration */}
				<div className=" px-4 py-6 col-span-full md:col-span-4 lg:col-span-3 outline outline-1 outline-[#D0D6E2] rounded-2xl text-center space-y-6 hover:shadow-2xl hover:shadow-shadow/9  bg-white group">
					<svg xmlns="http://www.w3.org/2000/svg" className="size-16 fill-[#3CA19D] mx-auto" viewBox="0 0 80 80">
						<g clipPath="url(#clip0_725_272)">
							<path d="M69.634 64.037l-22.693-5.343a.142.142 0 01-.024-.005c-5.951-2.047-10.383-7.246-13.323-10.694-.773-.906-1.44-1.688-2.01-2.264-1.444-1.455-3.546-1.684-5.114-.558-1.51 1.084-1.933 2.993-1.055 4.75.033.065.068.125.11.182.281.392 6.982 9.647 15.182 13.746a1.333 1.333 0 101.192-2.385c-7.187-3.593-13.426-11.857-14.141-12.824-.335-.76.07-1.162.268-1.302.377-.272 1.037-.361 1.665.27.5.503 1.137 1.25 1.875 2.115 2.962 3.475 7.92 9.292 14.647 11.541.087.03.175.05.264.06l22.53 5.302c5.678 1.419 8.321 3.973 8.321 8.04v2.666h-43.17l-1.333-2.667H73.33a1.333 1.333 0 100-2.666H2.67V54.166c3.622 1.565 11.612 3.857 20.602-.999a1.333 1.333 0 00-1.267-2.346c-10.592 5.72-19.585.284-19.96.053a1.332 1.332 0 00-2.04 1.13v26.663C.005 79.403.601 80 1.337 80h26.664c.505 0 .967-.285 1.193-.737l1.473-2.948 1.473 2.948c.227.452.688.737 1.193.737h45.328c.737 0 1.333-.597 1.333-1.333v-4c0-5.335-3.478-8.91-10.36-10.63zM27.177 77.334H2.67v-2.667h25.84l-1.333 2.667zM17.336 34.663h29.33c13.467 0 22.679-2.85 23.139-2.996 6.763-2.576 10.19-7.4 10.19-14.336 0-6.996-3.43-11.82-10.267-14.362C69.338 2.848 60.048 0 46.666 0h-29.33C7.78 0 .006 7.774.006 17.331c0 9.556 7.774 17.332 17.33 17.332zm0-31.997h29.33c12.95 0 22.178 2.82 22.2 2.825 5.695 2.12 8.463 5.992 8.463 11.84 0 5.798-2.771 9.671-8.397 11.818-.09.029-9.236 2.847-22.266 2.847h-29.33c-8.085 0-14.665-6.579-14.665-14.665 0-8.085 6.58-14.665 14.665-14.665z"></path>
							<path d="M17.335 29.33h31.996a1.333 1.333 0 100-2.666H37.334a2.669 2.669 0 01-2.666-2.667V10.665A2.67 2.67 0 0137.332 8H49.33a1.333 1.333 0 100-2.666H17.335c-6.727 0-11.998 5.27-11.998 11.998 0 6.729 5.271 11.999 11.998 11.999zm0-21.33h15.408A5.266 5.266 0 0032 10.664v13.332c0 .976.283 1.878.743 2.667H17.335c-4.586 0-9.332-3.49-9.332-9.333C8.003 12.1 12.103 8 17.335 8zM54.664 26.664c.737 0 1.333-.598 1.333-1.334V9.333a1.333 1.333 0 10-2.666 0V25.33c0 .736.597 1.334 1.333 1.334z"></path>
							<path d="M39.999 11.999v10.665a1.334 1.334 0 002.666 0V12a1.333 1.333 0 10-2.666 0zM45.332 11.999v10.665a1.334 1.334 0 002.666 0V12a1.333 1.333 0 10-2.666 0z"></path>
						</g>
						<defs>
							<clipPath id="clip0_725_272">
								<path fill="#fff" d="M0 0H80V80H0z"></path>
							</clipPath>
						</defs>
					</svg>
					<div className="space-y-4">
						<p className="text-xl text-[#333333]">Shoe Restoration</p>
						<p className="text-base text-[#717171] lg:min-h-[72px]">Comprehensive service to give your shoes a new lease on life.</p>
					</div>
					<a href="#" className=" px-8 py-4 text-base rounded-2xl bg-white text-[#333333] outline outline-1 outline-[#D0D6E2] flex items-center justify-center group-hover:bg-[#3CA19D] group-hover:font-bold group-hover:text-white">
						Read More
					</a>
				</div>
				{/* Shoe Repainting */}
				<div className=" px-4 py-6 col-span-full md:col-span-4 lg:col-span-3 outline outline-1 outline-[#D0D6E2] rounded-2xl text-center space-y-6 hover:shadow-2xl hover:shadow-shadow/9  bg-white group">
					<svg xmlns="http://www.w3.org/2000/svg" className="size-16 fill-[#3CA19D] mx-auto" viewBox="0 0 80 80">
						<g clipPath="url(#clip0_726_283)">
							<path d="M4.46 22.788c2.69 1.572 6.586 2.403 11.27 2.403 6.617 0 13.946 2.068 14.401 6.608.317 3.165-3.26 6.057-8.901 7.199a1 1 0 00.396 1.958c3.37-.682 6.133-1.936 7.99-3.627 1.818-1.657 2.708-3.691 2.504-5.729-.236-2.354-1.883-4.476-4.637-5.977-2.917-1.59-6.982-2.43-11.754-2.43-4.329 0-7.877-.737-10.26-2.13-1.919-1.122-2.975-2.627-2.975-4.238 0-4.77 7.468-7.621 14.689-7.621a.999.999 0 100-1.998c-4.887 0-9.093.997-12.167 2.884-2.873 1.765-4.52 4.22-4.52 6.735 0 2.35 1.408 4.468 3.964 5.963zM11.589 42.068a28.932 28.932 0 011.54-.247 1 1 0 10-.265-1.981c-.56.075-1.113.163-1.646.264a1 1 0 10.371 1.964zM13.407 58.972c2.053.296 4.02.444 5.9.444 4.808 0 9.035-.968 12.616-2.895a1 1 0 10-.947-1.76c-4.597 2.474-10.412 3.225-17.284 2.233-5.018-.724-11.082-3.057-11.654-7.246-.333-2.43 1.545-4.794 5.022-6.326a1 1 0 10-.806-1.828c-4.34 1.912-6.656 5.061-6.196 8.424.604 4.422 5.719 7.853 13.349 8.954z"></path>
							<path d="M12.573 52.003c.838.392 1.912.598 3.097.598 3.5 0 7.969-1.801 10.204-5.953a1 1 0 00-1.76-.948c-2.492 4.63-8.425 5.553-10.695 4.492-.797-.372-.66-.716-.577-.922.188-.47.768-.903 1.677-1.251a.999.999 0 10-.715-1.866c-1.463.56-2.412 1.36-2.818 2.375-.568 1.42.04 2.752 1.587 3.475z"></path>
							<path d="M16.854 47.413c.051 0 .104-.004.156-.012a25.916 25.916 0 012.204-.24 1 1 0 10-.138-1.994c-.852.059-1.651.146-2.376.26a.999.999 0 00.154 1.986zM79.012 55.015a1 1 0 00-1.212.727c-.35 1.398-.942 2.779-1.762 4.105a1 1 0 001.7 1.05c.928-1.5 1.601-3.072 2-4.67a1 1 0 00-.726-1.212zM74.317 62.18c-3.154 3.65-8.102 6.687-13.576 8.33-5.359 1.61-10.43 1.675-13.915.18-2.79-1.196-3.147-2.122-3.17-2.465-.042-.581.667-1.36 1.944-2.137a1 1 0 10-1.04-1.707c-2.023 1.231-2.998 2.572-2.898 3.985.112 1.584 1.544 2.945 4.376 4.16 1.96.841 4.272 1.234 6.754 1.234 7.955 0 17.649-4.036 23.037-10.273a1 1 0 10-1.512-1.307z"></path>
							<path d="M52.043 61.13a61.78 61.78 0 01-1.464.64 1 1 0 00.777 1.842c.496-.21 1.004-.431 1.511-.661a1 1 0 10-.824-1.82zM69.376 18.343l2.404-2.548c1.696.814 3.24 1.711 4.595 2.672a.998.998 0 101.156-1.63 32.957 32.957 0 00-4.316-2.563l4.296-4.553a2.052 2.052 0 00-.041-2.873 2.052 2.052 0 00-2.873-.042l-5.87 5.54C57.19 8.082 42.67 7.43 34.898 7.43h-.095a1 1 0 00.001 1.998c7.399-.008 21.157.585 32.292 4.457l-2.65 2.5c-4.75-1.584-14.567-4.111-30.151-4.728a1 1 0 00-.08 1.996c14.295.567 23.614 2.75 28.572 4.298l-7.302 6.89c-7.362-3.286-18.096-4.326-26.77-5.166-6.39-.619-12.999-1.258-14.105-2.628-.08-.098-.074-.146-.069-.187.265-2.277 4.845-3.575 12.252-3.473a1 1 0 00.027-1.998c-6.218-.086-13.742.754-14.264 5.24-.07.603.102 1.182.5 1.673 1.556 1.929 6.631 2.507 15.466 3.362 8.225.797 18.337 1.776 25.38 4.672l-4.71 4.444c-1.9-1.256-4.315-2.367-7.193-3.306a1 1 0 00-.62 1.9c2.51.819 4.627 1.765 6.315 2.82l-5.064 4.778-1.07.244a6.511 6.511 0 00-5.028 7.256 4.56 4.56 0 01-3.007 4.9l-1.25.436a1 1 0 00.08 1.911c.098.025 1.277.32 2.956.32 1.799 0 4.17-.338 6.4-1.706 2.797-1.716 4.689-4.624 5.631-8.64l4.58-4.853c.684 2.111-.008 4.441-2.096 7.08a1 1 0 001.567 1.24c2.828-3.573 3.51-6.905 2.035-9.916l5.608-5.943c3.95 3.332 4.463 7.888 1.573 13.898a1 1 0 101.801.866c3.286-6.834 2.61-12.284-2-16.22l7.52-7.97c7.224 3.244 10.505 7.665 10.024 13.501-.538 6.542-3.397 12.126-8.737 17.07-4.68 4.332-10.333 7.251-14.074 9.183a1 1 0 10.917 1.775c7.88-4.068 22.55-11.642 23.886-27.864.536-6.512-3.02-11.618-10.57-15.196zM75.968 8.26a.063.063 0 01.09.001.063.063 0 010 .089L48.796 37.24l-1.718-1.718L75.968 8.26zM45.624 36.894l1.8 1.8-1.01 1.071-1.861-1.86 1.071-1.011zm-4.939 11.723c-1.447.893-2.998 1.256-4.334 1.37a6.568 6.568 0 002.162-5.784 4.523 4.523 0 013.492-5.04l.798-.182 2.53 2.53c-.833 3.326-2.394 5.717-4.648 7.106z"></path>
							<path d="M58.895 49.373c.456-.526.89-1.07 1.292-1.616a1 1 0 00-1.611-1.182c-.37.503-.77 1.003-1.19 1.488a1 1 0 101.51 1.31zM56.386 50.578a1 1 0 00-1.41-.083c-8.443 7.508-22.376 10.9-32.578 12.422-11.133 1.662-20.366 1.517-20.458 1.515a1 1 0 10-.036 1.998c.014 0 .248.005.676.005 2.35 0 10.528-.114 20.081-1.537 15.245-2.271 26.564-6.615 33.642-12.91a1 1 0 00.083-1.41zM37.985 28.416a1 1 0 10.465-1.944c-1.002-.24-1.626-.352-1.652-.357a.999.999 0 10-.352 1.967c.005.001.598.108 1.54.334zM66.527 45.69a.996.996 0 001.403-.172c2.73-3.495 5.678-8.8 4.22-14.227a1 1 0 00-1.93.518c.985 3.666-.352 7.982-3.865 12.479a.999.999 0 00.172 1.402zM69.031 29.168a.998.998 0 101.667-1.102c-.803-1.216-1.568-1.855-1.653-1.924a.997.997 0 00-1.4.142 1.001 1.001 0 00.135 1.405c.006.005.614.515 1.251 1.479zM28.99 9.567c.021 0 .042 0 .063-.002.007 0 .72-.044 1.96-.081a1 1 0 00-.062-1.998c-1.274.039-1.991.083-2.021.085a1 1 0 00.06 1.996z"></path>
						</g>
						<defs>
							<clipPath id="clip0_726_283">
								<path fill="#fff" d="M0 0H80V80H0z"></path>
							</clipPath>
						</defs>
					</svg>
					<div className="space-y-4">
						<p className="text-xl text-[#333333]">Shoe Repainting</p>
						<p className="text-base text-[#717171] lg:min-h-[72px]"> Renew your shoes appearance with our recoloring service.</p>
					</div>
					<a href="#" className=" px-8 py-4 text-base rounded-2xl bg-white text-[#333333] outline outline-1 outline-[#D0D6E2] flex items-center justify-center group-hover:bg-[#3CA19D] group-hover:font-bold group-hover:text-white">
						Read More
					</a>
				</div>
				{/* Shoe Repair */}
				<div className=" px-4 py-6 col-span-full md:col-span-4 lg:col-span-3 outline outline-1 outline-[#D0D6E2] rounded-2xl text-center space-y-6 hover:shadow-2xl hover:shadow-shadow/9  bg-white group">
					<svg xmlns="http://www.w3.org/2000/svg" className="size-16 fill-[#3CA19D] mx-auto" viewBox="0 0 80 80">
						<path d="M56.8 29.333h-7.467v-2.666h1.334c.4 0 .8-.134 1.066-.534.267-.4.4-.8.267-1.2L49.333 15.6c-.266-.533-.8-.933-1.333-.933h-2.667V5.333c0-.4-.133-.666-.4-.933l-4-4a1.289 1.289 0 00-1.866 0l-4 4c-.267.267-.4.533-.4.933v9.333H32c-.667 0-1.2.4-1.333.934L28 24.933c0 .4 0 .8.267 1.2.267.4.667.534 1.067.534h1.333v2.666H23.2c-3.2 0-5.867 2.667-5.867 5.867v38.933C17.333 77.333 20 80 23.2 80h33.6c3.2 0 5.867-2.667 5.867-5.867V35.2c0-3.2-2.667-5.867-5.867-5.867zM37.333 5.867L40 3.2l2.667 2.667v8.8h-5.333v-8.8zm-4.266 11.466h13.867L48.8 24h-2.133v-2.667c0-.8-.533-1.333-1.333-1.333-.8 0-1.334.533-1.334 1.333V24h-2.666v-2.667c0-.8-.534-1.333-1.334-1.333s-1.333.533-1.333 1.333V24H36v-2.667c0-.8-.533-1.333-1.333-1.333-.8 0-1.333.533-1.333 1.333V24h-2.267l2-6.667zm.266 9.334h13.334v2.666H33.333v-2.666zM20 45.333h8V64h-8V45.333zm40 4h-8c-.8 0-1.333.534-1.333 1.334S51.2 52 52 52h8v5.333H48c-.8 0-1.333.533-1.333 1.333 0 .8.533 1.334 1.333 1.334h12v4H41.867c-.267 0-.533-.267-.533-.533v-17.6c0-.267.266-.534.533-.534H60v4zm-18.133-6.666c-1.733 0-3.2 1.466-3.2 3.2v17.6c0 1.733 1.467 3.2 3.2 3.2H60v7.466c0 1.734-1.467 3.2-3.2 3.2H23.2c-1.733 0-3.2-1.466-3.2-3.2v-7.466h9.333c.8 0 1.334-.534 1.334-1.334V44c0-.8-.534-1.333-1.334-1.333H20V35.2c0-1.733 1.467-3.2 3.2-3.2h33.6c1.734 0 3.2 1.467 3.2 3.2v7.467H41.867z"></path>
						<path d="M40 6.667c-.8 0-1.333.533-1.333 1.333v2.667c0 .8.533 1.333 1.333 1.333.8 0 1.334-.533 1.334-1.333V8c0-.8-.534-1.333-1.334-1.333z"></path>
					</svg>
					<div className="space-y-4">
						<p className="text-xl text-[#333333]">Shoe Repair</p>
						<p className="text-base text-[#717171] lg:min-h-[72px]">Skilled craftsmen mend wear and tear on your shoes.</p>
					</div>
					<a href="#" className=" px-8 py-4 text-base rounded-2xl bg-white text-[#333333] outline outline-1 outline-[#D0D6E2] flex items-center justify-center group-hover:bg-[#3CA19D] group-hover:font-bold group-hover:text-white">
						Read More
					</a>
				</div>
			</section>
			{/* Benefits */}
			<section id="benefits" className="flex flex-col lg:flex-row-reverse lg:gap-5 lg:max-w-[1080px] mx-auto py-6 mt-6">
				{/* accordion */}
				<div className="flex flex-col lg:max-w-[580px]">
					<div className="col-span-full space-y-4 w-min-[290px] lg:w-max-[410px] mb-6 md:mb-14 lg:mb-8 ">
						<h2 className="text-3xl md:text-5xl text-[#333333]">Benefits Of Using Globalclean Services</h2>
						<p className="text-base md:text-lg text-[#717171]">
							Discover the Advantages of Choosing <br className="hidden lg:block" />
							Globalclean for Your Shoe & Sneaker Care Needs
						</p>
					</div>
					<Accordion type="single" collapsible defaultValue="item-1" className=" space-y-6">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-[#333]" viewBox="0 0 32 32">
									<path d="M26.735 13.795c.303-.775.465-1.787.465-3.138C27.2 3.79 23.217 0 16 0 8.784 0 4.8 3.79 4.8 10.657c0 1.351.162 2.363.465 3.138-1.261.873-2.065 1.972-2.065 3.326 0 1.725.601 2.346 1.99 2.49C5.682 26.55 10.32 32 16 32c5.68 0 10.318-5.45 10.81-12.39 1.389-.143 1.99-.764 1.99-2.489 0-1.354-.804-2.453-2.065-3.326zM16 1.6c6.37 0 9.6 3.047 9.6 9.057 0 1.041-.092 1.778-.27 2.334C22.716 11.77 19.072 11.2 16 11.2s-6.716.57-9.33 1.791c-.178-.556-.27-1.293-.27-2.334C6.4 4.647 9.63 1.6 16 1.6zm0 28.8c-4.796 0-8.731-4.735-9.209-10.776 2.034-.108 5.024-.53 9.21-.53 4.185 0 7.175.421 9.208.53C24.731 25.664 20.796 30.4 16 30.4zm11.116-12.479c-.037.022-.263.129-1.066.129-.722 0-1.648-.081-2.822-.184-1.89-.165-4.242-.37-7.228-.37-2.985 0-5.337.205-7.228.37-1.173.103-2.1.184-2.822.184-.787 0-1.02-.103-1.04-.103v.002c-.001-.002-.11-.18-.11-.828 0-2.547 5.903-4.32 11.2-4.32 5.298 0 11.2 1.773 11.2 4.32 0 .595-.092.794-.084.8z"></path>
									<path d="M19.2 4.8h-6.4a1.6 1.6 0 00-1.6 1.6V8a1.6 1.6 0 001.6 1.6h6.4A1.6 1.6 0 0020.8 8V6.4a1.6 1.6 0 00-1.6-1.6zm0 3.2h-6.4V6.4h6.4V8z"></path>
								</svg>
								Pick-up Service
							</AccordionTrigger>
							<AccordionContent>We provide a convenient pick-up service for your comfort. Simply leave your shoes, and we&apos;ll collect them for swift and efficient care.</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>
								<svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-[#333]" viewBox="0 0 32 32">
									<path d="M10.986 28.157a.754.754 0 01-.753.753H3.295a.754.754 0 01-.741-.89l1.776-9.588c.504-2.724 2.893-4.629 6.084-4.851 1.493-.104 2.992.193 4.223.836 1.393.73 2.375 1.85 2.84 3.242.047.14.089.285.125.431a.753.753 0 11-1.463.363 4.154 4.154 0 00-.092-.317c-.775-2.32-3.334-3.205-5.528-3.052-1.887.132-4.251 1.16-4.708 3.623l-1.61 8.696h6.032c.416 0 .753.338.753.754zM7.27 10.4c-.856-.89-1.856-2.534-1.752-5.316C5.636 1.918 8.086.282 10.48.012a9.74 9.74 0 011.085.006c2.377.288 4.792 1.923 4.91 5.066.103 2.782-.896 4.427-1.753 5.316a5.137 5.137 0 01-7.45 0zm.537-7.45c.929.372 2.032.589 3.189.62 1.156-.031 2.26-.248 3.188-.62-.766-.945-1.986-1.418-3.188-1.467-1.202.049-2.423.522-3.189 1.466zm.549 6.405a3.643 3.643 0 002.64 1.137c.995 0 1.933-.404 2.64-1.137.937-.974 1.398-2.431 1.331-4.215a4.116 4.116 0 00-.115-.836c-1.125.467-2.456.738-3.838.773a.788.788 0 01-.037 0c-1.382-.035-2.713-.306-3.838-.773-.064.26-.104.538-.115.836-.066 1.784.394 3.241 1.332 4.215zm18.008 21.138H12.466a.754.754 0 100 1.507h13.898a.754.754 0 000-1.507zm-13.529-9.9v7.783c0 .416.328.76.744.76h11.672a.775.775 0 00.771-.76v-1.237a.753.753 0 10-1.507 0v.49H14.342v-6.254h4.28a.754.754 0 000-1.507H13.58c-.416 0-.744.31-.744.725zm16.624.029a.754.754 0 01-.754.753h-.8c-.058.15-.14.392-.244.577l.566.551a.754.754 0 01-.531 1.287.746.746 0 01-.53-.221l-.562-.566a2.336 2.336 0 01-.582.245v.8a.754.754 0 11-1.507 0v-.8a2.469 2.469 0 01-.6-.245l-.574.567a.752.752 0 01-1.066-1.06l.566-.559c-.103-.184-.186-.425-.245-.576h-.8a.754.754 0 010-1.507h.8c.059-.226.142-.42.246-.605l-.566-.58a.753.753 0 01.001-1.065.756.756 0 011.068 0l.57.565c.185-.103.374-.186.6-.245v-.8a.754.754 0 011.507 0v.8c.226.06.397.143.582.246l.557-.565a.754.754 0 011.065.002.758.758 0 010 1.07l-.565.572c.103.185.186.379.245.605h.8c.416 0 .753.337.753.754zm-2.955-.029c0-.69-.562-1.253-1.253-1.253-.691 0-1.254.562-1.254 1.253a1.255 1.255 0 002.507 0z"></path>
								</svg>
								Expert Service
							</AccordionTrigger>
							<AccordionContent>
								With our team of experts, you can trust that your shoes will be handled with precision and attention to detail. We prioritize quality and thoroughness in every step of the care process.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>
								<svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-[#333]" viewBox="0 0 32 32">
									<g clipPath="url(#clip0_764_12)">
										<path d="M31.058 17.98c0 7.73-6.29 14.02-14.02 14.02C9.328 32 3.055 25.747 3.02 18.046H.942l3.116-4.674 3.115 4.674H5.357c.037 6.412 5.26 11.617 11.681 11.617 6.442 0 11.684-5.24 11.684-11.683S23.48 6.296 17.038 6.296a1.168 1.168 0 110-2.337c7.73 0 14.02 6.29 14.02 14.02zm-14.02 8.698c-4.795 0-8.698-3.904-8.698-8.698a.39.39 0 10-.778 0c0 5.224 4.25 9.477 9.476 9.477 5.226 0 9.476-4.253 9.476-9.477 0-5.226-4.25-9.479-9.476-9.479a.39.39 0 100 .78c4.796 0 8.698 3.902 8.698 8.699.001 4.796-3.901 8.698-8.698 8.698zm-4.497-3.015c.229.23.527.344.827.344.3 0 .597-.117.827-.344l3.67-3.668c.22-.22.343-.517.343-.827v-6.61a1.17 1.17 0 00-2.337 0v6.126l-3.33 3.328a1.168 1.168 0 000 1.651zM14.164 6.91c.535.452.804 1.28.804 2.483 0 1.295-.292 2.205-.882 2.726-.584.521-1.612.786-3.078.786l-.426.008v1.371H9.187v-1.37l-.395-.01c-1.46 0-2.486-.25-3.079-.75-.591-.501-.89-1.369-.89-2.606l.01-.418h2.07v.215c0 .753.12 1.24.358 1.46.241.216.784.327 1.618.327l.307.01V7.82c-1.632 0-2.744-.238-3.344-.709-.592-.47-.892-1.353-.892-2.648 0-1.256.3-2.115.897-2.578.6-.461 1.712-.695 3.339-.695V0h1.394v1.191c1.55 0 2.613.222 3.18.664.574.445.86 1.268.86 2.473v.28h-2.002l-.007-.22c0-.91-.57-1.364-1.704-1.364h-.327v3.067l.46.016c1.542.082 2.583.351 3.124.803zM9.19 3.013l-.3.01c-1.226 0-1.839.485-1.839 1.456 0 1.018.607 1.525 1.832 1.525.013 0 .112.008.306.018V3.013h.001zm3.683 6.416c0-.626-.146-1.037-.443-1.236-.295-.198-.91-.297-1.849-.297v3.245h.3c1.328 0 1.992-.571 1.992-1.712z"></path>
									</g>
									<defs>
										<clipPath id="clip0_764_12">
											<path d="M0 0H32V32H0z"></path>
										</clipPath>
									</defs>
								</svg>
								Save Your Time
							</AccordionTrigger>
							<AccordionContent>With our services, you save valuable time. No need to hassle with washing, repairing, or restoring your shoes yourself. We&apos;re here to assist you quickly and efficiently.</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								<svg xmlns="http://www.w3.org/2000/svg" className=" size-8 fill-[#333]" viewBox="0 0 32 32">
									<g clipPath="url(#clip0_764_15)">
										<path d="M16 32c-.104 0-.207-.016-.307-.048-3.357-1.075-6.215-3.138-8.495-6.13-1.795-2.356-3.232-5.288-4.27-8.715-1.754-5.78-1.774-10.93-1.774-11.146 0-.519.394-.952.91-1.002.078-.008 7.897-.81 13.345-4.767.352-.256.83-.256 1.183 0 5.446 3.957 13.266 4.76 13.345 4.767.515.05.91.484.91 1.002 0 .216-.021 5.365-1.774 11.146-1.04 3.427-2.476 6.359-4.271 8.715-2.28 2.992-5.138 5.055-8.495 6.13A1.01 1.01 0 0116 32zM3.196 6.844c.084 1.69.41 5.581 1.672 9.724 2.155 7.07 5.9 11.565 11.132 13.365 5.245-1.804 8.994-6.314 11.146-13.41 1.254-4.136 1.576-7.998 1.658-9.679C26.55 6.515 20.706 5.401 16 2.234 11.293 5.402 5.452 6.516 3.196 6.845z"></path>
										<path d="M15.462 20.902c-.239 0-.471-.085-.654-.241l-3.641-3.114a1.007 1.007 0 011.309-1.53l2.83 2.421 5.613-7.36a1.006 1.006 0 111.601 1.22l-6.258 8.208a1.006 1.006 0 01-.8.396z"></path>
									</g>
									<defs>
										<clipPath id="clip0_764_15">
											<path d="M0 0H32V32H0z"></path>
										</clipPath>
									</defs>
								</svg>
								100% Service Guarantee
							</AccordionTrigger>
							<AccordionContent>
								We take pride in our services and offer a 100% customer satisfaction guarantee. If you&apos;re not pleased with the results, we&apos;ll work hard to make it right or provide you with a full refund.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				{/* photo */}
				<div className="overflow-hidden rounded-2xl mt-5 lg:mt-0">
					<div className=" min-h-[290px] bg-[#C4C4C4] md:min-h-[530px]"></div>
					<div className="bg-[#575757] py-4 px-8 text-white flex">
						<div className="hidden md:block"></div>
						<p>Transform your shoes into like-new condition for only $2 with our remarkable services!</p>
					</div>
				</div>
			</section>
			{/* How We Works */}
			<section id="howWeWorks" className="py-6 mt-6">
				<div className="col-span-full space-y-4 text-center w-min-[290px] lg:w-max-[410px] mb-6 md:mb-14 ">
					<h2 className="text-3xl md:text-5xl text-[#333333]">How We Are Works</h2>
					<p className="text-base md:text-lg text-[#717171]">Learn About Our Simple and Efficient Process</p>
				</div>
				{/* content */}
				<div className="flex flex-col gap-6 lg:flex-row lg:gap-5 lg:justify-between">
					{/* step 1 */}
					<div className="flex flex-col gap-4 text-center">
						<div className="rounded-full bg-[#3CA19D] size-20 mx-auto flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="size-14 fill-white" viewBox="0 0 54 54">
								<path d="M20.8912 23.7098C19.1636 23.7114 17.4744 23.2007 16.0372 22.2421C14.6 21.2836 13.4793 19.9203 12.8171 18.3247C12.1548 16.7291 11.9807 14.973 12.3167 13.2784C12.6527 11.5839 13.4837 10.0271 14.7047 8.80491C15.9257 7.58276 17.4817 6.7502 19.1759 6.41256C20.8702 6.07492 22.6265 6.24736 24.2227 6.90808C25.8189 7.5688 27.1833 8.6881 28.1432 10.1244C29.1031 11.5607 29.6155 13.2494 29.6155 14.977C29.6133 17.2909 28.6937 19.5095 27.0583 21.1465C25.4229 22.7835 23.2051 23.7053 20.8912 23.7098ZM20.8912 9.62758C19.8308 9.62591 18.7937 9.93893 17.9113 10.527C17.029 11.1151 16.3409 11.9518 15.9344 12.9311C15.5278 13.9105 15.421 14.9885 15.6275 16.0286C15.8339 17.0687 16.3444 18.0241 17.0942 18.7739C17.844 19.5237 18.7994 20.0342 19.8395 20.2407C20.8796 20.4471 21.9576 20.3403 22.937 19.9337C23.9163 19.5272 24.753 18.8391 25.3411 17.9568C25.9292 17.0744 26.2422 16.0373 26.2405 14.977C26.2383 13.5589 25.674 12.1996 24.6713 11.1968C23.6686 10.1941 22.3092 9.62981 20.8912 9.62758Z" />
								<path d="M20.8912 47.7477C15.9316 47.7624 11.0922 46.2221 7.05365 43.3433C6.85765 43.2038 6.69376 43.0239 6.57298 42.8158C6.45219 42.6077 6.3773 42.3762 6.35334 42.1368C6.35334 41.9005 6.35334 41.6811 6.35334 41.4449C6.3066 39.5035 6.64861 37.5724 7.35926 35.7651C8.06991 33.9578 9.13483 32.311 10.4914 30.9214C11.8479 29.5318 13.4687 28.4275 15.2583 27.6736C17.0479 26.9196 18.9703 26.5312 20.9122 26.5312C22.8542 26.5312 24.7765 26.9196 26.5662 27.6736C28.3558 28.4275 29.9766 29.5318 31.3331 30.9214C32.6897 32.311 33.7546 33.9578 34.4652 35.7651C35.1759 37.5724 35.5179 39.5035 35.4712 41.4449C35.4838 41.6725 35.4838 41.9007 35.4712 42.1283C35.4484 42.3692 35.374 42.6024 35.2532 42.812C35.1324 43.0217 34.9679 43.2029 34.7708 43.3433C34.1971 43.7483 33.598 44.1365 32.999 44.4908C32.8074 44.6229 32.5905 44.7139 32.3621 44.7581C32.1336 44.8024 31.8985 44.7989 31.6714 44.7479C31.4444 44.6969 31.2303 44.5995 31.0427 44.4618C30.8551 44.3241 30.698 44.1491 30.5813 43.9478C30.4646 43.7464 30.3908 43.5231 30.3645 43.2919C30.3383 43.0607 30.3601 42.8266 30.4287 42.6042C30.4972 42.3818 30.6111 42.176 30.763 41.9997C30.9149 41.8235 31.1017 41.6805 31.3115 41.5799C31.5899 41.4111 31.8683 41.2424 32.1552 41.0652C32.0752 38.1544 30.8627 35.3897 28.7756 33.3592C26.6886 31.3287 23.8916 30.1926 20.9797 30.1926C18.0679 30.1926 15.2709 31.3287 13.1838 33.3592C11.0968 35.3897 9.88427 38.1544 9.80428 41.0652C13.1288 43.2339 17.0147 44.3836 20.984 44.3727C22.0204 44.3733 23.0554 44.2972 24.0805 44.1449C24.5281 44.0766 24.9844 44.189 25.3491 44.4572C25.7139 44.7254 25.9571 45.1275 26.0254 45.575C26.0936 46.0226 25.9813 46.4789 25.7131 46.8437C25.4449 47.2084 25.0428 47.4516 24.5952 47.5199C23.3685 47.6934 22.1299 47.7696 20.8912 47.7477Z" />
								<path d="M40.3735 25.7678C39.926 25.7678 39.4968 25.59 39.1803 25.2735C38.8638 24.957 38.686 24.5278 38.686 24.0803V12.8584C38.686 12.4108 38.8638 11.9816 39.1803 11.6652C39.4968 11.3487 39.926 11.1709 40.3735 11.1709C40.8211 11.1709 41.2503 11.3487 41.5668 11.6652C41.8832 11.9816 42.061 12.4108 42.061 12.8584V24.0803C42.061 24.5278 41.8832 24.957 41.5668 25.2735C41.2503 25.59 40.8211 25.7678 40.3735 25.7678Z" />
								<path d="M45.9846 20.1572H34.7627C34.3151 20.1572 33.8859 19.9794 33.5695 19.663C33.253 19.3465 33.0752 18.9173 33.0752 18.4697C33.0752 18.0222 33.253 17.593 33.5695 17.2765C33.8859 16.96 34.3151 16.7822 34.7627 16.7822H45.9846C46.4321 16.7822 46.8613 16.96 47.1778 17.2765C47.4943 17.593 47.6721 18.0222 47.6721 18.4697C47.6721 18.9173 47.4943 19.3465 47.1778 19.663C46.8613 19.9794 46.4321 20.1572 45.9846 20.1572Z" />
							</svg>
						</div>
						<div className="lg:max-w-[370px] mx-auto">
							<p className="text-[#333333] text-2xl mb-2">Step 1</p>
							<p className="text-[#717171] text-base">Create an account and Schedule a shoes pick-up and we will arrive at your door at the specified time.</p>
						</div>
					</div>
					{/* step 2 */}
					<div className="flex flex-col gap-4 text-center">
						<div className="rounded-full bg-[#3CA19D] size-20 mx-auto flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="size-14 fill-white" viewBox="0 0 54 54">
								<g clipPath="url(#clip0_727_328)">
									<path d="M54 34.647c0-4.498-2.617-6.58-7.46-7.555a37.431 37.431 0 00-1.381-.248 100.511 100.511 0 00-1.305-.205 28.098 28.098 0 01-1.554-.277c-.823-.177-2.468-1.046-4.715-2.469a2.701 2.701 0 00-4.395-2.964l-.007.007c-.42-.296-.851-.6-1.29-.914a2.701 2.701 0 00-4.103-3.484l-.278.279c-1.15-.86-2.236-1.684-3.175-2.406a2.21 2.21 0 00-2.912.19l-1.848 1.849a2.311 2.311 0 000 3.268l.503.503c.18.18.126.483-.084.573-4.218 1.812-7.527 1.14-10.098-1.074a9.712 9.712 0 01-1.377-1.458 6.101 6.101 0 01-.427-.62.9.9 0 00-.625-.444c-2.147-.385-3.5 2.816-4.944 8.955-.431 1.832-.823 3.79-1.169 5.748a118.194 118.194 0 00-.419 2.534L.05 37.023a.9.9 0 00.008.608c.173.46.681.98 1.642 1.419 1.384.632 3.503.997 6.527.997H47.7a7.76 7.76 0 001.012-.133 9.322 9.322 0 002.054-.632c1.985-.885 3.235-2.405 3.233-4.621l.001-.014zM4.564 25.403c1.55 1.005 3.324 1.862 5.336 2.608v1.236a2.7 2.7 0 002.7 2.7h5.873c.85 0 1.59-.476 1.965-1.177.796.164 1.939.4 2.354.488a56.93 56.93 0 013.013.707 5.342 5.342 0 012.74 1.782H2.87c.077-.474.164-.988.26-1.533a104 104 0 011.15-5.65 70.968 70.968 0 01.285-1.161zm7.136 3.844v-1.8a.9.9 0 01.9-.9H18a.9.9 0 01.9.9v1.8a.9.9 0 01-.896.9H12.6a.9.9 0 01-.9-.9zm24.037-7.046a.9.9 0 010 1.274l-.043.043-.002.001-1.865 1.864a.9.9 0 01-1.273-1.272l1.37-1.369.003-.004.536-.536a.9.9 0 011.273 0zm-5.4-4.39a.9.9 0 010 1.273l-.433.432-.004.004-1.473 1.473a.9.9 0 11-1.273-1.273l1.91-1.91a.9.9 0 011.273 0zM6.902 19.113a11.203 11.203 0 001.821 1.971c3.07 2.644 7.1 3.462 11.983 1.364 1.394-.598 1.715-2.43.648-3.5l-.504-.503c-.2-.199-.2-.523 0-.722l1.848-1.849a.41.41 0 01.542-.036 294.46 294.46 0 002.986 2.265l-.344.344c-.33.33-.556.723-.68 1.14a2.707 2.707 0 00.68 2.68 2.7 2.7 0 003.818 0l.932-.934c.428.307.848.605 1.26.895l-.61.61a2.7 2.7 0 003.818 3.818l1.35-1.35c2.523 1.609 4.347 2.574 5.47 2.816.452.097.93.181 1.654.295l.642.1c.264.041.46.072.654.104.497.081.917.156 1.316.236 3.726.75 5.645 2.074 5.966 4.89H30.705c-.947-1.723-2.523-3.004-4.43-3.52a58.61 58.61 0 00-3.109-.73c-.438-.093-1.667-.346-2.466-.51v-1.54a2.7 2.7 0 00-2.7-2.7h-5.4c-1.042 0-1.946.59-2.396 1.455-1.971-.754-3.677-1.618-5.135-2.629.705-2.366 1.398-3.985 1.833-4.46zM50.033 37.64a7.573 7.573 0 01-1.658.507c-.34.064-.598.094-.731.103l-39.418-.002c-2.785 0-4.658-.322-5.778-.834a3.018 3.018 0 01-.527-.299l.538-1.567h49.625c-.264.937-.972 1.61-2.051 2.092z"></path>
									<path d="M14.4 29.247h1.8a.9.9 0 100-1.8h-1.8a.9.9 0 100 1.8zM7.594 3.484L8.752 6.57 11.84 7.73 8.752 8.888l-1.158 3.088-1.159-3.088L3.348 7.73 6.435 6.57l1.159-3.087zM10.248 10.914l.52 1.425 1.425.521-1.424.522-.521 1.425-.522-1.425-1.425-.522 1.425-.52.521-1.426zM3.348 9.145l.688 1.789 1.789.688-1.79.688-.687 1.789-.688-1.789-1.789-.688 1.789-.688.688-1.789z"></path>
								</g>
								<defs>
									<clipPath id="clip0_727_328">
										<path d="M0 0H54V54H0z"></path>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="lg:max-w-[370px] mx-auto">
							<p className="text-[#333333] text-2xl mb-2">Step 2</p>
							<p className="text-[#717171] text-base"> We will clean your shoes by hand using all natural, non-harsh sneaker cleaning products and materials.</p>
						</div>
					</div>
					{/* step 3 */}
					<div className="flex flex-col gap-4 text-center">
						<div className="rounded-full bg-[#3CA19D] size-20 mx-auto flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="size-14 fill-white" viewBox="0 0 54 45">
								<g clipPath="url(#clip0_727_347)">
									<path d="M6.876 28.78a1.125 1.125 0 00-1.59-.07c-.13.119-.264.239-.403.361a1.125 1.125 0 001.485 1.69c.15-.132.297-.263.438-.392.458-.42.49-1.132.07-1.59zM7.63 27.993a1.124 1.124 0 001.566-.28c1.852-2.662 2.13-5.293 2.5-10.096a1.125 1.125 0 10-2.244-.173c-.347 4.525-.582 6.797-2.103 8.983-.355.51-.23 1.212.28 1.566zM42.012 15.592a1.126 1.126 0 002.2-.47 17.21 17.21 0 00-.151-.65 1.125 1.125 0 00-2.18.554c.046.186.09.377.131.566zM49.094 29.052c-3.293-2.739-4.016-5.407-4.475-10.733a1.125 1.125 0 00-2.242.193c.496 5.751 1.412 9.054 5.279 12.27a1.123 1.123 0 001.584-.146 1.125 1.125 0 00-.146-1.584z"></path>
									<path d="M46.607 33.142a1.047 1.047 0 00-.048-.087c-.273-.485-.62-.856-1.037-1.096-3.036-1.753-4.873-6.52-5.46-14.17-.437-5.675-4.483-10.325-9.747-11.727a3.912 3.912 0 00.624-2.123A3.943 3.943 0 0027 0a3.943 3.943 0 00-3.939 3.939c0 .781.23 1.51.624 2.123-5.264 1.402-9.31 6.053-9.746 11.727-.588 7.65-2.425 12.417-5.461 14.17-.88.507-1.45 1.585-1.652 3.116-.131.994-.171 3.082.613 3.865.211.211.497.33.795.33H20.24C20.777 42.516 23.603 45 27 45c3.397 0 6.223-2.484 6.762-5.73h12.004c.298 0 .584-.119.795-.33.785-.784.745-2.872.614-3.866-.1-.761-.292-1.41-.568-1.932zM27 2.25c.931 0 1.69.758 1.69 1.689A1.69 1.69 0 0127 5.628a1.69 1.69 0 01-1.689-1.689c0-.931.758-1.689 1.689-1.689zm0 40.5a4.613 4.613 0 01-4.466-3.48h8.932A4.613 4.613 0 0127 42.75zm17.955-5.73H9.045a6.649 6.649 0 01-.007-1.502c.108-1.005.397-1.514.564-1.61 3.77-2.177 5.923-7.393 6.58-15.947C16.616 12.307 21.368 7.878 27 7.878s10.383 4.43 10.818 10.083c.316 4.115.979 7.456 2 10.06H35.59a1.125 1.125 0 000 2.25h5.307c.509.87 1.078 1.618 1.708 2.25H31.387a1.125 1.125 0 000 2.25H44.83c.054.209.1.457.131.747.065.6.04 1.134-.006 1.502z"></path>
									<path d="M27.338 32.52h-.675a1.125 1.125 0 100 2.25h.675a1.125 1.125 0 000-2.25z"></path>
								</g>
								<defs>
									<clipPath id="clip0_727_347">
										<path d="M0 0H54V45H0z"></path>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="lg:max-w-[370px] mx-auto">
							<p className="text-[#333333] text-2xl mb-2">Step 3</p>
							<p className="text-[#717171] text-base">Once your shoes are clean, we will notify you to schedule a time for us to deliver the sneakers back to you.</p>
						</div>
					</div>
				</div>
			</section>
			{/* Partner */}
			<section className="grid grid-cols-4 gap-5 mt-6 md:grid-cols-8 lg:grid-cols-12 md:mt-24 lg:mt-32 place-items-center place-content-center">
				<div className="col-span-2 flex justify-center items-center size-32 lg:col-start-3">
					<Image src={Adidas} alt="Adidas Logo" className="object-contain opacity-30" />
				</div>
				<div className="col-span-2 flex justify-center items-center size-32">
					<Image src={Nike} alt="Nike Logo" className="object-contain opacity-30" />
				</div>
				<div className="col-span-2 flex justify-center items-center size-32">
					<Image src={NB} alt="NB Logo" className="object-contain opacity-30" />
				</div>
				<div className="col-span-2 flex justify-center items-center size-32">
					<Image src={Puma} alt="Puma Logo" className="object-contain opacity-30" />
				</div>
			</section>
			{/* Testimonial */}
			<section id="testimonial" className="grid grid-cols-4 gap-5 mt-6 md:grid-cols-8 lg:grid-cols-12 md:mt-24 lg:mt-32 place-items-stretch py-6">
				<div className="col-span-full space-y-4 w-min-[290px] lg:w-max-[410px] mb-6 md:mb-14 text-center ">
					<h2 className="text-3xl md:text-5xl text-[#333333]">What Our Clients Are Saying</h2>
					<p className="text-base md:text-lg text-[#717171]">Discover the Experiences and Testimonials of Our Satisfied Customers</p>
				</div>
				{/* People testimonial */}
				{/* 1 */}
				<div className="flex flex-col rounded-2xl outline outline-1 outline-[#C2C2C2] overflow-hidden col-span-4">
					{/* Photo */}
					<div className="hidden lg:block h-[288px] bg-[#556145]"></div>
					{/* content */}
					<div className="flex py-4 px-6 flex-col gap-6">
						<div className="flex gap-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="size-14" viewBox="0 0 36 36">
								<mask id=":rio:" width="36" height="36" x="0" y="0" maskUnits="userSpaceOnUse">
									<rect width="36" height="36" fill="#FFF" rx="72"></rect>
								</mask>
								<g mask="url(#:rio:)">
									<path fill="#ff005b" d="M0 0H36V36H0z"></path>
									<rect width="36" height="36" fill="#ffb238" rx="36" transform="rotate(129 16.692 14.308)"></rect>
									<g transform="rotate(9 23.853 11.147)">
										<path stroke="#000" strokeLinecap="round" d="M15 19c2 1 4 1 6 0"></path>
										<rect width="1.5" height="2" x="10" y="14" fill="#000" rx="1"></rect>
										<rect width="1.5" height="2" x="24" y="14" fill="#000" rx="1"></rect>
									</g>
								</g>
							</svg>
							<div className="flex flex-col gap-1">
								<p className=" text-base text-[#333333]">Martjellino</p>
								<div className="flex gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
								</div>
							</div>
						</div>
						<p className="text-[#717171] text-base">This is awesome! I’ve never seen shoes cleaner as good as this company, really like their services!</p>
					</div>
				</div>
				{/* 2 */}
				<div className="flex flex-col rounded-2xl outline outline-1 outline-[#C2C2C2] overflow-hidden col-span-4">
					{/* Photo */}
					<div className="hidden lg:block h-[288px] bg-[#E08452]"></div>
					{/* content */}
					<div className="flex py-4 px-6 flex-col gap-6">
						<div className="flex gap-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="size-14" viewBox="0 0 36 36">
								<mask id=":riv:" width="36" height="36" x="0" y="0" maskUnits="userSpaceOnUse">
									<rect width="36" height="36" fill="#FFF" rx="72"></rect>
								</mask>
								<g mask="url(#:riv:)">
									<path fill="#ff7d10" d="M0 0H36V36H0z"></path>
									<rect width="36" height="36" fill="#0a0310" rx="6" transform="rotate(15 24.298 36.49)"></rect>
									<g transform="rotate(-5 -12.856 -63.663)">
										<path stroke="#FFF" strokeLinecap="round" d="M15 19c2 1 4 1 6 0"></path>
										<rect width="1.5" height="2" x="14" y="14" fill="#FFF" rx="1"></rect>
										<rect width="1.5" height="2" x="20" y="14" fill="#FFF" rx="1"></rect>
									</g>
								</g>
							</svg>
							<div className="flex flex-col gap-1">
								<p className=" text-base text-[#333333]">Amru</p>
								<div className="flex gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#c2c2c2]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
								</div>
							</div>
						</div>
						<p className="text-[#717171] text-base">Wow! this is good, my shoes are looks good like the first time I bought this!</p>
					</div>
				</div>
				{/* 3 */}
				<div className="flex flex-col rounded-2xl outline outline-1 outline-[#C2C2C2] overflow-hidden col-span-4 md:col-span-8 lg:col-span-4">
					{/* Photo */}
					<div className="hidden lg:block h-[288px] bg-[#FFBC59]"></div>
					{/* content */}
					<div className="flex py-4 px-6 flex-col gap-6">
						<div className="flex gap-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="size-14" viewBox="0 0 36 36">
								<mask id=":rjc:" width="36" height="36" x="0" y="0" maskUnits="userSpaceOnUse">
									<rect width="36" height="36" fill="#FFF" rx="72"></rect>
								</mask>
								<g mask="url(#:rjc:)">
									<path fill="#ff005b" d="M0 0H36V36H0z"></path>
									<rect width="36" height="36" fill="#ffb238" rx="6" transform="rotate(-26 22 .674) scale(1.1)"></rect>
									<g transform="rotate(-4 5.682 -39.773)">
										<path stroke="#000" strokeLinecap="round" d="M15 20c2 1 4 1 6 0"></path>
										<rect width="1.5" height="2" x="10" y="14" fill="#000" rx="1"></rect>
										<rect width="1.5" height="2" x="24" y="14" fill="#000" rx="1"></rect>
									</g>
								</g>
							</svg>
							<div className="flex flex-col gap-1">
								<p className=" text-base text-[#333333]">Stillkiddie</p>
								<div className="flex gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#EBC12B]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
									<svg xmlns="http://www.w3.org/2000/svg" className=" size-5 fill-[#c2c2c2]">
										<path d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.489 6.91h7.266L10 0z"></path>
									</svg>
								</div>
							</div>
						</div>
						<p className="text-[#717171] text-base">The services was good, and my shoes delivered clean.</p>
					</div>
				</div>
			</section>
			{/* CTA */}
			<div className=" p-10 bg-[#3CA19D] flex flex-col text-center rounded-2xl gap-6 md:max-w-[628px] lg:max-w-[1080px] mx-auto justify-center items-center my-6">
				<p className="text-xl text-white md:text-4xl md:leading-[56px] lg:text-5xl lg:leading-[68px]">Sign-up Now and Receive Free Service Voucer on your first shoes cleaning.</p>
				<a className="px-8 py-4 bg-white text-[#3CA19D] rounded-[8px] font-semibold size-fit cursor-pointer">Sign-up Now</a>
			</div>
			{/* Footer */}
			<footer className="flex flex-wrap py-6">
				<div className="flex flex-col gap-3 w-full lg:w-fit lg:mr-auto">
					<p className="text-xl font-bold leading-7 text-[#333333]">GlobalClean</p>
					<p className="text-[#717171] text-base">
						Globalclean care service established in 2016. <br className="hidden md:block" /> We provide viariety of services for you
					</p>
				</div>
				{/* Summary */}
				<div className="flex flex-col min-w-[50%] md:min-w-[25%] lg:min-w-[215px] mt-5">
					<p className="text-[#333333] font-bold text-base mb-4">Summary</p>
					<ul className=" space-y-3">
						<li>
							<a href="#services" className=" text-[#717171] hover:text-[#333333]">
								Services
							</a>
						</li>
						<li>
							<a href="#benefits" className=" text-[#717171] hover:text-[#333333]">
								Benefits
							</a>
						</li>
						<li>
							<a href="#howWeWorks" className=" text-[#717171] hover:text-[#333333]">
								How We Works
							</a>
						</li>
						<li>
							<a href="#testimonial" className=" text-[#717171] hover:text-[#333333]">
								Testimonial
							</a>
						</li>
					</ul>
				</div>
				{/* Company */}
				<div className="flex flex-col min-w-[50%] md:min-w-[25%] lg:min-w-[215px] mt-5">
					<p className="text-[#333333] font-bold text-base mb-4">Company</p>
					<ul className=" space-y-3">
						<li>
							<a href="#" className=" text-[#717171] hover:text-[#333333]">
								Story
							</a>
						</li>
						<li>
							<a href="#" className=" text-[#717171] hover:text-[#333333]">
								Jobs
							</a>
						</li>
						<li>
							<a href="#" className=" text-[#717171] hover:text-[#333333]">
								Internship
							</a>
						</li>
					</ul>
				</div>
				{/* Support */}
				<div className="flex flex-col min-w-[50%] md:min-w-[25%] lg:min-w-[215px] mt-5">
					<p className="text-[#333333] font-bold text-base mb-4">Support</p>
					<ul className=" space-y-3">
						<li>
							<a href="#" className=" text-[#717171] hover:text-[#333333]">
								Faqs
							</a>
						</li>
						<li>
							<a href="#" className=" text-[#717171] hover:text-[#333333]">
								Email Us
							</a>
						</li>
					</ul>
				</div>
				{/* Social */}
				<div className="flex flex-col min-w-[50%] md:min-w-[25%] lg:min-w-[215px] mt-5">
					<p className="text-[#333333] font-bold text-base mb-4">Summary</p>
					<ul className="flex gap-4">
						<li>
							<a href="#" className="cursor-pointer">
								<Facebook className=" text-[#717171] hover:text-[#333333]" />
							</a>
						</li>
						<li>
							<a href="#" className="cursor-pointer">
								<Instagram className=" text-[#717171] hover:text-[#333333]" />
							</a>
						</li>
						<li>
							<a href="#" className="cursor-pointer">
								<Linkedin className=" text-[#717171] hover:text-[#333333]" />
							</a>
						</li>
					</ul>
				</div>
				<Separator className="w-dvw relative my-5"/>
				<div className="flex gap-5 flex-col lg:flex-row w-full">
					<p className="text-[#717171] w-full">© 2022 Globalclean. All right reserved</p>
					<div className="flex w-full flex-wrap gap-1 lg:justify-end">
						<a className=" cursor-pointer text-[#717171] hover:text-[#333333]">Terms of Service</a>
						<span className="text-[#717171]">|</span>
						<a className=" cursor-pointer text-[#717171] hover:text-[#333333]">Policy</a>
						<span className="text-[#717171]">|</span>
						<a className=" cursor-pointer text-[#717171] hover:text-[#333333]">Service Level Agreement</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
