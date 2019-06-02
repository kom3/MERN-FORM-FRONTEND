import React,{Component} from 'react';
import axios from'axios';



const People = props => (
    <tr>
        <td>{props.obj.name}</td>
        <td>{props.obj.age}</td>
        
    </tr>
)





export default class Personlist extends Component {
	
	
	constructor(props){
		super(props);
		this.state={ people:[] };
	
	}
	
	componentDidMount() {
		
		axios.get('http://localhost:4000/person/')
		.then(response => {
                this.setState({ people: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
		
		
	peopleList() {
        return this.state.people.map(function(object, i){
            return <People obj={object} key={i} />;
        })
    }
	
	
	
	
	render() {
        return (
            <div>
                <h3>People List</h3>
                <table style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
						
                            <th>NAME</th>
                            <th>AGE</th>
               
                        </tr>
                    </thead>
                    <tbody>
                        { this.peopleList() }
                    </tbody>
                </table>
            </div>
        )
    }
		
		
		
	}
	
	
	
	
