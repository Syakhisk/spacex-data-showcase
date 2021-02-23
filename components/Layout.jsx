import Head from "next/head";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/nunito-sans";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { fade, landingItemsInit, scaleUp } from "../lib/variants";

export default function Layout(props) {
	const router = useRouter();
	const { backTo } = router.query;

	const {
		pageTitle = "SpaceX Data Showcase",
		title,
		children,
		className = "",
		back = "/home",
		noTitle = false,
		full = false,
		...rest
	} = props;

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>

			<main
				{...rest}
				className={`max-w-6xl mx-auto p-5 py-10 flex flex-col h-full select-none ${className} ${
					full ? "w-full " : ""
				}`}>
				{!noTitle && (
					<div className='relative z-10 flex mb-5'>
						<div role='button' className='px-5'>
							<Link href={backTo ? backTo : back}>
								<div className='overflow-hidden'>
									<motion.h1
										initial={{ x: 50 }}
										animate={{ x: 0 }}
										role='button'
										className='w-full h-full font-mono text-5xl'>
										{"<"}
									</motion.h1>
								</div>
							</Link>
						</div>
						<div className='overflow-hidden'>
							<motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
								<h5 className='text-red-500'>SpaceX</h5>
								{title && <h1 className='text-3xl'>{title}</h1>}
							</motion.div>
						</div>
					</div>
				)}
				{children}
				{!noTitle && (
					<>
						<div className='flex-grow'></div>
						<motion.footer
							variants={scaleUp}
							initial='init'
							animate='anim'
							className='relative z-50 flex
							flex-col justify-center my-3 space-x-3 text-xs text-center
							text-gray-400 md:text-sm md:flex-row'>
							<span>Created with ♥</span>
							<a
								href='https://github.com/Syakhisk'
								target='_blank'
								className='hover:text-red-500'>
								&copy; Syakhisk Al-Azmi - 2021
							</a>
							<a
								href='https://github.com/Syakhisk/spacex-data-showcase'
								target='_blank'
								className='flex items-center justify-center space-x-2 hover:text-red-500'>
								<span>Github Repository</span>
								<svg
									className='h-4 w-auto'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									xmlns='http://www.w3.org/2000/svg'
									height='NaN'
									viewBox='0 0 16 16'
									version='1.1'
									width='NaN'
									aria-hidden='true'>
									<path
										fillRule='evenodd'
										className='fill-current'
										d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
								</svg>
							</a>
						</motion.footer>
					</>
				)}
			</main>
		</>
	);
}
