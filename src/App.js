import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      users: ['Петя', 'Вася', 'Анатолий', 'Анаколий'],
      checked: false,
      value1: '0'
    };
  }
 
  onChangeHandler(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleSelectChange(event) {
    this.setState({
      value1: event.target.value
    })
  }

  handleSubmit(event) {
    this.state.users.push(this.state.value)
    this.setState({
      users: this.state.users
    })
    event.preventDefault();
  }

  deleteHandler(event, index) {
    this.state.users.splice(index, 1)
    this.setState({
      users: this.state.users
    })
  }

  handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked
    })
  }
  render() {
    const userList = this.state.users.map((e, i) => <li key={i}>{e}<button onClick={this.deleteHandler.bind(this, i)}>Удолить</button></li>)
    return (
      <div className='block'>
        <ul>
          {userList}
        </ul>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          <input type="text" name="name" value={this.state.value} onChange={this.onChangeHandler.bind(this)}/>
          
        </label>
        <input type="submit" value="Отправить" />
      </form>
      <textarea value={this.state.value} onChange={this.onChangeHandler.bind(this)} />
      <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.handleCheckboxChange.bind(this)}
      />
    <p>{this.state.valueToShow}</p>
    <p>Ваш выбор: {this.state.value1}</p>
			<select
				value={this.state.value1}
				onChange={this.handleSelectChange.bind(this)}
			>

        <option value="0">Язык HTML</option>
				<option value="1">Язык CSS</option>
				<option value="2">Язык JavaScript</option>
				<option value="3">Язык PHP</option>

			</select>
    </div>
    )
  }   
}

export default App;
