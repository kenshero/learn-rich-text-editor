import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.onChangeEditorStyle = this.onChangeEditorStyle.bind(this);
  }

  onChangeEditorStyle(e, command) {
    document.execCommand(command, false, null)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="toolbar">
          <a href="#" className="toolbar-item" onClick={(e) => this.onChangeEditorStyle(e, 'bold')}>Bold</a>
          <a href="#" className="toolbar-item" onClick={(e) => this.onChangeEditorStyle(e, 'italic')}>Italic</a>
          <a href="#" className="toolbar-item" onClick={(e) => this.onChangeEditorStyle(e, 'underline')}>Underline</a>
        </div>
        <div className="my-rich-editor" contentEditable="true">
            <p> Hello World.</p>
        </div>
        <style>{`
          .my-rich-editor {
            text-align: left;
            width: 500px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 9px;
            padding: 1em;
          }
          .toolbar {
            margin-top: 32px;
            margin-bottom: 8px;
          }
          .toolbar-item {
            margin-right: 7px;
            text-decoration: none;
            color: #000;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 4px;
          }
          .toolbar-item:hover {
            background-color: #f5f5f5;
          }
        `}
        </style>
      </div>
    );
  }
}

export default App;
