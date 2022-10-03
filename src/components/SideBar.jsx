import React from 'react';
import { react } from '../constants/cours';

const btn = `w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const SideBar = ({ session, setSession }) => {
	return (
		<div className='w-[200px]'>
			<div className='h-[92vh] border-r-2 p-3'>
				<ul className='w-full flex flex-col items-center gap-2 pt-8'>
					<li>
						<button className={btn} onClick={() => setSession(0)}>
							{react[0].title}
						</button>
					</li>
					<li>
						<button className={btn} onClick={() => setSession(1)}>
							{react[1].title.slice(24, react[1].title.length)}
						</button>
					</li>
					<li>
						<button className={btn} onClick={() => setSession(2)}>
							{react[2].title.slice(24, react[2].title.length)}
						</button>
					</li>
					<li>
						<button className={btn} onClick={() => setSession(3)}>
							{react[3].title.slice(24, react[3].title.length)}
						</button>
					</li>
					<li>
            <button className={btn} onClick={() => setSession(4)}>
							{react[4].title.slice(24, react[4].title.length)}
						</button>
          </li>
					<li>
            <button className={btn} onClick={() => setSession(5)}>
							{react[5].title.slice(24, react[5].title.length)}
						</button>
          </li>
					<li>
          <button className={btn} onClick={() => setSession(6)}>
							{react[6].title.slice(24, react[6].title.length)}
						</button>
          </li>
					<li>
          <button className={btn} onClick={() => setSession(7)}>
							{react[7].title.slice(24, react[7].title.length)}
						</button>
          </li>
					<li>
          <button className={btn} onClick={() => setSession(8)}>
							{react[8].title.slice(24, react[8].title.length)}
						</button>
          </li>
					<li>
          <button className={btn} onClick={() => setSession(9)}>
							{react[9].title.slice(24, react[9].title.length)}
						</button>
          </li>
					<li>
          <button className={btn} onClick={() => setSession(10)}>
							{react[10].title.slice(24, react[10].title.length)}
						</button>
          </li>
					<li className='w-full'>
          <button className={btn} onClick={() => setSession(11)}>
							{react[11].title.slice(24, react[11].title.length)}
						</button>
          </li>
					<li>
          <button className={btn} onClick={() => setSession(12)}>
							{react[12].title.slice(24, react[12].title.length)}
						</button>
          </li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
