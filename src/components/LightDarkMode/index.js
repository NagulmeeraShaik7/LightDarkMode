import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modeClass
    const {isDarkMode} = this.state

    const modeText = isDarkMode
      ? ((modeClass = 'dark-mode'), 'Light Mode')
      : ((modeClass = 'light-mode'), 'Dark Mode')
    return (
      <div className="container">
        <div className={modeClass}>
          <h1 className="main-head">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
