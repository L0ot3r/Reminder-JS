import React, { useState } from 'react';
import { data } from '../constants/cours';
import { VscNotebook } from 'react-icons/vsc';



const SideBar = ({ setSession, categories }) => {
	const categorie = data.filter((item) => item.categorie === categories);
	const cours = categorie[0].cours;

	const [toggleMenu, setToggleMenu] = useState(false);

	const handleMenu = () => {
		setToggleMenu(!toggleMenu);
	};

	return (
		<aside className='w-[50px] h-full border-r-2 border-slate-300'>
			<ul
				className={`sticky flex flex-col w-max md:justify-center items-center gap-2 pt-5 top-[40px]`}
			>
				<div className='container-btn-aside'>
					<button className='icons-side' onClick={handleMenu}>
						<VscNotebook size={30} />
					</button>
					<div
						className={`list-aside ${toggleMenu ? 'opacity-1 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-[-100%] pointer-events-none'}`}
						onMouseLeave={() => setToggleMenu(false)}
					>
						{cours.map((el, index) => (
							<li key={el.btnSlug}>
								<button
									className='list-aside-btn'
									onClick={() => [setSession(index), setToggleMenu(false)]}
								>
									{el.btnSlug}
								</button>
							</li>
						))}
					</div>
				</div>
			</ul>
		</aside>
	);
};

export default SideBar;
