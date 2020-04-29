import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {name: 'Коля', surname: 'Иванов', age: 30},
        {name: 'Вася', surname: 'Петров', age: 40},
        {name: 'Петя', surname: 'Сидоров', age: 50},
      ]
    };
  }
     
  deleteUser(index) {
    this.state.users.splice(index, 1)
    this.setState({
      users: this.state.users
    })
  }  
  
  render() {
    const users = this.state.users.map((e, i) => <User 
      name={e.name} 
      surname={e.surname} 
      age={e.age} 
      key={i} 
      deleteUser={this.deleteUser.bind(this)}
      index={i}
    />)
    return (
      <div className='block'>
        <table>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
            <th>Удалить</th>
          </tr>          
        {users}
        </table>
    </div>
    )
  }   
}

class User extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.surname}</td>
        <td>{this.props.age}</td>
        <td><button onClick={this.props.deleteUser.bind(null, this.props.index)}>Удалить</button></td>
      </tr>
    )
  }
}

export default App;
