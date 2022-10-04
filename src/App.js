import React, { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

const App = () => {
	const [session, setSession] = useState(0);
	const [categories, setCategories] = useState('js');
	return (
		<>
			<Navbar categories={categories} setCategories={setCategories} setSession={setSession} />
			<div className='flex max-w-7xl mx-auto'>
				<SideBar
					session={session}
					setSession={setSession}
					categories={categories}
					setCategories={setCategories}
				/>
				<Feed session={session} categories={categories} />
			</div>
		</>
	);
};

export default App;
