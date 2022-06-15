import React, { Component } from 'react'
import ClassNameForm from "./ClassNameForm";

export default class ClassPage extends Component {
    constructor() {
        super()
        this.state = {
            firstName: 'Ronald',
            lastName: 'Rios',
            title: this.firstName + " " + this.lastName
        }
    }

    // setFirstName = () => {
    //     this.setState({ firstName: this.state.firstName})
    //     console.log('working')
    // }

    render() {
    return (
      <div>
          <h1>Passing Props w/ Class based components</h1>
          <ul>
              <li>Hello</li>
              <li>{this.state.firstName }</li>
              <li>{this.state.lastName}</li>
          </ul>
          <ClassNameForm firstName={this.state.firstName} />
      </div>
    )
  }
}
