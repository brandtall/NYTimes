import React from 'react';


export default class Title extends React.Component {
    render() {
        return (
            <div>
                 <h1>Space Ripples Reveal Big Bang’s Smoking Gun</h1>                                                                      
                <img className='smile' alt='Smiling' src={require('./NYTimes.jpg')}/>
            </div>
        );
    }
}