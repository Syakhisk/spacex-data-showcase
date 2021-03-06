import cntl from "cntl";
import { motion } from "framer-motion";
import Link from "next/link";
import { scaleUp } from "../lib/variants";

export default function RocketContainer(props) {
	const { item, idx, handleBgChange } = props;
	const getRandom = (arr) => arr[Math.round(Math.random() * (arr.length - 1))];

	const containerCN = cntl`
  group 
  relative p-5 
  overflow-hidden text-center 
  border border-gray-600 
  rounded-br-full 
  hover:bg-red-500
  `;

	const rocketIdxCN = cntl`
  absolute bottom-0 z-0
  font-sans font-extrabold 
  text-gray-600 text-9xl 
  transition-all 
  group-hover:text-red-400 
  group-hover:text-8xl 
  `;

	return (
		<>
			<Link key={idx} href={`rockets/${item.id}`}>
				<motion.div
					variants={scaleUp}
					key={idx}
					onMouseEnter={() => handleBgChange(getRandom(item.flickr_images))}
					onMouseLeave={() => handleBgChange("")}
					role='button'
					className={containerCN}>
					<h1 className={rocketIdxCN}>{idx + 1}</h1>
					<motion.h2
						layoutId={`rocketName${item.id}`}
						className='relative z-10 font-mono text-3xl font-bold text-gray-300 group-hover:text-white'>
						{item.name}
					</motion.h2>
					<div className='relative z-10 flex justify-center'>
						<span className='mr-2 text-sm text-gray-500 group-hover:text-white'>
							First Flight:
						</span>
						<span className='text-sm text-gray-400 group-hover:text-white'>
							{item.first_flight}
						</span>
					</div>
				</motion.div>
			</Link>
		</>
	);
}
