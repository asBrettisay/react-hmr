import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(
      this.increment.bind(this),
      1000
    ) 
  }

  increment() {
    this.setState(({counter}) => ({counter: counter + 1}))
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { counter } = this.state;

    return (
      <header>
        <div>I'm working here!</div>
        <div>{counter}</div>
      </header>
    )
  }
}

export default App