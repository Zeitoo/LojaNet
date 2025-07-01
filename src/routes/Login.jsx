import { NavLink } from "react-router-dom";

function Login() {
	return (
		<>
			<div className="flex flex-col justify-center items-center bg-white h-[100vh] w-[100vw] lg:w-[600px]">
				<div className="mx-auto flex w-full flex-col items-center justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:px-6">
					<div className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] md:max-w-[450px] lg:mt-[130px] lg:max-w-[450px]">
						<h1 className="mb-2.5 mt-[50px] md:mt-0 font-bold text-zinc-950">
							Sign into your account!
						</h1>
						<div className="mt-8">
							<form className="pb-2">
								<input
									type="hidden"
									name="provider"
									value="google"
								/>
								<button
									className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white"
									type="submit">
									<span className="mr-2">
										<svg
											stroke="currentColor"
											fill="currentColor"
											strokeWidth="0"
											version="1.1"
											x="0px"
											y="0px"
											viewBox="0 0 48 48"
											enableBackground="new 0 0 48 48"
											className="h-5 w-5"
											height="1em"
											width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fill="#FFC107"
												d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
											<path
												fill="#FF3D00"
												d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
											<path
												fill="#4CAF50"
												d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
											<path
												fill="#1976D2"
												d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
										</svg>
									</span>
									<span>Google</span>
								</button>
							</form>
						</div>
						<div className="relative my-4">
							<div className="relative flex items-center py-1">
								<div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
								<div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
							</div>
						</div>
						<div>
							<form
								noValidate=""
								className="mb-4">
								<div className="grid gap-2">
									<div className="grid gap-1">
										<label
											className="text-zinc-950 mt-3 mb-1 text-sm ms-0.5 font-medium"
											htmlFor="email">
											Email
										</label>
										<input
											className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 0"
											id="email"
											placeholder="name@example.com"
											type="email"
											autoCapitalize="none"
											autoComplete="email"
											autoCorrect="off"
											name="email"
										/>
										<label
											className="text-zinc-950 mt-3 mb-1 text-sm ms-0.5 font-medium"
											htmlFor="password">
											Password
										</label>
										<input
											id="password"
											placeholder="•••••••••"
											type="password"
											autoComplete="current-password"
											className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 0"
											name="password"
										/>
									</div>
									<button
										className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
										type="submit">
										Sign in
									</button>
								</div>
							</form>
							<p className="text-gray-900">
								Don't have an account?
								<NavLink
									to={"/register"}
									className="font-medium text-zinc-950 ms-2 dark:text-white text-sm">
									Sign up
								</NavLink>
							</p>
							<p>
								<NavLink
									to={"/password-reset"}
									className="font-medium text-zinc-950 dark:text-white text-sm">
									Forgot your password?
								</NavLink>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
