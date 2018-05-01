import React, { Component } from 'react';
import  './App.css';
import Topbar from './Components/Topbar.js'
import LeftBox from './Components/LeftBox';



class App extends Component {

  
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    console.log("Mounted")
   }

  addUser(event){
    event.preventDefault();
    let data = {
      user_name: this.refs.user_name.value,
      password: this.refs.password.value,
    };
    var request = new Request('http://localhost:3000/api/test', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(data)
    })
    
    fetch(request)
      .then(function(response){
        response.json()
        .then (function(data){
          console.log(data)
        })
      })
  }
 
  
  render() {
    return (
      <div>
        <Topbar/>
        {/* <div>
           <form>
              <input type ="text" ref = "user_name" placeholder = "Name"/>
              <input type ="text" ref = "password" placeholder = "password"/>
              <button onClick = {this.addUser.bind(this)}>Add User </button>
              </form>
        </div> */}
        
        
        <div>
      </div>
      <div className="App">

        <body style = {{paddingTop: 40, backgroundColor: 'lightgrey'}}>
          <LeftBox/>
          
          </body>
        
      </div>   
      </div>
    );
  }
}

export default App;
