import Link from "next/link";
import Image from "next/image";
import { Duotone } from "./filters";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContainerCrew(props) {
	const { crew, idx } = props;
	const [isImageHover, setIsImageHover] = useState(false);
	const imgStyle = { filter: isImageHover ? "none" : "url(#duotone)" };

	return (
		<motion.div
			{...props}
			key={idx}
			onMouseEnter={() => setIsImageHover(true)}
			onMouseLeave={() => setIsImageHover(false)}>
			<a
				role='div'
				href={crew.wikipedia}
				target='_blank'
				title="Go to astronauts' page"
				className='relative flex overflow-hidden select-none h-72 md:h-80 rounded-tl-3xl rounded-br-3xl ring-2 ring-red-500'>
				<Duotone />
				<div
					style={imgStyle}
					className='absolute z-0 object-cover w-full h-full'>
					<Image
						layout='fill'
						objectFit='cover'
						className='object-top md:object-center'
						src={crew.image}
					/>
				</div>
				<div className='absolute w-full h-full bg-gradient-to-t from-gray-900'></div>
				<div className='relative z-auto self-end p-5 font-mono text-xl '>
					<h6 className='text-sm text-red-500'>{crew.agency}</h6>
					<h5 className='text-xl'>{crew.name}</h5>
				</div>
			</a>
		</motion.div>
	);
}
