import React, { Component } from 'react';
import './App.css';
import ReactDataGrid from 'react-data-grid';

class CloseIconFormatter extends Component {
  render() {
    return (
      <div className="customColumn">
        <span>Title</span>
        <button className="hideBtn" onClick={this.props.hideColumn}>X</button>
      </div>);
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      _columns: [
        { key: 'id', name: 'ID', width: 40, locked: true },
        { key: 'title', name: 'Title', width: 100, resizable: true, headerRenderer: <CloseIconFormatter hideColumn={this.hideTitleColumn.bind(this)} /> },
        { key: 'count', name: 'Count', resizable: true }
      ],
      _rows: [
        {
          id: 1, title: 'Title1 ', count: 400
        }, {
          id: 2, title: 'Title2', count: 550,
        }
      ]
    };
  }

  rowGetter = (i) => {
    return this.state._rows[i];
  };

  hideTitleColumn() {
    // let columns = this.state._columns;
    // columns[1].width = 1;
    // this.setState({
    //   _columns: columns
    // })

    this.setState({
      _columns: [
        { key: 'id', name: 'ID', width: 40, locked: true },
        { key: 'title', name: 'Title', width: 1, resizable: true, headerRenderer: <CloseIconFormatter hideColumn={this.hideTitleColumn.bind(this)} /> },
        { key: 'count', name: 'Count', resizable: true }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <ReactDataGrid
          columns={this.state._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state._rows.length}
        />
      </div>
    );
  }
}

export default App;
