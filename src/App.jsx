import { useState } from "react";
import ImageBasil from "./components/ImageBasil";
import ImageCinamon from "./components/ImageCinamon";
import ImageGir from "./components/ImageGir";

const App = () => {
	const [selectedAnimal, setSelectedAnimal] = useState("basil");
	const [noClickCount, setNoClickCount] = useState(0);
	const [showFinalImage, setShowFinalImage] = useState(false);
	const [noButtonText, setNoButtonText] = useState("No");

	// Frases para el botón "No"
	const noButtonTexts = ["Are you sure?", "Really?", "Sureee?"];

	// Definir qué componente mostrar y los colores según la elección
	let ImageComponent;
	let finalImage;
	let backgroundColor;
	let shadowColor;
	let buttonColor;

	switch (selectedAnimal) {
		case "basil":
			ImageComponent = <ImageBasil />;
			finalImage = "./basil_final.svg";
			backgroundColor = "bg-rose-100";
			shadowColor = "shadow-rose-400";
			buttonColor = "bg-rose-500 hover:bg-rose-600";
			break;
		case "cinamon":
			ImageComponent = <ImageCinamon />;
			finalImage = "./cinamon_final.svg";
			backgroundColor = "bg-blue-100";
			shadowColor = "shadow-blue-400";
			buttonColor = "bg-blue-500 hover:bg-blue-600";
			break;
		case "gir":
			ImageComponent = <ImageGir />;
			finalImage = "./gir_final.svg";
			backgroundColor = "bg-green-100";
			shadowColor = "shadow-green-400";
			buttonColor = "bg-green-500 hover:bg-green-600";
			break;
		default:
			ImageComponent = <ImageBasil />;
	}

	// Función para cambiar el texto del botón "No"
	const handleNoClick = () => {
		if (noClickCount < 2) {
			setNoClickCount(noClickCount + 1);
			const randomIndex = Math.floor(Math.random() * noButtonTexts.length);
			setNoButtonText(noButtonTexts[randomIndex]);
		} else {
			setNoClickCount(3); // Hace que el botón desaparezca después de 3 intentos
		}
	};

	// Función al hacer clic en "Sí"
	const handleYesClick = () => {
		setShowFinalImage(true);
	};

	return (
		<main
			className={`flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden ${backgroundColor}`}
		>
			{/* Barra de selección */}
			<nav className="absolute top-3 md:top-1">
				<div className="flex gap-1 bg-white/40 shadow-sm shadow-stone-500 p-2 rounded-lg">
					<button
						type="button"
						onClick={() => setSelectedAnimal("basil")}
						className="bg-rose-400 hover:bg-rose-300 text-white duration-200 p-1 rounded-lg"
					>
						<img width={60} src="./basil_icon.svg" alt="imageIcon" />
					</button>
					<button
						type="button"
						onClick={() => setSelectedAnimal("cinamon")}
						className="bg-blue-400 hover:bg-blue-300 text-white duration-200 p-1 rounded-lg"
					>
						<img width={60} src="./cinamon_icon.svg" alt="imageIcon" />
					</button>
					<button
						type="button"
						onClick={() => setSelectedAnimal("gir")}
						className="bg-green-400 hover:bg-green-300 text-white duration-200 p-1 rounded-lg"
					>
						<img width={60} src="./gir_icon.svg" alt="imageIcon" />
					</button>
				</div>
			</nav>

			{/* Contenedor principal */}
			<section className="flex flex-col items-center justify-center text-center">
				<article
					className={`bg-white shadow-md ${shadowColor} patrick-hand py-4 sm:px-32 px-5 rounded-md animation-main-cont`}
				>
					<div className="flex flex-col items-center">
						{/* Mostrar la imagen final o el contenido normal */}
						{showFinalImage ? (
							<img width={200} src={finalImage} alt="Final Choice" />
						) : (
							<>
								<h1 className="text-xl font-semibold figtree uppercase tracking-tight">
									Would you like to be <br /> my{" "}
									<span className="font-bold">valentine</span>?
								</h1>
								{ImageComponent}
							</>
						)}
					</div>

					{/* Ocultar los botones cuando se muestra la imagen final */}
					{!showFinalImage && (
						<div className="flex flex-wrap justify-center items-center gap-2 relative">
							<button
								type="button"
								onClick={handleYesClick}
								className={`${buttonColor} text-white hover:cursor-pointer text-xl font-medium w-28 rounded-3xl py-1 duration-300 animation-1`}
							>
								Yes
							</button>
							{noClickCount < 3 && (
								<button
									type="button"
									onClick={handleNoClick}
									className="bg-stone-950 hover:bg-stone-800 text-white hover:cursor-pointer text-xl font-medium w-28 rounded-3xl py-1 px-2 duration-300 animation-2"
								>
									{noButtonText}
								</button>
							)}
						</div>
					)}
				</article>
			</section>
		</main>
	);
};

export default App;
