import React, { Component } from 'react';
import './App.css';
import { marked } from 'marked'

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      "str": ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('default.md')
      .then(response => response.text())
      .then(text => this.setState({str: text}))
  }

  handleChange(event) {
    this.setState({"str": event.target.value})
  }

  render() {
  return (
    <header className='App'>
      <div className='contentBox'>
      <h2>Editor</h2>
      <textarea id='editor' value={this.state.str} onChange={this.handleChange} >
      </textarea>
      </div>
      <div className='contentBox'>
      <h2>Preview</h2>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked.parse(this.state.str)}}></div>
      </div>
    </header>
    
  )};
}

export default App;
