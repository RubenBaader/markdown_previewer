import React, { Component } from 'react';
import './App.css';
import { marked } from 'marked'


/* 
function readMDFile(file_path) {
  const lineReader = require('line-reader');
  let lineArr = [];
  lineReader.eachLine(file_path,(line,last)=>{
    lineArr = [...line];
  })
  console.log(lineArr);
  return lineArr;
}
 */


class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      "str": '# Hello world!'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({"str": event.target.value})
  }

  render() {
  return (
    <body className='App'>
      <div className='contentBox'>
      <h2>Editor</h2>
      <textarea id='editor' value={this.state.str} onChange={this.handleChange} ></textarea>
      </div>
      <div className='contentBox'>
      <h2>Preview</h2>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked.parse(this.state.str)}}></div>
      </div>
    </body>
    
  )};
}

export default App;
