import React, { Component } from 'react';
import ThemeContext from './themeContext';

class Footer extends Component {
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {
                        ({count,handleCount}) => <div>
                            <h1>Footer {count}</h1>
                            <button onClick={handleCount}>increment</button>
                        </div>
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Footer;
