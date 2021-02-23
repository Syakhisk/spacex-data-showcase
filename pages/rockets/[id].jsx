import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import { fade, parent, scaleUp } from "../../lib/variants";
import spaceX from "../../services/spaceX";
import Image from "next/image";

function SingleRocket(props) {
	const { rocket } = props;

	return (
		<Layout
			pageTitle={`${rocket.name} - Rocket`}
			title='Rockets 🚀'
			back='/rockets'
			className='flex flex-col'>
			<article className='grid w-full grid-cols-1 p-5 bg-gray-900 lg:grid-cols-2 rounded-2xl'>
				<motion.aside
					variants={parent}
					initial='init'
					animate='anim'
					// className='order-1 grid grid-cols-2 gap-5 p-5 overflow-y-auto auto-rows-min px-auto place-items-center'>
					className='order-1 grid grid-cols-2 gap-5 p-5'>
					{rocket.flickr_images.map((img, idx) => (
						<motion.div
							variants={scaleUp}
							key={idx}
							className='overflow-hidden ring rounded-tl-xl rounded-br-xl'>
							<div className='relative object-cover w-full h-60 lg:h-full lg:w-96'>
								<Image
									layout='fill'
									objectFit='cover'
									className='object-center'
									loading='lazy'
									src={img}
								/>
							</div>
						</motion.div>
					))}
				</motion.aside>
				<motion.aside
					variants={scaleUp}
					initial='init'
					animate='anim'
					className='order-0 lg:order-2 w-full space-y-3'>
					<section>
						<span className='font-mono text-sm text-gray-500'>Name</span>
						<h2 className='font-mono text-5xl font-bold'>{rocket.name}</h2>
					</section>
					<section className='p-3 pr-24 border border-gray-700 rounded-br-full'>
						<span className='font-mono text-sm text-gray-500'>Description</span>
						<p className='font-mono text-sm text-gray-300 '>
							{rocket.description}
						</p>
						<a
							className='font-sans text-xs font-normal text-gray-400 hover:text-red-500'
							href={rocket.wikipedia}>
							-- Go to wikipedia page.
						</a>
					</section>

					<section className='flex space-x-5'>
						<div>
							<span className='font-mono text-sm text-gray-500'>Status</span>
							<p
								className={`font-mono text-gray-300 ${
									rocket.active ? "text-green-500" : "text-red-500"
								}`}>
								{rocket.active ? "Active" : "Inactive"}
							</p>
						</div>
						<div>
							<span className='font-mono text-sm text-gray-500'>
								First Flight
							</span>
							<p className='font-mono text-gray-300 '>{rocket.first_flight}</p>
						</div>
						<div>
							<span className='font-mono text-sm text-gray-500'>
								Success Rate
							</span>
							<p className='font-mono text-gray-300 '>
								{rocket.success_rate_pct}%
							</p>
						</div>
					</section>

					<section>
						<span className='flex font-mono text-sm text-gray-500'>
							Dimensions
						</span>
						<div className='flex justify-between w-4/5 py-3'>
							<div>
								<h5 className='text-xs'>Height</h5>
								<number className='text-3xl'>
									{rocket.height.meters}
									<sub className='text-sm'>m</sub>
								</number>
							</div>
							<div>
								<h5 className='text-xs'>Diameter</h5>
								<number className='text-3xl'>
									{rocket.diameter.meters}
									<sub className='text-sm'>m</sub>
								</number>
							</div>
							<div>
								<h5 className='text-xs'>Mass</h5>
								<number className='text-3xl'>
									{rocket.mass.kg.toLocaleString()}
									<sub className='text-sm'>kg</sub>
								</number>
							</div>
						</div>
					</section>

					<section>
						<span className='font-mono text-sm text-gray-500'>
							Cost Per Launch
						</span>
						<p className='font-mono text-gray-300 '>
							$ {Number(rocket.cost_per_launch).toLocaleString()}
						</p>
					</section>
					<section>
						<span className='font-mono text-sm text-gray-500'>Country</span>
						<p className='font-mono text-gray-300 '>{rocket.country}</p>
					</section>
				</motion.aside>
			</article>
		</Layout>
	);
}

SingleRocket.getInitialProps = async ({ query }) => {
	try {
		const id = query.id;
		const res = await spaceX.getRocket(id);
		return { rocket: res.data };
	} catch (error) {
		return { error };
	}
};

export default SingleRocket;
