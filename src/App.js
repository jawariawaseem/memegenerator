import React from 'react';
import './App.css';

import Memegenerator  from './components/Memegenerator.js';
import Header  from './components/Header.js';



function App(){
	return(
		<div>
			<Header />
			<Memegenerator />
		</div>
		);
}

export default App;
