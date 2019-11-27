import React, { Component } from 'react';

export default class ShowAllData extends Component {
  constructor() {
    super()
    this.state = {
      records:[]
    };
  }

    componentDidMount=()=> {
    fetch('http://localhost:2700/showAll')
      .then(response => response.json())
      .then(data => {
          this.setState({
              records:data
          })
        })
    }

    deleteRecord(reg){
        let data = {
            "regno": reg
        }
        fetch(`http://localhost:2700/deleteRecord/`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        window.location.reload()
    }

    addRecord(){
        let data = {
            "regno": document.getElementById("regno").value,
            "name": document.getElementById("name").value,
            "address": document.getElementById("address").value
        }
        fetch(`http://localhost:2700/newRecord/`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        window.location.reload()
    }

    editRecord(){
        let data = {
            "regno": document.getElementById("regno").value,
            "name": document.getElementById("name").value,
            "address": document.getElementById("address").value
        }
        fetch(`http://localhost:2700/editRecord`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        window.location.reload()
    }

    enterRegno(reg,name,address){
        document.getElementById("regno").value=reg
        document.getElementById("name").value=name
        document.getElementById("address").value=address
        document.getElementById("table").style.visibility="visible"
        document.getElementById("editbutton").style.visibility="visible"
    }

    addRegno(){
        document.getElementById("table").style.visibility="visible"
        document.getElementById("newbutton").style.visibility="visible"
    }

    render(){
        return(
            <div>
                <table id="table" style={{textAlign:'center', visibility:'collapse'}}>
                    <tbody>
                        <tr>
                            <td><input id="regno" placeholder="Regno"></input></td>
                        </tr>
                        <tr>
                            <td><input id="name" placeholder="Name"></input></td>
                        </tr>
                        <tr>
                            <td><input id="address" placeholder="Address"></input></td>
                        </tr>
                        <tr>
                            <td><button style={{visibility:'collapse'}} id="editbutton" onClick={()=>this.editRecord()}>Save Changes</button></td>
                            <td><button style={{visibility:'collapse'}} id="newbutton" onClick={()=>this.addRecord()}>Add New</button></td>
                        </tr>
                    </tbody>
                </table>
                <table style={{textAlign:'center'}}>
                    <tbody>
                        <tr>
                            <td><button id="addbutton" onClick={()=>this.addRegno()}>Add New</button></td>
                        </tr>
                        <tr>
                            <th>
                                Regno
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Address
                            </th>
                        </tr>
                        {this.state.records.map(each => {
                            return (
                                <tr key={each.regno}>
                                    <td style={{margin:'5px'}}>{each.regno}</td>
                                    <td style={{margin:'5px'}}>{each.name}</td>
                                    <td style={{margin:'5px'}}>{each.address}</td>
                                    <td><button onClick={()=>this.deleteRecord(each.regno)}>Delete</button></td>
                                    <td><button onClick={()=>this.enterRegno(each.regno,each.name,each.address)}>Edit</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}