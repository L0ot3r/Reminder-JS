import React from 'react';
import { data } from '../constants/cours';
import { VscNotebook } from 'react-icons/vsc';

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
		<aside className='w-[50px] h-full border-r-2 border-slate-300 sm:hidden'>
			<ul className='sticky flex flex-col md:justify-center items-center gap-2 pt-5 p-3 pl-0 top-[40px]'>
					{cours.map((el, index) => (
						<li key={el.btnSlug} className='list-aside'>
							<div className='container-btn-aside'>
								<VscNotebook className='icons-side' size={30} />
								<button
									className='list-aside-btn'
									onClick={() => setSession(index)}
								>
									{el.btnSlug}
								</button>
							</div>
						</li>
					))}
			</ul>
		</aside>
	);
};

export default SideBar;
