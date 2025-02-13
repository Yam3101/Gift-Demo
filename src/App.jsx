import { useState } from "react";
import ImageBasil from "./components/ImageBasil";
import ImageCinamon from "./components/ImageCinamon";
import ImageGir from "./components/ImageGir";

const App = () => {
	const [selectedAnimal, setSelectedAnimal] = useState("basil");

	// Definir qué componente mostrar y los colores según la elección
	let ImageComponent;
	// biome-ignore lint/style/useSingleVarDeclarator: <explanation>
	let backgroundColor, shadowColor, buttonColor;

	switch (selectedAnimal) {
		case "basil":
			ImageComponent = <ImageBasil />;
			backgroundColor = "bg-rose-100";
			shadowColor = "shadow-rose-400";
			buttonColor = "bg-rose-500 hover:bg-rose-600";
			break;
		case "cinamon":
			ImageComponent = <ImageCinamon />;
			backgroundColor = "bg-blue-100";
			shadowColor = "shadow-blue-400";
			buttonColor = "bg-blue-500 hover:bg-blue-600";
			break;
		case "gir":
			ImageComponent = <ImageGir />;
			backgroundColor = "bg-green-100";
			shadowColor = "shadow-green-400";
			buttonColor = "bg-green-500 hover:bg-green-600";
			break;
		default:
			ImageComponent = <ImageBasil />;
	}

	return (
		<main
			className={`flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden ${backgroundColor}`}
		>
			{/* Barra de selección */}
			<nav className="absolute top-1 left-1">
				<div className="flex gap-1 bg-white/40 shadow-sm shadow-stone-500 p-2 rounded-lg">
					<button
						type="button"
						onClick={() => setSelectedAnimal("basil")}
						className="bg-rose-400 hover:bg-rose-300 text-white duration-200 px-4 py-2 rounded-lg"
					>
						Basil
					</button>
					<button
						type="button"
						onClick={() => setSelectedAnimal("cinamon")}
						className="bg-blue-400 hover:bg-blue-300 text-white duration-200 px-4 py-2 rounded-lg"
					>
						Cinnamoroll
					</button>
					<button
						type="button"
						onClick={() => setSelectedAnimal("gir")}
						className="bg-green-400 hover:bg-green-300 text-white duration-200 px-4 py-2 rounded-lg"
					>
						Gir
					</button>
				</div>
			</nav>

			{/* Contenedor principal */}
			<section className="flex flex-col items-center justify-center text-center">
				<article
					className={`w-92 ${backgroundColor} shadow-md ${shadowColor} patrick-hand py-4 rounded-md animation-main-cont`}
				>
					<div>
						<h1 className="text-xl font-semibold figtree uppercase tracking-tight">
							Would you like to be <br /> my{" "}
							<span className="font-bold">valentine</span>?
						</h1>
						{ImageComponent}
					</div>
					<div className="flex flex-wrap justify-center items-center gap-2">
						<button
							type="button"
							className={`${buttonColor} text-white hover:cursor-pointer text-xl font-medium w-28 rounded-3xl py-1 duration-300 animation-1`}
						>
							Yes
						</button>
						<button
							type="button"
							className="bg-stone-950 hover:bg-stone-800 text-white hover:cursor-pointer text-xl font-medium w-28 rounded-3xl py-1 duration-300 animation-2"
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
