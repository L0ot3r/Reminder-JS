import React, { useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

const App = () => {
	const [session, setSession] = useState(0)
	return (
		<>
			<Navbar />
			<div className='flex'>
				<SideBar session={session} setSession={setSession} />
				<Feed session={session} />
			</div>
		</>
	);
};

export default App;
