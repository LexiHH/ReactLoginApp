import React, { Component } from 'react';

export default class ShowAllData extends Component {
  constructor() {
    super()
    this.state = {
      users:[]
    };
  }

    addUser(){
        let data = {
            "role": document.getElementById("role").value,
            "username": document.getElementById("username").value,
            "name": document.getElementById("name").value,
            "password": document.getElementById("password").value
        }
        fetch(`http://localhost:2700/newUser/`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        window.location.reload()
    }

    render(){
        return(
            <div>
                <table id="table" style={{textAlign:'center'}}>
                    <tbody>
                        <tr>
                            <td><input id="role" placeholder="Role"></input></td>
                        </tr>
                        <tr>
                            <td><input id="username" placeholder="Username"></input></td>
                        </tr>
                        <tr>
                            <td><input id="name" placeholder="Name"></input></td>
                        </tr>
                        <tr>
                            <td><input type='password' id="password" placeholder="Password"></input></td>
                        </tr>
                        <tr>
                            <td><button id="newbutton" onClick={()=>this.addUser()}>Add New</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}