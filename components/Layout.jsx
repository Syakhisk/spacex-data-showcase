import Head from "next/head";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/nunito-sans";

export default function Layout(props) {
	const { title = "Next.js Project!", children } = props;
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</>
	);
}
