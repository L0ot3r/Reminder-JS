export const data = [
	{
		categorie: 'js',
		cours: [
			{
				title: 'Javascript 1',
				btnSlug: 'Javascript 1',
				body: {
					subtitle: 'Débuter en Javascript',
					text: [
						{
							body: [
								'Premier Texte Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, explicabo.',
							],
							img: {
								src: 'https://images.innoveduc.fr/react/02-component/react-component-name-misspelling.png',
								width: '100%',
								height: '90px',
							},
							sample: [
								{
									style: 'js',
									code: `import React from 'react;
						
export const App = () => {
	// Mon Code
}

export default App;`,
								},
							],
						},
						{
							body: [
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
							],
						},
					],
				},
			},
			{
				title: 'Javascript 2',
				btnSlug: 'Javascript 2',
				body: {
					subtitle: 'Continuer en Javascript',
					text: [
						{
							body: [
								'Deuxième Texte Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, explicabo.',
							],
							sample: [
								{
									style: 'js',
									code: `import React from 'react;
						
export const App = () => {
	// Mon Code
}

export default App;`,
								},
							],
						},
						{
							body: [
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
							],
						},
						{
							isList: true,
							body: [
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
							],
						},
					],
				},
			},
		],
	},
	{
		categorie: 'react',
		cours: [
			{
				title: '👩‍🏫 Le CSS dans React',
				btnSlug: 'Le CSS dans React',
				body: {
					subtitle: 'Introduction',
					text: [
						{
							body: [
								`Le Style de notre application a un impact très important sur l'apparence des composants, l’interaction utilisateur et son ressenti. Il y a de multiples façons de styliser notre application React, et nous allons en examiner quelques-unes. Gardes en tête qu'il n'y a pas de bonne ou de mauvaise façon de styliser : utilise la façon qui s'adapte le mieux à ton projet ! Nous allons aborder quelques méthodes pour styliser une application React, chaque méthode sera suivie d'un exemple de mise en pratique.`,
								`C'est parti ! 🚀`,
							],
							img: {
								src: 'https://miro.medium.com/proxy/1*YDskBoEKfDDMtI6LMJVKLw.png',
								width: '100%',
								height: '60px',
							},
						},
						{
							body: [
								`✅ Différentes façon de styliser tes composants en React`,
							],
						},
						{
							title: `🖌️ Le CSS standard`,
							body: [
								`C'est la première méthode que nous allons évoquer pour intégrer du CSS dans ton application React. Tu es déjà familier avec cette méthode, car tu l'utilises déjà.`,
								`👍 Avantages : bonnes performances, facile à mettre en œuvre, car tu connais déjà le CSS. S'adapte également bien avec des framework CSS comme Tailwind CSS (tu peux voir le guide d'installation avec CRA [qui marche aussi avec un project vite], ou choisis un autre framework CSS sur State of CSS survey).`,
								`👎 Inconvénients : difficile à maintenir, plus difficile à faire évoluer. Impossible de calculer des styles dynamiques.`,
							],
						},
						{
							isList: true,
							body: [`simplement importer ton fichier CSS dans ton composant:`],
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
						},
						{
							body: [
								`Il est important de mentionner que lorsque tu crées une règle CSS (class ou ID) avec cette méthode, elle sera disponible dans toute l'application (pour les autres composants) quand tu importes le fichier.`,

								`Pourquoi className et pas juste class ?`,

								`Parce que l'attribut class est un mot réservé en JavaScript. Et le JSX utilise du JavaScript.`,
							],
						},
						{
							title: ' ',
							body: [
								'Et ton App.css ressemblerait à ceci:'
							],
							sample: [
								{
									style: 'css',
									code: `.my-class{
	color: red;
	}`,
								},
							],
						},
						{
							title: '🎨 Intégrer le CSS',
							body: [
								`Tout comme en HTML, nous pouvons utiliser l'attribut style dans notre application React pour appliquer notre CSS, mais avec quelques légères différences : au lieu d'appliquer des propriétés avec des classes ou des ID CSS, nous les passons directement aux éléments JSX en tant qu'objet. De plus, les propriétés doivent être en camelCase.`,
								`👍 Avantages : comme nous avons affaire à un objet, nous pouvons l'étendre et ajouter d'autres propriétés, changer les valeurs de manière conditionnelle.`,
								`👎 Inconvénients : pas évolutif, impossible d'utiliser les media queries et les pseudo-classe`,
							]
						},
						{
							title: ' ',
							body: [
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

export default InLineStyle;`
								},
								
							],
						},
						{
							title: `🖼️ Les Modules CSS`,
							body: [
								`Les Modules CSS t'aideront à faire en sorte que les classes CSS aient une portée locale pour un composant, évitant ainsi les conflits de noms de classes que tu pourrais répéter dans ton application. Tu peux également ajouter des classes globales en utilisant :global devant le nom de la classe.`,
								`Ils sont mis en œuvre de la même manière que le CSS normal. Tu dois définir un fichier externe (e.g. App.module.css). Importe-le dans ton composant. Et utilise l'attribut className pour définir les classes.`,
								`👍 Avantages : pas de conflit dans les noms de classe,`,
								`👎 Inconvénients : difficile de partager le même style entre les composants`,
							],
							sample: [
								{
									style: 'jsx',
									code: `
									// CssModule.js
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

export default CssModule;
									`
								},
								{
									style: 'css',
									code: `
/* css.module.css */

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
}
									`
								},
							]
						},
					// Fin du tableau cours
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 01 - Qu'est-ce que React ?`,
				btnSlug: `Qu'est-ce que React ?`,
				body: {
					subtitle: 'Introduction',
					text: [
						{
							body: [
								`Pour commencer ton voyage dans le monde de React, avant de commencer à écrire du code, tu dois comprendre ce qu'est React, son histoire et ce que tu peux construire en l'utilisant.`,
							],
						},
						{
							title: `📖 Définition`,
							body: [
								`React est une bibliothèque JavaScript open-source construite / maintenue par Facebook ainsi que par une communauté de développeurs individuels et d'entreprises.`,
								`Son but est de construire des interfaces utilisateurs ou des composants d'interface utilisateur (une prochaine quête expliquera ce que sont les composants).
								React peut être utilisé comme base pour le développement d'applications monopages (Single Page Application - SPA).`,
							],
						},
						{
							title: `📕 La vie avant React`,
							isList: true,
							body: [
								`Avant JavaScript, les navigateurs récupéraient et affichaient les documents HTML depuis le serveur.`,
								`Les seules interactions possibles étaient le click sur les liens et la soumission de formulaires.`,
								`JavaScript est arrivé en apportant avec lui la manipulation du DOM, ce qui a permis d'avoir des interfaces utilisateur interactives.`,
								`La création d'applications utilisant les fonctions natives du DOM est fastidieuse et nécessite une grande quantité de code.`,
								`Puis vint la naissance des bibliothèques front-end telles que React & Angular.`,
							],
						},
						{
							title: `🤔 Pourquoi devrais-tu utiliser un Framework/bibliothèque ?`,
							isList: true,
							body: [
								`C'est très rapide. (grâce à son DOM virtuel)`,
								`C'est une des librairies front-end les plus populaires. Du coup, il y a beaucoup d'offres d'emploi disponibles.`,
								`Cela facilite l'écriture d'applications à grande échelle,`,
								`Afin de rendre notre code plus court et plus polyvalent,`,
								`Afin d'établir une façon cohérente de programmer dans une équipe de développement en utilisant une bibliothèque standardisée.`,
							]
						},
						{
							body: [
								`Depuis que Facebook l'a introduit en 2013, React est devenu une bibliothèque front-end très populaire.`
							]
						},
						{
							title: `🔧 Que peux-tu construire avec React ?`,
							body: [
								`Avec React, tu peux :`
							]
						},
						{
							isList: true,
							body: [
								`Créer ta propre plateforme de streaming comme Netflix`,
								`Créer un célèbre réseau social`,
							]
						},
						{
							body: [
								`Et bien d'autres choses encore...`
							]
						},
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 02 - Qu'est-ce qu'un composant ?`,
				btnSlug: `Qu'est-ce qu'un composant ?`,
				body: {
					subtitle: `Introduction`,
					text: [
						{
							body: [
								`Dans la quête précédente, tu as découvert ce qu'est React.`,
								`Avant de commencer à coder et à t'entraîner, nous avons un petit pas à faire.`,
								`Nous devons apprendre ce qu'est un composant React, la philosophie de React ainsi que la hiérarchie de notre application.`,
								`Débutons !`,
							]
						},
						{
							title: `Qu'est-ce qu'un composant ?`,
							isList: true,
							body: [
								`Il s'agit essentiellement de blocs qui composent une application.`,
								`Le terme "composant" est utilisé pour désigner un élément ou une section d'une page, comme le montre l'image ci-dessous.`,
								`Ils divisent et isolent les éléments au sein de l'interface utilisateur à des fins visuelles et comportementales.`,
								`Un composant peut être décomposé davantage et contenir d'autres composants pour constituer des pages comme dans l'image ci-dessous.`,
								`L'image contient de multiples composants qui constituent un composant page, par exemple une page d'accueil.`,
							],
							img: {
								src: 'https://codippa.com/wp-content/uploads/2019/02/react-component-2.png',
								width: 500,
								height: 600,
							}
						},
						{
							title: `Hiérarchie des composants`,
							isList: true,
							body: [
								`Dans React, il y a une hiérarchie lors de la construction d'une application.`,
								`Typiquement, dans la plupart des applications, nous avons un composant racine appelé App, c'est là que tous les autres composants finissent par atteindre l'arbre des composants.`,
								`Comme on peut le voir dans le composant App, il y a un composant enfant appelé contacts.`,
								`Contacts contient les composants enfants suivants AddContact, ContactList & SearchBar.`,
								`AddContact contient un composant enfant AddContactForm.`,
								`ContactList contient aussi un composant enfant ContactCard.`,
							],
							img: {
								src: 'https://storage.googleapis.com/quest_editor_uploads/CywzyRPJDjWtsAQLfXHVQnK7mktTGNwc.png',
								width: 700,
								height: 600,
							}
						},
						{
							body: [
								`Lorsque des composants sont contenus dans d'autres composants plus haut dans l'arbre (par exemple ContactList contient la ContactCard), il s'agit de relations parent (ContactList) et enfant (ContactCard).
								Elles sont un élément clé de la construction d'applications React cohérentes et évolutives.`,
								`Tous les composants peuvent être les parents ou les enfants d'un autre composant (à l'exception de App, qui ne peut être que le parent).`,
							]
						},
						{
							title: `Comment diviser une page en composants`,
							body: [
								`En divisant l'application en composants, il est possible d'indiquer ces divisions en utilisant des "boîtes" de couleur :`
							],
							img: {
								src: 'https://images.innoveduc.fr/react/01-introduction-jsx/chat-widget-component-hierarchy.png',
								width: 700
							}
						},
						{
							body: [
								`De cette façon, nous créons une hiérarchie de composants, comme nous l'avons vu dans la section précédente. L'un dans l'autre ! Tout en haut de la hiérarchie se trouve une boîte orange. Elle contient deux cases roses : la "barre latérale" et la "fenêtre de message".`,
								`À leur tour, ces boîtes contiennent des boîtes violettes, qui elles-mêmes contiennent des boîtes vertes.`,
								`En d'autres termes, le composant "sidebar" contient le composant "champ de recherche" et le composant "liste de personnes".`,
								`Ce dernier contient le composant "personne", répété autant de fois que l'utilisateur a de correspondants.`,
							]
						},
						{
							title: `Pourquoi utilisons-nous des composants ?`,
							isList: true,
							body: [
								`Afin d’écrire ton code une fois et de le réutiliser facilement`,
								`Par exemple, quand tu écris une Navbar en HTML, tu dois copier et coller ton HTML sur chaque page pour afficher la Navbar.`,
								`En utilisant React, tu peux écrire ce "HTML " une fois et l'importer dans toutes les zones de ton application où il est nécessaire. Nous te montrerons un exemple similaire dans les prochaines quêtes.`,
								`Tu peux isoler tout le comportement et la présentation de chaque composant sans avoir d'impact sur le reste de l'UI.`,
								`En écrivant le composant une fois, cela augmente la réutilisabilité et l'extensibilité.`,
							]
						},
						{
							title: `☝️ Récapitulatif`,
							isList: true,
							body: [
								`Un composant est un élément constitutif d'une application.`,
								`Le terme "composant" est utilisé pour désigner un élément ou une section d'une page`,
								`La hiérarchie des composants représente un arbre de composants qui, à leur tour, montrent les relations entre les parents et les enfants.`,
								`Nous utilisons les composants à des fins de réutilisation et d'évolutivité.`,
							]
						}
					]
				}
			},
			{
				title: `👩‍🏫 React Basics 03 - Qu'est-ce que JSX`,
				btnSlug: `Qu'est-ce que JSX`,
				body: {
					subtitle: 'Introduction',
					text: [
						{
							body: [
								`Dans cette quête, nous allons découvrir JSX, ainsi que quand et comment l'utiliser.`,
								`Commençons ! 🚀`,
							],
							img: {
								src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--9hrIvLVU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9tzvuoyi4q1xo7jo6bil.png',
								width: '100%'
							}
						},
						{
							title: `Qu'est-ce que JSX ?`,
							body: [
								`JavaSscript XML. Il ajoute des fonctionnalités XML à JavaScript. Cela signifie que tu vas désormais pouvoir mélanger JavaScript avec des balises HTML (fonctionnalités telles que HTML) et des fonctionnalités XML (comme les accolades de données). Juste comme ça :`
							],
							sample: [
								{
									style: 'jsx',
									code: `<div>
	<h1>I am HTML 1+1=2</h1>
	<h2>{"I am data from XML, I'll do a match operation:"} {1+1}</h2>
</div>`
								}
							]
						},
						{
							title: ' ',
							body: [
								`Voyons un autre exemple. Le code ci-dessous montre comment tu peux définir une constante javascript (const name = 'John'), une balise <div /> et les mélanger à l'aide d'un <p>{name}</p>`,
							],
							sample: [
								{
									style: 'jsx',
									code: `const name ='John Doe';
const element = (
	<div className="person-item">
			<p>{name}</p>
	</div>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);`,
								}
							]
						},
						{
							body: [
								`Donc, dans cette exemple :`
							],
						},
						{
							isList: true,
							body: [
								`Il existe une variable appelée name, qui a la valeur de 'John Doe'`,
								`Il existe une variable appelée element qui contient un élément div.`,
								`Dans cette variable element, tu affiches la valeur de name en utilisant <p>{name}</p>`,
								`C'est l'utilisation d'accolades dans JSX te permet d'afficher des valeurs dans le code.`,
								`Il existe une méthode appelée ReactDOM.render() et cette méthode prend deux arguments :
								`,
								`1 - Le premier est ce que tu veux afficher dans le navigateur. Dans ce cas, c'est la variable element.`,
								`2 -Le second est l'endroit où il sera injecté document.getElementById('root')`,
							]
						},
					]
				}
			},
			{
				title: `👩‍🏫 React Basics 04 - Ton premier composant React`,
				btnSlug: `Ton premier composant React`,
				body: {
					text: [
						{
							title: ' ',
							body: [
								`Maintenant que tu as commencé ton carnet de contacts, tu sais comment écrire du code React, félicitations !`,
								`Mais il y avait un problème, ou plus particulièrement, un problème de duplication.`,
								`Peut-être as-tu utilisé le copier-coller pour créer plusieurs contacts ?
								Et peut-être as-tu utilisé ton code JSX qui est super long ? Et peut-être répétitif (la structure HTML est la même mais avec des informations différentes)`,
								`Ne verrais-tu pas un moyen plus efficace ?`,
								`C'est le moment d'introduire de nouveaux concepts :`,
								`React Components`,
							]
						},
						{
							title: `Qu'est-ce qu'un composant React ?`,
							body: [
								`C'est un bout de code réutilisable et indépendant.`
							]
						},
						{
							title: `Quels sont les différents types de composant en React ?`,
							body: [
								`Il existe 2 types de composant :`
							]
						},
						{
							isList: true,
							body: [
								`Functional components`
							],
							sample: [
								{
									style: 'jsx', 
									code: `function MyComponent() {
	// Je peux ajouter n'importe quel code en Javascript ici ! 👍 
	const myName = 'Bob';

	return (
		<div>
			<h1>Je peux écrire ce que je veux ici, c'est du JSX !</h1>
			<p>Bonjour {myName}</p>
		</div>
	);
	}

	// Les fonction fléchées fonctionnent également 👍
	const MyComponent = () => {
	// Je peux ajouter n'importe quel code en Javascript ici ! 👍 
	const myName = 'Bob';

	return (
		<div>
			<h1>Je peux écrire ce que je veux ici, c'est du JSX !</h1>
			<p>Bonjour {myName}</p>
		</div>
	);
};`,
								}
							]
						},
						{
							isList: true,
							body: [
								`Class components`
							]
						},
						{
							body: [
								`Comme son nom l'indique, ce sont des classes Javascript (au lieu de fonctions). Ces classes doivent implémenter une méthode render() afin de renvoyer le code JSX qui sera interprété par le navigateur.`
							],
							sample: [
								{
									style: 'jsx',
									code: `class MyComponent {
	render() {
		// N'oublie pas de retourner de bloc JSX ☝️
		return (
			<div>
				<h1>Je peux écrire ce que je veux ici</h1>
			</div>
		);
	}
}`
								}
							]
						},
						{
							body: [
								`Il y a beaucoup de différences entre les composants fonctionnels et les composants de classe. (mais nous verrons cela un peu plus tard).`,
								`Pour le moment (et pour soucis de simplicité), nous utiliserons uniquement les composants fonctionnels dans nos exercices.`,
							]
						},
						{
							title: ' ',
							body: [
								`Chose à ne PAS oublier : Le nom des composants React (fonctionnels ou de classe), doivent toujours commencer par une majuscule. Si tu ne respectes pas ce principe, tu auras l'erreur suivante dans ton navigateur lorsque tu lanceras ton application :`
							],
							img: {
								src: 'https://images.innoveduc.fr/react/02-component/react-component-name-misspelling.png',
								width: '100%',
							}
						},
						{
							body: [
								`A savoir également, les composants React doivent retourner un et un seul nœud DOM. Si ton composants doit renvoyer plusieurs nœuds DOM, tu devras les encapsuler dans un élément (nœud) parent :`,
							],
							sample: [
								{
									style: 'jsx',
									code: `const MyComponent = () => {
	// Ce code générera une erreur 🚫
	return (
			<div>
				<h1>Première div</h1>
			</div>
			<div>
				<h2>Seconde div</h2>
			</div>
	);
};

const MyComponent = () => {
	// Ce code là sera quand à lui valide ✅
	return (
		<div>
			<div>
				<h1>Première div</h1>
			</div>
			<div>
				<h2>Seconde div</h2>
			</div>
		</div>
	);
};`,
								}
							]
						},
					]
				}
			}
		],
	},
];
