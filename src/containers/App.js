import React from "react";

import { random } from 'lodash';

import Main from "../containers/Main"
import Background from "./Background"
import Colorbar from "../components/Colorbar"

import { ThemeProvider } from 'emotion-theming'

import light from '../themes/light'
import dark from '../themes/dark'
import terminal from '../themes/terminal'
import swiss from '../themes/swiss'

const themes = [light, dark, terminal, swiss]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: random(themes.length -1)
    }
  }

  randomTheme() {
    this.setState({
      theme: random(themes.length -1)
    })
  }

  nextTheme() {
    const newState = (this.state.theme + 1) % themes.length;

    this.setState({
      theme: newState
    });
  }

  // function setTheme() { this.theme+= 1 }
  render() {
    return(
        <ThemeProvider theme={themes[this.state.theme]}>
            <Colorbar onClick={ () => this.nextTheme() } />
            <Main />
            <Background bg='' />
        </ThemeProvider>
    )
  }
}

export default App;
