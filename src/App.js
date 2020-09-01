import React, { Component } from 'react';
import CSVUploader from './components/uploader';
import { Container, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  defaultState() {
    return {
      sumTotal: undefined
    }
  }

  render() {
    const { sumTotal } = this.state;
    const isHidden = sumTotal ? false : true;

    return (
      <Container fluid textAlign='center'>
        <CSVUploader processData={this.processFile} updateDataState={this.deleteData} />
        <Message hidden={isHidden} positive>
          <p>{sumTotal}</p>
        </Message>  
      </Container>
    )
    
  }

  constructor(props) {
    super(props);

    this.state = this.defaultState();
    this.deleteData = this.deleteData.bind(this);
    this.processFile = this.processFile.bind(this);

  }

  deleteData = () =>  {
    this.setState({ sumTotal: undefined });
  }

  processFile = (data) => {
    let dataSum = 0,
        rowData = [],
        rowTotalCollector = [];

    for (var row in data) {
      if (parseInt(row) === 0) continue; 

      rowData = data[row].data.slice(1); 

      
      rowTotalCollector.push( rowData.reduce((sum, currentVal) => {
          if (currentVal) {
            sum = sum + parseInt(currentVal);
          } 
          return sum;

      }, 0) );
    }

    dataSum = rowTotalCollector.reduce((total, currentValue) => {
      return total + currentValue;
    });

    this.setState({ sumTotal: dataSum });
  }

}

export default App;
