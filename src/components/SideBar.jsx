import React from 'react';
import { data } from '../constants/cours';

const btn = `
	w-full 
	py-2 
	px-4 
	font-semibold 
	bg-transparent 
	hover:bg-purple-600 
	text-blue-700 
	hover:text-white 
	border 
	hover:border-transparent 
	border-blue-500 
	rounded
	transition ease-in-out duration-500
`;

const SideBar = ({ setSession, categories }) => {
	const categorie = data.filter((item) => item.categorie === categories);
	const cours = categorie[0].cours;


	return (
		<aside className='w-auto'>
			<div className='w-full min-w-[180px] h-screen border-r-2 border-slate-300 px-4'>
				<ul className='sticky flex flex-col items-center gap-2 pt-5 top-[40px]'>
					{cours.map((el, index) => (
						<li key={el.btnSlug} className='w-full'>
							<button className={btn} onClick={() => setSession(index)}>
								{el.btnSlug}
							</button>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default SideBar;
