import React from 'react';

const btn = `
  w-full 
  bg-transparent 
  hover:bg-blue-500 
  text-white 
  font-semibold 
  hover:text-white 
  py-2 
  px-4 
  border 
  border-blue-500 
  hover:border-transparent 
  rounded
`;

const Navbar = ({ setCategories, setSession }) => {
	return (
		<div className='z-50 w-full bg-[#f76c6c]'>
			<div className='max-w-7xl mx-auto flex justify-between items-center p-5 text-white sm:flex-col sm:gap-3'>
			<h1 className='text-2xl'>Reminder JS</h1>
			<ul className='flex gap-3'>
				{/* <li>
					<button className={btn} onClick={() => {}}>
						HTML
					</button>
				</li>
				<li>
					<button className={btn} onClick={() => {}}>
						CSS
					</button>
				</li> */}
				<li>
					<button
						className={btn}
						onClick={() => [setCategories('js'), setSession(0)]}
					>
						JS
					</button>
				</li>
				<li>
					<button
						className={btn}
						onClick={() => [setCategories('react'), setSession(0)]}
					>
						REACT
					</button>
				</li>
			</ul>
			</div>
		</div>
	);
};

export default Navbar;
