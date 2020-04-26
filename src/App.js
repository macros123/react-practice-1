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
      function every(arr, callback) {
        let result = [];
        
        for (let elem of arr) {
          result.push( callback(elem) )
        }
        
        return result;
      }

     function filter(arr, callback) {
      let result = [];
      
      for (let elem of arr) {
        if(callback(elem)) {
          result.push( elem )
        }
      }
      
      return result;
    }

    function alternate(arr, callback1, callback2) {
      const result = []
      let i = 0 

      for(let elem of arr) {
        if(i % 2 === 0) {
          result.push( callback1(elem) )
        } else {
          result.push( callback2(elem) ) 
        }
        i++
      }

      return result
    }

    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = every([7, 8, 9], function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});
    
    console.log(result);
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
