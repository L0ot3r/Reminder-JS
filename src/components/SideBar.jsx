import React from 'react';
import { data } from '../constants/cours';

const btn = `w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const SideBar = ({ setSession, categories }) => {
	const categorie = data.filter((item) => item.categorie === categories);
	const cours = categorie[0].cours;


	return (
		<div className='w-[260px]'>
			<div className='h-[92vh] border-r-2 p-3'>
				<ul className='w-full flex flex-col items-center gap-2 pt-8'>
					{cours.map((el, index) => (
						<li key={el.btnSlug} className='w-full'>
							<button className={btn} onClick={() => setSession(index)}>
								{el.btnSlug}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
