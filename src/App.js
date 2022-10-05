import React, { useState } from 'react';
import { Feed, Navbar, SideBar } from './components';

const App = () => {
	const [session, setSession] = useState(0);
	const [categories, setCategories] = useState('js');
	return (
		<div>
			<Navbar categories={categories} setCategories={setCategories} setSession={setSession} />
			<div className='flex max-w-7xl mx-auto'>
				{/* <SideBar
					session={session}
					setSession={setSession}
					categories={categories}
					setCategories={setCategories}
				/> */}
				<Feed 
					session={session} 
					categories={categories} 
					setSession={setSession} 
					setCategories={setCategories}
				/>
			</div>
		</div>
	);
};

export default App;
