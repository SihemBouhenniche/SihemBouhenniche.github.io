import { Github, Gitlab, Globe, HomeIcon, Paperclip, Smartphone } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GoogleScholarSvg from '$lib/imgs/googlescholar.svg';
import GoogleScholarDarkSvg from '$lib/imgs/googlescholar.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import UnivLille from '$lib/imgs/univ.png';
import EsiImg from '$lib/imgs/esi.png';
import InriaImg from '$lib/imgs/Logo-Inria.png';
import OkImg from '$lib/imgs/ok.png';
import DataFirstImg from '$lib/imgs/datafirst.webp';
import EmploiticImg from '$lib/imgs/emploitic.jpeg';
import BatolisImg from '$lib/imgs/batolis.png';

// Your resume data
export const DATA = {
	name: 'Sihem Bouhenniche',
	initials: 'SB',
	url: 'https://github.com/SihemBouhenniche/',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Lille, France',
	locationLink: 'https://www.google.com/maps/place/lille',
	description:
		'Cybersecurity and Privacy PhD researcher - Android device fingerprinting.',
	summary:
		'My name is Sihem Bouhenniche. I am currently pursuing a PhD. in cybersecurity at the University of Lille, with a focus on user privacy protection. My research centers around privacy and security issues related to mobile devices, particularly Android device fingerprinting. </br> I am also a member of the Spirals research team at Inria Lille. Before starting my PhD, I worked with the team for two years as a research engineer. During that time, I contributed to the development of amiunique.org, a popular browser fingerprinting platform that accounts around 2,000 visits per day. <br> I graduated from the Higher School of Computer Science of Algiers (ESI - Oued Smar) with both a Software Engineering degree and a Master’s degree. I also worked as a frontend developer at Ouedkniss.com, the largest e-commerce platform in Algeria, where I helped redesign the platform\'s interface and contributed to various new projects.',
	avatarUrl: 'https://media.licdn.com/dms/image/v2/D4E03AQH2Xb71tD0QpQ/profile-displayphoto-shrink_800_800/B4EZZnsNsvHEAg-/0/1745496376166?e=1767225600&v=beta&t=jNqeAcOdllKFLrWbfmPQzYCiYStvrki1oyg11xNqZI8',
	skills: [
		'Android Device Fingerprinting',
		'Android Security Mechanisms',
		'Android Device Integrity',
		'Browser Fingerprinting',
		'Network Measurment',
		'Bot Detection',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
	],
	contact: {
		email: 'sihem.bouhenniche@gmail.com',
		tel: '+123456789',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/SihemBouhenniche/',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/sihem-bouhenniche-467ba814b/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://twitter.com/sibouhenniche',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			PeerList: {
				name: 'Google Scholar',
				url: 'https://scholar.google.com/citations?user=oA2y9_IAAAAJ&hl=fr&oi=ao',
				// // icon: Icons.x,
				icon: GoogleScholarSvg,
				navbar: true,
				dark_icon: GoogleScholarDarkSvg
			},
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: 'https://github.com/SikandarJODD',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Send Email',
				url: 'mailto:sihem.bouhenniche@gmail.com',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	education: [
		{
			school: 'University of Lille, France',
			href: 'https://www.univ-lille.fr/',
			degree: 'Ph.D in Cybersecurity and Privacy',
			logoUrl: UnivLille,
			start: '2024',
			end: ''
		},
		{
			school: 'Higher School of Computer Science of Algiers (ESI - Oued Smar), Algeria',
			href: 'https://www.esi.dz/',
			degree: 'Master’s degree in Computer science and Software engineering',
			logoUrl: EsiImg,
			start: '2019',
			end: '2020'
		},
		{
			school: 'Higher School of Computer Science of Algiers (ESI - Oued Smar), Algeria',
			href: 'https://www.esi.dz/',
			degree: 'Computer science and Software engineering degree',
			logoUrl: EsiImg,
			start: '2015',
			end: '2020'
		},
	],
	publications: [
		{
			school: 'Boudjedar, S., Bouhenniche, S., Mokeddem, H., & Benachour, H. (2020, December). Automatic human resources ontology generation from the data of an e-recruitment platform. In Research Conference on Metadata and Semantics Research (pp. 97-109). Cham: Springer International Publishing.',
			href: 'https://link.springer.com/chapter/10.1007/978-3-030-71903-6_10',
			degree: 'Automatic Human Resources Ontology Generation from the Data of an E-Recruitment Platform',
			logoUrl: '',
			start: 'December 2020',
			end: ''
		},
	],
	projects: [
		{
			title: 'Publish Your Android Library to GitLab Registry with CI/CD Pipeline',
			href: 'https://javascript.plainenglish.io/publish-your-android-library-to-gitlab-registry-with-ci-cd-pipeline-7ac34563ae40',
			dates: 'July 16, 2024',
			active: true,
			description:
				'This tutorial will walk you through the entire process of creating and sharing your Android module, from setting up your library module to configuring an automated CI/CD pipeline that handles building and publishing for you as a Maven library in the GitLab package registry.',
			technologies: [
				'Gitlab',
				'Android',
				'Maven',
				'Gitlab Ci',
			],
			links: [
				{
					type: 'Source',
					href: 'https://gitlab.com/sihemBouh/euclideanoperations',
					icon: Gitlab
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: 'https://miro.medium.com/v2/resize:fit:2000/format:webp/1*2P6K3PICYSDMQ9dJ5F_UtQ.png',
			video: ''
		},
		{
			title: 'How to Create a Vue-based Chrome Extension',
			href: 'https://javascript.plainenglish.io/how-to-create-vuejs-based-chrome-extension-645d6fe9bf53',
			dates: 'May 30, 2023',
			active: true,
			description: 'In this tutorial, we will create a chrome extension that displays a random quote using VueJS and Webpack from scratch without any extension boilerplate.',
			technologies: [
				'Vuejs',
				'Laravel Mix',
				'Webpack',
				'Chrome Extension',
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/SihemBouhenniche/random-daily-quote',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*i2FeTrTKKCQjZNFwxfqkbQ.jpeg',
			video: ''
		},
		{
			title: 'Is it Possible to Create a REST API with Nuxt?',
			href: 'https://javascript.plainenglish.io/is-it-possible-to-create-a-rest-api-with-nuxtjs-230685fbd2bc',
			dates: 'October 25, 2022',
			active: true,
			description:
				'By using the serverMiddleware property of NuxtJS, creating a REST API with NuxtJS is totally possible. Through this tutorial, we will discover how to achieve that.',
			technologies: [
				'Nuxtjs',
				'Expressjs',
				'Mongodb',
				'Docker',
				'Docker Compose',
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/SihemBouhenniche/Todo-App-Nuxt',
					icon: Github
					// icon: <Icons.github className="size-3" />,
				}
			],
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*ni7m2h3hY8id4AMkj59pbQ.png',
			video: ''
		},
		{
			title: 'Create Your First NPM Package and Publish It into the Gitlab Registry',
			href: 'https://javascript.plainenglish.io/create-your-first-npm-package-and-publish-it-into-gitlab-registry-94eec41e0770',
			dates: 'October 14, 2022',
			active: true,
			description:
				'While using NodeJS to develop your web apps, you may notice the existence of a variety of NPM packages and libraries that makes the development process much easier. These packages help us reduce project complexity and allow us to reuse open source methods without a without hassle.',
			technologies: [
				'NPM',
				'JavaScript',
				'Gitlab',
				'Jest',
				'Documentation'
			],
			links: [
				{
					type: 'Source',
					href: 'https://gitlab.com/sihemBouh/sb-geometry-plugin',
					icon: Gitlab
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*-kwgrTjV1caKyGGu0a5-_A.png',
			video: ''
		},
		{
			title: 'Create a Multilingual Web App Using Vue.js 2 + Vue 18n',
			href: 'https://javascript.plainenglish.io/create-multilingual-web-app-using-vuejs-2-vue-18n-f18eaf47b2a0',
			dates: 'April 22, 2022',
			active: true,
			description:
				'In this tutorial we’ll see how to integrate the vue-i18n plugin in a VueJS app through a simple single page application (personality test result given by 16 personalities) in three different languages: English, Arabic and French.',
			technologies: [
				'Vuejs',
				'Vuetify',
				'I18n',
				'Composition Api',
				'Multilingual'
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/SihemBouhenniche/i18n-vue-app-example',
					icon: Github
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*qKUuxwY0QVOhPoElnkWe2Q.jpeg',
			video: ''
		},
		{
			title: 'Create REST API With Django Neomodel and Neo4j Database',
			href: 'https://medium.com/swlh/create-rest-api-with-django-and-neo4j-database-using-django-nemodel-1290da717df9',
			dates: 'Jul 19, 2020',
			active: true,
			description:
				'In this tutorial, I’ll show you how to create a REST API using Django and Neo4j database through a simple example. In order to create this API, we need to use an Object Graph Mapper (OGM) to request the graph database, that’s why we will use django_neomodel which is a Django integration of the awesome OGM neomodel.',
			technologies: [
				'Neo4j',
				'Django',
				'Rest Api',
				'Graph Database',
				'Python'
			],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/SihemBouhenniche/NeomodelAPI',
					icon: Github
					// icon: <Icons.globe className="size-3" />,
				}
			],
			image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*unpojBSzIGm2HsgOu8hWyg.jpeg',
			video: ''
		}
	],
	hackathons: [
		{
			title: 'Cybersecurity and Privacy PhD researcher',
			dates: 'January 2024 - Present',
			location: 'University of Lille, France',
			description:
				'My Ph.D. research primarily focuses on exploring topics related to user security and privacy while using mobile devices, more specifically Android devices.<br>I am currently working on Android device fingerprinting, a technique used to identify users based on non-sensitive device characteristics such as language, time zone, manufacturer, and model. While this technique is often used by trackers to silently monitor users and build user profiles, my research aims to better understand and mitigate these privacy risks.<br>As part of my work, I developed an Android application, available on the Google Play Store, that collects Android device fingerprints. The goal of this application is to gather data to support and advance my research.',
			image: UnivLille,
			links: [
				{
					title: 'Android App',
					icon: Smartphone,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://play.google.com/store/apps/details?id=com.amiunique.amiuniqueapp&hl=en_US'
				},
			]
		},
		{
			title: 'Research And Development Engineer',
			dates: 'January 2022 - December 2023',
			location: 'Inria, France',
			description:
				'As a member of the Spirals research team, I have been involved in exploring privacy and cybersecurity themes. Over a two-years period, I contributed to the conceptualization of a new architecture for the AmIUnique platform and integrated new functionalities into it. The updated version, launched in June 2023, boasts a refreshed user interface and improved operational mechanisms.<br>This platform stands as a significant project aimed at collecting browser fingerprints to construct a research-oriented database. The purpose of this database is to provide Spirals researchers with indispensable data vital for their ongoing researches.',
			image: InriaImg,
			links: [
				{
					title: 'Website',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://amiunique.org'
				},
			]
		},
		{
			title: 'Software Engineer',
			dates: 'Novermber 2020 - December 2021',
			location: 'OuedKniss, Algiers, Algeria',
			description:
				'Over a period of 13 months, I worked with the team on developing and maintaining various products for Ouedkniss, the most widely used e-commerce platform in Algeria.<br>My role focused primarily on frontend development, and I was responsible for two key projects, one of them was the user dashboard, which provides users with access to their store and account management features.',
			// icon: "public",
			image: OkImg,
			links: []
		},
		{
			title: 'Freelance Web Developer',
			dates: 'January 2020 - October 2020',
			location: 'DataFirst Technology, Algiers, Algeria',
			description:
				'For a duration of 10 months, while I was still a student, I worked as a frontend developer at DataFirst company. My primary task was to design and implement user-friendly interfaces for an internal project. Using Angular JS and the MaterialUI library, I concentrated on developing intuitive interfaces and ensuring seamless connectivity between the frontend and backend components. This included establishing connections with backend API services.',
			image: DataFirstImg,
			links: []
		},
		{
			title: 'Research Intern',
			dates: 'September 2019 - September 2020',
			location: 'Emploitic, Algiers, Algeria',
			description:
				'During my internship, I worked on a research project at Emploitic, an Algerian e-recruitment platform. Together with my binome, our primary objective was to automate the creation of a human resource ontology using the resume data within Emploitic\'s databases. This ontology was designed to be integrated into multiple platform services via an API, with the goal of improving the overall service quality. This involved refining the search engine\'s capabilities and optimizing the alignment between job offers and potential candidate profiles.<br>Our efforts resulted in a published paper at the Metadata and Semantics Research Conference in 2020.',
			image: EmploiticImg,
			links: [
				{
					title: 'Paper',
					icon: Paperclip,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://link.springer.com/chapter/10.1007/978-3-030-71903-6_10'
				},
			]
		},
		{
			title: 'Quality Assurance Intern',
			dates: 'July 2019 - September 2019',
			location: 'Emploitic, Algiers, Algeria',
			description:
				'During my internship, I expanded my understanding of software testing techniques, with a specific focus on end-to-end testing. I actively employed Cucumber and Selenium to architect and implement functional tests across multiple features within the Emploitic platform.',
			image: EmploiticImg,
			links: [
				{
					title: 'Medium Article',
					icon: Paperclip,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://medium.com/@fs_bouhenniche/behavior-driven-design-bdd-example-on-web-applications-with-cucumber-and-ruby-part-1-c89159a43c80'
				}
			]
		},
		{
			title: 'Audience Marketing Intern',
			dates: 'September 2018 - November 2018',
			location: 'Batolis, Algiers, Algeria',
			description:
			'During my internship, I was assigned the task of conducting an audience analysis for Batolis website using the Hotjar tool. This opportunity was instrumental in my discovery of how startups operate, understanding key roles, and gaining insights into project management within a team environment.',	
			image: BatolisImg,
			links: []
		},
	]
};
