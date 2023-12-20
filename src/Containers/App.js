import React,{Component} from "react";
import CardList from "../Components/CardList";
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css';



class App extends Component{  //smart components
    constructor(){
        super()
        this.state={
            Robots:[],
            searchfield:''

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           return  response.json();
        })
        .then(users=>{
            this.setState({Robots:users});

        })
      
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
        
       
        
    }
   render() {
    const filteredRobots=this.state.Robots.filter(Robots=>{
        return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.Robots.length==0){
        return <h1>Loading</h1>
    } else{
      return(
        <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundry>
        <CardList Robots={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div>
    );
    }
    }
    }
    
    

export default App;