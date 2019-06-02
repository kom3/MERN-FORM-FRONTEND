import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Person from "./data.put.component";
import Personlist from './data.get.component';


class App extends Component{
	
	
	
	render() {
		
		
		return(
		
				<Router>
		
					<h2>PERSON DATA UPLOADING FORM</h2>
					
					<Route path="/" component={Person}/>
					<Route path="/" component={Personlist}/>
					
				</Router>
		
		
		)
		
		
		
	}
	
	
	
	
}

export default App;
