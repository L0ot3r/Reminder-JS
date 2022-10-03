import React, { useState } from 'react';
import { react, js } from '../constants/cours';

const btn = `w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const SideBar = ({ setSession, categories }) => {
	return (
		<div className='w-[260px]'>
			<div className='h-[92vh] border-r-2 p-3'>
				<ul className='w-full flex flex-col items-center gap-2 pt-8'>
					{categories === 'react'
						? react.map((el, index) => (
								<li key={el.btnSlug} className='w-full'>
									<button className={btn} onClick={() => setSession(index)}>
										{el.btnSlug}
									</button>
								</li>
						  ))
						: categories === 'js'
						? js.map((el, index) => (
								<li key={el.btnSlug} className='w-full'>
									<button className={btn} onClick={() => setSession(index)}>
										{el.btnSlug}
									</button>
								</li>
						  ))
						: null}
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
