import React from 'react';
import './App.css';

const colors = ['black', 'blue', 'red', 'green']
const colorsName = ['черный', 'синий', 'красный', 'зеленый']
const paragraphs = ['111111111', '222222222', '33333333', '444444444444']
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 0
    };
  }
 
  changeColorHandler(event) {
    this.setState({
      color: event.target.value
    })
  }

  render() {
    const options = colorsName.map((e, i) => <option value={i} key={i}>{e}</option>)
    return (
      <div className='block'>
        <select
          value={this.state.color}
          onChange={this.changeColorHandler.bind(this)}
        >{options}</select>
        <p style={{color: colors[this.state.color]}}>{paragraphs[this.state.color]}</p>
    </div>
    )
  }   
}

export default App;
