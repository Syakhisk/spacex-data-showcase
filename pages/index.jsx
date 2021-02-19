import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<div>
				<h1 className='text-5xl font-extrabold'>Hello, mamank!</h1>
				<h1 className='text-5xl font-bold'>Hello, mamank!</h1>
				<h1 className='text-5xl font-sans'>Hello, mamank!</h1>
				<h1 className='text-5xl font-thin'>Hello, mamank!</h1>
				<h1 className='text-5xl font-serif'>Hello, mamank!</h1>
				<h1 className='text-5xl font-body'>Hello, mamank!</h1>
			</div>
			<div>
				<Button color="bg-red-500">Hi</Button>
			</div>
		</Layout>
	);
}
