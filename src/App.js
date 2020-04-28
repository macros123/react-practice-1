import React from 'react';
import './App.css';

const days = []
for(let i = 0 ; i < 31; i++) {
  days.push(i+1)
}
const month = []
for(let i = 0 ; i < 12; i++) {
  month.push(i+1)
}
const year = []
for(let i = 1990 ; i < 2020; i++) {
  year.push(i+1)
}
const date = new Date()
const dayOfWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input1: date.getDate(),
      input2: date.getMonth() + 1,
      input3: date.getFullYear(),
      result: dayOfWeeks[date.getDay()]
    };
  }
 
  changeTextHandler(event) {
    const tmp = this.state
    if(event.target.name === 'select1'){
      const tmpDate = new Date(tmp.input3, tmp.input2 - 1, event.target.value).getDay()
      this.setState({
        input1: event.target.value,
        result: dayOfWeeks[tmpDate]
      })
    } 
    if(event.target.name === 'select2'){
      const tmpDate = new Date(tmp.input3, event.target.value - 1, tmp.input1).getDay()
      this.setState({
        input2: event.target.value,
        result: dayOfWeeks[tmpDate]
      })
    }
    if(event.target.name === 'select3'){
      const tmpDate = new Date(event.target.value, tmp.input2 - 1, tmp.input1).getDay()
      this.setState({
        input3: event.target.value,
        result: dayOfWeeks[tmpDate]
      })
    }
      
    
  }
  render() {
    const options1 = days.map((e, i) => <option key={i}>{e}</option>)
    const options2 = month.map((e, i) => <option key={i}>{e}</option>)
    const options3 = year.map((e, i) => <option key={i}>{e}</option>)
    return (
      <div className='block'>
        <select name='select1' value={this.state.input1} onChange={this.changeTextHandler.bind(this)}>
        {options1}
        </select>
        <select name='select2' value={this.state.input2} onChange={this.changeTextHandler.bind(this)}>
        {options2}
        </select>
        <select name='select3' value={this.state.input3} onChange={this.changeTextHandler.bind(this)}>
        {options3}
        </select>
    <p>{this.state.result}</p>
    </div>
    )
  }   
}

export default App;
