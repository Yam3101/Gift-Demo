// import { useState } from "react";

const App = () => {
	return (
		<main className="flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden">
			<section className="flex flex-col items-center justify-center text-center">
				<article className="w-92 bg-rose-100 shadow-md shadow-rose-400 patrick-hand py-4 rounded-md">
					<div>
						<h1 className="text-xl font-semibold figtree uppercase tracking-tight">
							Would you like to be <br /> my{" "}
							<span className="font-bold">valentine</span>?
						</h1>
						<img src="" alt="imageHome" />
					</div>
					<div className="flex flex-wrap justify-center items-center gap-2">
						<button
							type="button"
							className="bg-rose-500 hover:bg-rose-600 text-white hover:cursor-pointer text-xl font-medium w-28 rounded-3xl py-1 duration-300"
						>
							Yes
						</button>
						<button
							type="button"
							className="bg-rose-500 hover:bg-rose-600 text-white hover:cursor-pointer text-xl font-medium w-28 rounded-3xl py-1 duration-300"
						>
							No
						</button>
					</div>
				</article>
			</section>
		</main>
	);
};

export default App;
