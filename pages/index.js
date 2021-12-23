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
					author : "Nish Gowda",	

					description:
						"A showcase of my work and projects.",
					image : "https://nishgowda.dev/favicon.png",

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



