import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: '',
        value2: '',
        value3: '',
        result: []
    };
  
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
    handleChange1(event) {
      this.setState({value1: event.target.value});
    }
  
    handleChange2(event) {
      this.setState({value2: event.target.value});
    }
  
    handleChange3(event) {
      this.setState({value3: event.target.value});
    }  


    handleSubmit(event) {
      function getDiff(...arrs){
        let result = [];
        
        for(let i = 0; i < arrs.length - 1; i++) {
          let diff1 = getFirstDiff(arrs[i], arrs[i+1]);
          let diff2 = getFirstDiff(arrs[i+1], arrs[i]);
          result = result.concat( diff1, diff2)
        }
        
        return result
      }
      
      function getFirstDiff(arr1, arr2){
        let result = [];
        
        for (let elem of arr1) {
          if (!inArray(elem, arr2)) {
            result.push(elem);
          }
        }
        
        return result;
      }
      
      function inArray(elem, arr){
        return arr.indexOf(elem) !== -1;
      }

      let result = getDiff([1, 2, 3, 5], [2, 3, 4], [4, 3, 2, 6]);
      console.log(result); // выведет [2, 3]


    event.preventDefault();
    }
  
    render() {
      return (
        <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Значение1:
            <input type="text" value={this.state.value1} onChange={this.handleChange1} />
          </label><br />
          <label>
            Значение2:
            <input type="text" value={this.state.value2} onChange={this.handleChange2} />
          </label><br />
          <label>
            Значение3:
            <input type="text" value={this.state.value3} onChange={this.handleChange3} />
          </label><br />
          <input type="submit" value="Отправить" />
        </form>
            {this.state.result.map(e => e+'|||')}
        </div>
      );
    }
  
}

export default App;
