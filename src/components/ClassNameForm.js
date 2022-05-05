import React, { Component } from 'react'

export default class ClassNameForm extends Component {
  constructor(props) {
      super(props)
      this.state = {
          firstName: this.props.firstName
      }
  }
  changeName = (e) => {
      this.setState({ firstName: e.target.value })
      console.log(this.state.firstName)
  }
  submitChanges = (e) => {
      this.setState({ 
        name: this.state.firstName
    })
  }
  
  
    render() {
    return (
      <div>
          <label htmlFor='firstName'>
              <input type='text'placeholder={this.props.firstName}></input>
          </label>
          <button onClick={this.submitChanges}>change name</button>
          <h3>{this.state.firstName}</h3>
      </div>
    )
  }
}
