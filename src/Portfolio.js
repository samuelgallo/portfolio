import React from 'react';
import logo from './logo.svg';
import './App.css';

function Portfolio() {
	return(
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2 className="App-title">Pagina de portfolio</h2>
			</header>
			<p className="App-intro">
				pagina de exemplo
			</p>
		</div>
	)
}

export default Portfolio;