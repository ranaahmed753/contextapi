import React, { Component } from 'react';
import Body from './Body';
import Header from './Header';
import ThemeContext from './themeContext';

class App extends Component {
  state = {
    count : 0,
    handleCount : () => {
      this.setState({
        count : this.state.count+1
      })
    },
    handleDecrement: () => {
      this.setState({
        count : this.state.count-1
      })
    }
  }
  render() {
    const {count,handleCount,handleDecrement} = this.state
    return (
      <div>
        <ThemeContext.Provider value={{count:count,handleCount:handleCount,handleDecrement:handleDecrement}}>
            {
              () => <Body />
            }
        </ThemeContext.Provider>
        
        
      </div>
    )
  }
}

export default App;