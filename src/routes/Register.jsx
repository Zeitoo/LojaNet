import { NavLink } from "react-router-dom";

function Register() {
	return (
		<>
     
			<section className="bg-white">
				<div className="bg-white h-[100vh] w-[100vw] lg:w-[600px] flex flex-col border items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					
					<div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
								Create an account!
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="name@company.com"
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required=""
									/>
								</div>
								<div>
									<label
										htmlFor="confirm-password"
										className="block mb-2 text-sm font-medium text-black">
										Confirm password
									</label>
									<input
										type="confirm-password"
										name="confirm-password"
										id="confirm-password"
										placeholder="•••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required=""
									/>
								</div>
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="terms"
											aria-describedby="terms"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-100 "
											required=""
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											htmlFor="terms"
											className="font-light text-black">
											I accept the{" "}
											<a
												className="font-medium text-primary-600 ms-2 hover:underline dark:text-primary-500"
												href="#">
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
									Create an account
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<NavLink to={"/login"}>Login Here</NavLink>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>

        
	);
}


export default Register;
