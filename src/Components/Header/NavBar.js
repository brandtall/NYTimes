import React from 'react';


export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <img className='menu' alt='menu' src={require('./menu-512.png')}/>
                <img className='search' alt='search' src={require('./search-icon-png-1.png')}/>
                <img  className='brand' alt='brand' src={require('./nyu.jpeg')}/>
                <h3 className='section'>Space & Cosmos</h3>
                <button className='log' >LOG IN</button>
                <button className='subscribe' >SUBSCRIBE NOW</button>
            </div>
        );
    }
}