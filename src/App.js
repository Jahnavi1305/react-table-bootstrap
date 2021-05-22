import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
  
const data = [
  {id: 1, name: 'Jahnavi', rank: '2'},
  {id: 2, name: 'Charishma', rank: '3'},
  {id: 3, name: 'Ramya', rank: '5'},
  {id: 4, name: 'Shivani', rank: '4'},
  {id: 5, name: 'Lavanya', rank: '6'},
  {id: 6, name: 'Janu', rank: '7'},
  {id: 7, name: 'Nani', rank: '1'},

];
const columns = [{
  dataField: 'id',
  text: 'Student ID',
  style: {backgroundColor: 'skyblue',border: 'white solid 5px'},
  headerStyle: (colum, colIndex) => {
    return { width: '20%', textAlign: 'center',backgroundColor: 'blue',border: 'white solid 5px'};
  }
}, {
  dataField: 'name',
  text: 'Student Name',
  sort: true,
  style: {backgroundColor: 'skyblue',border: 'white solid 5px'},
  headerStyle: (colum, colIndex) => {
    return { width: '60%', textAlign: 'center',backgroundColor: 'blue',border: 'white solid 5px'};
  }
 
}, {
  dataField: 'rank',
  text: 'Student Rank',
  style: {backgroundColor: 'skyblue',border: 'white solid 5px'},
  headerStyle: (colum, colIndex) => {
    return { width: '20%', textAlign: 'center',backgroundColor: 'blue',border: 'white solid 5px' };
  }

}];
const options = {
  page: 1,
  sizePerPage: 5,
  nextPageText: '>',
  prePageText: '<',
  showTotal: true
};
class App extends Component{
  render() {
    return (
      <div className="App">
        <h1 className="Table-header">Basic Table</h1>
         
        <BootstrapTable  
        bordered
        striped 
        hover 
        keyField='id' data={ data } columns={ columns } 
        pagination={ paginationFactory(options) }
        cellEdit={ cellEditFactory({ mode: 'click' }) }/>
      </div>
    );
  }
}

export default App;
