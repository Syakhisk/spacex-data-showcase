import Layout from "../components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { scaleUp } from "../lib/variants";

const Home = (props) => {
	const pages = [
		{ href: "/rockets", icon: "🚀", text: "Rockets" },
		{ href: "/crews", icon: "👩‍🚀", text: "Crews" },
		{ href: "/launches", icon: "🥏", text: "Launches" },
	];

	return (
		<Layout noTitle full>
			<motion.div
				variants={scaleUp}
				initial='init'
				animate='anim'
				className='flex flex-col items-center justify-center w-full h-full space-y-5'>
				<Link href='/'>
					<div className='cursor-pointer'>
						<h1 className='text-4xl text-center text-red-500'>SpaceX</h1>
						<h2 className='text-center'>Data showcase</h2>
					</div>
				</Link>

				<div>
					<div className='grid gap-5 md:grid-flow-col text-center'>
						{pages.map((item, idx) => (
							<Link key={idx} href={item.href}>
								<div
									key={idx}
									className='flex flex-col w-48 p-5 space-y-3 font-mono text-gray-300 border select-none rounded-br-3xl rounded-tl-3xl hover:bg-red-500 hover:text-white'>
									<h1 className='text-4xl'>{item.icon}</h1>
									<h1 className='w-full text-2xl text-center'>{item.text}</h1>
								</div>
							</Link>
						))}
					</div>
				</div>
				<footer className='flex flex-col text-sm text-center text-gray-400'>
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
				</footer>
			</motion.div>
		</Layout>
	);
};

export default Home;
