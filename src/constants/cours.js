export const react = [
	{
		title: 'Le CSS dans React',
		body: {
			intro: {
				title: 'Introduction',
				text: `Le Style de notre application a un impact très important sur l'apparence des composants, l’interaction utilisateur et son ressenti. Il y a de multiples façons de styliser notre application React, et nous allons en examiner quelques-unes. Gardes en tête qu'il n'y a pas de bonne ou de mauvaise façon de styliser : utilise la façon qui s'adapte le mieux à ton projet ! Nous allons aborder quelques méthodes pour styliser une application React, chaque méthode sera suivie d'un exemple de mise en pratique.

					C'est parti ! 🚀`,
			},
			cours: [
				{
					title: '🖌️ Le CSS standard',
					body: [
						`C'est la première méthode que nous allons évoquer pour intégrer du CSS dans ton application React. Tu es déjà familier avec cette méthode, car tu l'utilises déjà.`,

						`👍 Avantages : bonnes performances, facile à mettre en œuvre, car tu connais déjà le CSS. S'adapte également bien avec des framework CSS comme Tailwind CSS (tu peux voir le guide d'installation avec CRA [qui marche aussi avec un project vite], ou choisis un autre framework CSS sur State of CSS survey).`,

						`👎 Inconvénients : difficile à maintenir, plus difficile à faire évoluer. Impossible de calculer des styles dynamiques.`,

						`- simplement importer ton fichier CSS dans ton composant:`,
					],
					sample: [
						{
							style: 'jsx',
							code: `// Example.js
	import React from 'react';
	import "./App.css";

	export default function App(){
		return <div className="my-class">Hello world</div>
	}`,
						},
					],
					outro: {
						text: [
							`Il est important de mentionner que lorsque tu crées une règle CSS (class ou ID) avec cette méthode, elle sera disponible dans toute l'application (pour les autres composants) quand tu importes le fichier.`,

							`Pourquoi className et pas juste class ?`,

							`Parce que l'attribut class est un mot réservé en JavaScript. Et le JSX utilise du JavaScript.`,
						],
						sample: {
							style: 'css',
							code: `.my-class{
		color: red;
	}`,
						},
					},
				},
				{
					title: '🎨 Intégrer le CSS',
					body: [
						`Tout comme en HTML, nous pouvons utiliser l'attribut style dans notre application React pour appliquer notre CSS, mais avec quelques légères différences : au lieu d'appliquer des propriétés avec des classes ou des ID CSS, nous les passons directement aux éléments JSX en tant qu'objet. De plus, les propriétés doivent être en camelCase.`,

						`👍 Avantages : comme nous avons affaire à un objet, nous pouvons l'étendre et ajouter d'autres propriétés, changer les valeurs de manière conditionnelle.`,

						`👎 Inconvénients : pas évolutif, impossible d'utiliser les media queries et les pseudo-classe`,

						`L'exemple suivant, illustre comment nous créons un composant React (ligne 4), comment nous créons les styles pour ce composant (ligne 5), et comment appliquer ces styles au composant (ligne 17)`,
					],
					sample: [
						{
							style: 'jsx',
							code: `// InLineStyle.js
	import React from 'react';

	const InLineStyle = () => {
		const container = {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100%',
			padding: '50px',
			color: '#444',
			border: '1px solid #1890ff',
		}

		return (
			<div style={container}>
				<h1 style={{color: '#0d1a26', fontWeight: 400}}>Hey! We're using inline style!</h1>
			</div>
		)
	}

	export default InLineStyle;`,
						},
					],
				},
				{
					title: '🖼️ Les Modules CSS',
					body: [
						`Les Modules CSS t'aideront à faire en sorte que les classes CSS aient une portée locale pour un composant, évitant ainsi les conflits de noms de classes que tu pourrais répéter dans ton application. Tu peux également ajouter des classes globales en utilisant :global devant le nom de la classe.`,

						`Ils sont mis en œuvre de la même manière que le CSS normal. Tu dois définir un fichier externe (e.g. App.module.css). Importe-le dans ton composant. Et utilise l'attribut className pour définir les classes.`,

						`👍 Avantages : pas de conflit dans les noms de classe,`,

						`👎 Inconvénients : difficile de partager le même style entre les composants`,
					],
					sample: [
						{
							style: 'jsx',
							code: `// CssModule.js
	import React from 'react';
	import styles from './css.module.css'

	const CssModule = () => {
		return (
			<div className={styles.container}>
				<h1 className={styles.title}>Example Css Module.</h1>
				<button className={styles.button}>Button</button>
			</div>
		);
	};

	export default CssModule;`,
						},
						{
							style: 'css',
							code: `/* css.module.css */

	.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
	}

	.title {
			color: red;
			font-weight: 700;
	}

	.button {
			background-color: #000000;
			width: 60px;
	}`,
						},
					],
				},
			],
		},
	},
	{
		title: `👩‍🏫 React Basics 01 - Qu'est-ce que React ?`,
		body: {
			intro: {
				title: 'Introduction',
				text: `Pour commencer ton voyage dans le monde de React, avant de commencer à écrire du code, tu dois comprendre ce qu'est React, son histoire et ce que tu peux construire en l'utilisant.`,
			},
			cours: [
				{
					title: '📖 Définition',
					body: [
						`React est une bibliothèque JavaScript open-source construite / maintenue par Facebook ainsi que par une communauté de développeurs individuels et d'entreprises.`,

						`Son but est de construire des interfaces utilisateurs ou des composants d'interface utilisateur (une prochaine quête expliquera ce que sont les composants).
						React peut être utilisé comme base pour le développement d'applications monopages (Single Page Application - SPA).`,
					],
				},
				{
					title: '📕 La vie avant React',
					body: [
						`- Avant JavaScript, les navigateurs récupéraient et affichaient les documents HTML depuis le serveur.`,
						`- Les seules interactions possibles étaient le click sur les liens et la soumission de formulaires.`,
						`- JavaScript est arrivé en apportant avec lui la manipulation du DOM, ce qui a permis d'avoir des interfaces utilisateur interactives.`,
						`- La création d'applications utilisant les fonctions natives du DOM est fastidieuse et nécessite une grande quantité de code.`,
						`- Puis vint la naissance des bibliothèques front-end telles que React & Angular.`,
					],
				},
				{
					title: '🤔 Pourquoi devrais-tu utiliser un Framework/bibliothèque ?',
					body: [
						`- C'est très rapide. (grâce à son DOM virtuel)`,
						`- C'est une des librairies front-end les plus populaires. Du coup, il y a beaucoup d'offres d'emploi disponibles.`,
						`- Cela facilite l'écriture d'applications à grande échelle,`,
						`- Afin de rendre notre code plus court et plus polyvalent,`,
						`- Afin d'établir une façon cohérente de programmer dans une équipe de développement en utilisant une bibliothèque standardisée.`,
						`Depuis que Facebook l'a introduit en 2013, React est devenu une bibliothèque front-end très populaire.`,
					],
				},
				{
					title: '🔧 Que peux-tu construire avec React ?',
					body: [
						`Avec React, tu peux :`,
						`- Créer ta propre plateforme de streaming comme Netflix`,
						`- Créer un célèbre réseau social`,
						`Et bien d'autres choses encore...`,
					],
				},
				{
					title: '☝️ Résumé',
					body: [
						`- React est utilisé pour construire des interfaces utilisateur ou des composants d'interface utilisateur`,
						`- Il a été créé pour permettre une programmation cohérente`,
						`- Avant React, les sites Web étaient interactifs en utilisant la manipulation du DOM en JavaScript`,
					],
				},
			],
		},
	},
	{
		title: `👩‍🏫 React Basics 02 - Qu'est-ce qu'un composant ?`,
		body: {
			intro: {
				title: 'Introduction',
				text: `Dans la quête précédente, tu as découvert ce qu'est React.

				Avant de commencer à coder et à t'entraîner, nous avons un petit pas à faire.
				
				Nous devons apprendre ce qu'est un composant React, la philosophie de React ainsi que la hiérarchie de notre application.
				
				Débutons !`,
			},
			cours: [
				{
					title: `Qu'est-ce qu'un composant ?`,
					body: [
						`- Il s'agit essentiellement de blocs qui composent une application.`,
						`- Le terme "composant" est utilisé pour désigner un élément ou une section d'une page, comme le montre l'image ci-dessous.`,
						`- Ils divisent et isolent les éléments au sein de l'interface utilisateur à des fins visuelles et comportementales.`,
						`- Un composant peut être décomposé davantage et contenir d'autres composants pour constituer des pages comme dans l'image ci-dessous.`,
						`- L'image contient de multiples composants qui constituent un composant page, par exemple une page d'accueil.`,
					],
					img: ''
				},
				{
					title: 'Hiérarchie des composants',
					body: [
						`- Dans React, il y a une hiérarchie lors de la construction d'une application.`,
						`- Typiquement, dans la plupart des applications, nous avons un composant racine appelé App, c'est là que tous les autres composants finissent par atteindre l'arbre des composants.`,
						`- Comme on peut le voir dans le composant App, il y a un composant enfant appelé contacts.`,
						`- Contacts contient les composants enfants suivants AddContact, ContactList & SearchBar.`,
						`- AddContact contient un composant enfant AddContactForm.`,
						`- ContactList contient aussi un composant enfant ContactCard.`,
					],
				},
				{
					title: 'Hiérarchie des composants 2',
					body: [
						`Lorsque des composants sont contenus dans d'autres composants plus haut dans l'arbre (par exemple ContactList contient la ContactCard), il s'agit de relations parent (ContactList) et enfant (ContactCard).
						Elles sont un élément clé de la construction d'applications React cohérentes et évolutives.`,
						`Tous les composants peuvent être les parents ou les enfants d'un autre composant (à l'exception de App, qui ne peut être que le parent).`,
					],
				},
			],
		},
	},
];
