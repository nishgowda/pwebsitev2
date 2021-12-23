import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));

import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Nish Gowda",
					description:
						"A showcase of my work and projects.",
					image : "https://avatars.githubusercontent.com/u/60044986?s=400&u=1c06106c009315869a3ffcce5e31aaafd811df45&v=4",

					url: "https://nishgowda.dev",
					keywords: [
						"Nish",
						"Nish Gowda",
					
						"Portfolio",
						"Nish Portfolio ",
						"Nish Gowda Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			< Projects />
			{/*
			<Experience />
			*/}
		</div>
	);
}



