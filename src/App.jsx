import { useState } from "react";
import confetti from "canvas-confetti";

const App = () => {
	const [selectedAnimal, setSelectedAnimal] = useState("basil");
	const [noClickCount, setNoClickCount] = useState(0);
	const [showFinalImage, setShowFinalImage] = useState(false);
	const [noButtonText, setNoButtonText] = useState("No");
	const [showCelebrationText, setShowCelebrationText] = useState(false);

	// Frases para el botón "No"
	const noButtonTexts = ["Are you sure?", "Really?", "Sureee?"];

	// Frases de celebración
	const celebrationPhrases = ["Yayyy!!! 💖", "THANK YOUU! 🎉"];

	// Definir la imagen a mostrar y los estilos según la elección
	let imageSrc;
	let finalImage;
	let backgroundColor;
	let shadowColor;
	let buttonColor;

	switch (selectedAnimal) {
		case "basil":
			imageSrc = "./basil.svg";
			finalImage = "./basil_final.svg";
			backgroundColor = "bg-rose-100";
			shadowColor = "shadow-rose-400";
			buttonColor = "bg-rose-500 hover:bg-rose-600";
			break;
		case "cinamon":
			imageSrc = "./cinamon.svg";
			finalImage = "./cinamon_final.svg";
			backgroundColor = "bg-blue-100";
			shadowColor = "shadow-blue-400";
			buttonColor = "bg-cyan-400 hover:bg-cyan-500";
			break;
		case "gir":
			imageSrc = "./gir.svg";
			finalImage = "./gir_final.svg";
			backgroundColor = "bg-green-100";
			shadowColor = "shadow-green-400";
			buttonColor = "bg-lime-400 hover:bg-lime-500";
			break;
		default:
			imageSrc = "./basil.svg";
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
		setShowCelebrationText(true);

		// Mostrar confeti
		confetti({
			particleCount: 150,
			spread: 90,
			origin: { y: 0.6 },
		});
	};

	return (
		<main
			className={`flex flex-col items-center justify-center h-screen w-screen overflow-x-hidden ${backgroundColor}`}
		>
			{/* Barra de selección */}
			<nav className="absolute top-3 md:top-1">
				<div className="flex gap-1 bg-white/40 shadow-sm shadow-stone-500 p-2 rounded-lg animation-3">
					<button
						type="button"
						onClick={() => setSelectedAnimal("basil")}
						className="hover:bg-rose-300 bg-rose-400 text-white duration-200 p-1 rounded-lg"
					>
						<img src="./basil_icon.svg" alt="Basil Icon" />
					</button>
					<button
						type="button"
						onClick={() => setSelectedAnimal("cinamon")}
						className="hover:bg-cyan-200 bg-cyan-300 text-white duration-200 p-1 rounded-lg"
					>
						<img src="./cinamon_icon.svg" alt="Cinamon Icon" />
					</button>
					<button
						type="button"
						onClick={() => setSelectedAnimal("gir")}
						className="hover:bg-lime-200 bg-lime-300 text-white duration-200 p-1 rounded-lg"
					>
						<img src="./gir_icon.svg" alt="Gir Icon" />
					</button>
				</div>
			</nav>

			{/* Contenedor principal */}
			<section className="flex flex-col items-center justify-center text-center">
				<article
					className={`bg-white shadow-md ${shadowColor} patrick-hand py-4 sm:px-32 px-5 rounded-md animation-main-cont`}
				>
					<div className="flex flex-col items-center">
						{/* Mostrar la imagen final o la imagen normal */}
						{showFinalImage ? (
							<>
								<img width={200} src={finalImage} alt="Final Choice" />
								{/* Mostrar frase de celebración */}
								{showCelebrationText && (
									<p className="text-2xl figtree font-black mt-4 text-black">
										{
											celebrationPhrases[
												Math.floor(Math.random() * celebrationPhrases.length)
											]
										}
									</p>
								)}
							</>
						) : (
							<>
								<h1 className="text-xl font-semibold figtree uppercase tracking-tight">
									Would you like to be <br /> my{" "}
									<span className="font-bold">valentine</span>?
								</h1>
								<img width={200} src={imageSrc} alt="Selected Animal" />
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
