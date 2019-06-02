import React,{Component} from 'react';
import axios from 'axios';


export default class Person extends Component {
	
	
		constructor (props){
			super(props);
			
			
			this.onEnteringName=this.onEnteringName.bind(this);
			this.onEnteringAge=this.onEnteringAge.bind(this);
			this.onSubmit=this.onSubmit.bind(this);
			
			
			this.state={
				
				name:'',
				age:''
											
						}
						
						}
	
onEnteringName(e){
	
	this.setState({
		
		name:e.target.value
		
	});
}

onEnteringAge(e){
	this.setState({
		
		age:e.target.value
	});
	
	
	
	}
	
onSubmit(e){
		
		let newState = {
			
			name:this.state.name,
			age:this.state.age
		};
		
		
		axios.post('http://localhost:4000/person/add',newState);
				
		
		
			
			
		}
		
	
	
	
	
	render() {
		return (
		<div>
				<form onSubmit={this.onSubmit}>
					<label>NAME: </label>
					<input type="text" 
					name="name"
					onChange={this.onEnteringName}
					/> <br/>
					
					<label>AGE: </label>
					<input type="number" 
					name="age"
					onChange={this.onEnteringAge}
					/><br/>
					
					
					<input type="submit"
					value="send data"
					/> <br/>
				
				
				</form>
				
				</div>		
				)
		
	}
}