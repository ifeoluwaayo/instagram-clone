/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn as signInWithProvider } from "next-auth/react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
	return (
		<>
			<Header />
			<div
				className="flex flex-col items-center justify-center min-h-screen
             py-2 -mt-10 px-14 text-center">
				<img
					src="https://links.papareact.com/ocw"
					alt=""
					className="w-80"
				/>
				<p className="font-xs italic">
					This is not a REAL app. It is a CLONE developed by Adelaja
					Ayomide
				</p>

				<div className="mt-40 ">
					{Object.values(providers).map((provider) => (
						<div key={provider.name}>
							<button
								onClick={() =>
									signInWithProvider(provider.id, {
										callbackUrl: "/",
									})
								}
								className="p-3 bg-blue-500 rounded-lg text-white">
								Sign in with {provider.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
