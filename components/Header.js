/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
	const { data: session } = useSession();
	const router = useRouter();
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
				{/* Left -- Logo */}
				<div
					onClick={() => router.push("/")}
					className="relative w-24 hidden lg:inline-grid cursor-pointer">
					<Image
						src="https://links.papareact.com/ocw"
						alt="I am a header"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div
					onClick={() => router.push("/")}
					className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
					<Image
						src="https://links.papareact.com/jjm"
						alt="I am a header"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* Middle -- Search*/}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							type="text"
							placeholder="Search"
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md 
              focus:ring-black focus:border-black"
						/>
					</div>
				</div>

				{/* Right -- Menu */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon
						className="navBtn"
						onClick={() => router.push("/")}
					/>
					<MenuIcon className="h-6 md:hidden cursor-pointer" />

					{/* User or not... */}
					{session ? (
						<>
							<div className="relative navBtn">
								<PaperAirplaneIcon className="navBtn hover:rotate-180 rotate-45 " />
								<div
									className="absolute -top-1 -right-1 text-xs w-4 h-4 
									bg-red-500 rounded-full flex items-center justify-center
									 animate-pulse text-white">
									3
								</div>
							</div>
							<PlusCircleIcon
								className="navBtn"
								onClick={() => setOpen(true)}
							/>
							<UserGroupIcon className="navBtn" />
							<HeartIcon className="navBtn" />

							<img
								onClick={signOut}
								src={session.user?.image}
								alt="Profile Pic"
								className="rounded-full h-10 cursor-pointer"
							/>
						</>
					) : (
						<button onClick={signIn}>Sign In</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
