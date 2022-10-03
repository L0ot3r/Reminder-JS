import React, { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

const App = () => {
	const [session, setSession] = useState(0)
	const [categories, setCategories] = useState('react')
	return (
		<>
			<Navbar categories={categories} setCategories={setCategories} />
			<div className='flex max-w-7xl mx-auto'>
				<SideBar session={session} setSession={setSession} categories={categories} />
				<Feed session={session} />
			</div>
		</>
	);
};

export default App;
