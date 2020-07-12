import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class APP extends React.Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({robots: users}));
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(
                    this.state.searchfield.toLowerCase()
                );
            })
        if(this.state.robots.length === 0){
            return <h1 className='tc' style={{fontFamily: "SEGA LOGO FONT"}}>Loading</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default APP;