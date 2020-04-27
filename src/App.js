import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false, 
      name: 'Иван',
      users: ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
      hrefs: [
        {href: 'google.ru', text: 'ссылка 1'},
        {href: '2.html', text: 'ссылка 2'},
        {href: '3.html', text: 'ссылка 3'},
      ]
    };
  }
  
  showMessage() {
    this.setState({
      show: !this.state.show
  })
  }

  addPunkt() {
    this.state.users.push('Пункт')
    this.setState({
      users: this.state.users
    })
  }

  removePunkt() {
    this.state.users.pop()
    this.setState({
      users: this.state.users
    })
  }

  removeOne(index) {
    this.state.users.splice(index, 1)
      this.setState({
        users: this.state.users
      })
    
  }

  render() {
    const greetings = this.state.show ? 'Привет' : 'Пока'
    const bod = this.state.show ? <p>{greetings},  {this.state.name}</p> : null
    const bottonText = this.state.show ? 'скрыть' : 'показать' 
  const userList = this.state.users.map((e, i) => <li key={i}>{e} - {i + 1}<button onClick={this.removeOne.bind(this, i)}>Удалить {e}</button></li>)
    return (
      <div className='block'>
        {bod}
    <button onClick={this.showMessage.bind(this)}>{bottonText}</button>
    <ul>
   {userList}
    </ul>
    <button onClick={this.addPunkt.bind(this)}>Добавить пункт</button>
    <button onClick={this.removePunkt.bind(this)}>Удалить пункт</button>
      </div>
    )
  }   
}

export default App;
