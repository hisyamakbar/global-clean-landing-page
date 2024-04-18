import React from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

interface NavbarProps {
	ClassName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ ClassName }) => {
	return (
		<nav className={ClassName}>
			<div className="flex gap-16 items-center">
				<a href="#" className="text-xl font-bold leading-7 text-[#333333] 	">
					Globalclean
				</a>
				<div className="hidden lg:block space-x-16 gap-16">
					<a href="#" className="text-[#717171] text-base">
						Home
					</a>
					<a href="#" className="text-[#717171] text-base">
						Services
					</a>
					<a href="#" className="text-[#717171] text-base">
						About Us
					</a>
				</div>
			</div>
			<a href="#" className=" px-8 py-4 text-base font-bold rounded-2xl bg-white bg-opacity-30 text-white hidden lg:block">
				Contact us
			</a>
			<Sheet>
				<SheetTrigger className="lg:hidden">
					<Menu size={24} color="#333333" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you absolutely sure?</SheetTitle>
						<SheetDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
};
