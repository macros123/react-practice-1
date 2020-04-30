import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ['Коля', 'Вася', 'Петя']
    };
  }
     
  changeUserName(value, index) {
    const tmp = this.state.users
    tmp[index] = value
    this.setState({
      users: tmp
    })
  }  
  
  render() {
      
    return (
      <div className='block'>
        <User users={this.state.users} changeUserName={this.changeUserName.bind(this)}/>        
    </div>
    )
  }   
}

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      changing: new Array(this.props.users.length).fill(false),
      changingValue: ''
    };
  }

  finishChanging(i, event ) {
    const tmp = this.state.changing
    tmp[i] = !tmp[i]
    this.setState({
      changing: tmp,
      changingValue: event.target.value
    })
  }
  initChanging(i, event) {
    const tmp = this.state.changing
    tmp[i] = !tmp[i]
    this.setState({
      changing: tmp,
      changingValue: this.props.users[i]
    })
  }

  changing(event) {
    this.setState({
      changingValue: event.target.value
    })
    console.log(this.state.changing)
    this.props.changeUserName(event.target.value, this.state.changing.indexOf(true))
  }

  render() {
    const userList = this.props.users.map((e, i) => <li key={i}>{e} {this.state.changing[i] ? <input 
    type='text' 
    value={this.state.changing[i] ? this.state.changingValue : this.props.users[i]} 
    //onFocus={this.finishChanging.bind(this, i)}
    onBlur={this.finishChanging.bind(this, i)}
    onChange={this.changing.bind(this)} /> : null}
    <a  onClick={this.initChanging.bind(this, i)}>{this.state.changing[i] ? null : 'Редактировать' }</a></li>)
    return (
      <ul>{userList}</ul>
    )
  }
}

export default App;
