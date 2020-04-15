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

    calc(a) {
      const list = []
      for(let i = 1; i <= a; i++) {
        if(a%i === 0) {
          list.push(i)
        }
      }
      return list
    }

    handleSubmit(event) {
      console.log(this.state.result)
      this.setState({
        result: this.calc(this.state.value1)
      })
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
