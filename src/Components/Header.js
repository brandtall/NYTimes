import React from 'react';
import NavBar from './Header/NavBar';
import Title from './Header/Title';

export default class Header extends React.Component {
    render() {
        return (
            <div className='inner'>
                <NavBar/>
                <Title/>
            </div>                                                                                                            
            
        );
    }
}