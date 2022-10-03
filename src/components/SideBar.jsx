import React from 'react';
import { react } from '../constants/cours';

const btn = `bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const SideBar = ({ session, setSession }) => {
	return (
		<div className='w-[200px]'>
			<div className='h-[88vh] border-r-2 p-3'>
				<ul className='flex flex-col items-center gap-2 pt-8'>
					<li>
						<button className={btn} onClick={() => setSession(0)}>
							{react[0].title}
						</button>
					</li>
					<li>
						<button className={btn} onClick={() => setSession(1)}>
							{react[1].title.slice(19, react[1].title.length)}
						</button>
					</li>
					<li>
						<button className={btn} onClick={() => setSession(2)}>
							{react[2].title.slice(19, react[2].title.length)}
						</button>
					</li>
					<li>
          <button className={btn} onClick={() => setSession(3)}>
							{react[3].title.slice(19, react[2].title.length)}
						</button>
          </li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
					<li>list-items</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
