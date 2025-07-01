import { Outlet } from "react-router-dom";
import "./App.css";
import faveicons from "./assets/faveicon.png";
import heroImage from "./assets/images/image-1.jpg";
import heroImage2 from "./assets/images/image-2.jpg";
// Main application component

function App() {
	return (
		<div className="bg-white h-[100vh] relative w-[100vw]">
			<header className="flex items-center fixed w-[100%] top-0 left-0 justify-between px-10 py-7">
				<div className="logo">
					<img
						src={faveicons}
						alt="logo"
						className="w-[110px]"
					/>
				</div>
				<nav className="navigation flex items-center text-gray-700 font-medium">
					<ul className="nav-list flex gap-7">
						<li className="nav-item">Sobre nos</li>
						<li className="nav-item">Marketplace</li>
						<li className="nav-item">Contact</li>
					</ul>
				</nav>
				<div className="sign-options flex gap-2 items-center font-bold">
					<a className="bg-white font-bold text-blue-900">
						Log in
					</a>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="black"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 invert">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
						/>
					</svg>
				</div>
			</header>

			<section className="hero-section h-[100vh] text-gray-900">
				<div className=" flex flex-row items-center h-[100%] gap-20 ">
					<div className="w-[700px] me-0 ps-28">
						<div className="logo flex my-10 items-center">
							<img
								src={faveicons}
								alt="logo"
								className="w-[160px]"
							/>
							<div className="linha bg-azul h-[30px] translate-x-[-9px] w-[2px]"></div>
							<p className="font-bold text-xl azul">
								Seu talento, sua renda, online.
							</p>
						</div>
						<h1 className="text-3xl font-bold capitalize w-[500px] text-gray-900">
							Venda e distribua seus produtos digitais de forma
							simples, segura e com facilidade.
						</h1>

						<div className="my-10 flex gap-5">
							<button className="bg-azul text-white font-medium">
								Comecar Agora
							</button>
							<button className="bg-azul text-white font-medium">
								Comprar um Produto
							</button>
						</div>
					</div>

					<div className="relative top-10">
						<img
							src={heroImage2}
							alt="hero"
							className="w-[600px] absolute rotate-[-9deg] rounded-lg shadow-lg"
						/>
						<img
							src={heroImage}
							alt="hero"
							className="w-[600px]  rotate-[9deg] rounded-lg shadow-lg"
						/>
						
					</div>
				</div>
			</section>
			
			<section>

			</section>
		</div>
	);
}

export default App;
