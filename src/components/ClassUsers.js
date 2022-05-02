import { Component, useState } from "react";

class ClassUsers extends Component{
    constructor() {
        this.state ={
            //all state goes in here, no separate state
            stateExamples: 'test',
            arrState: [],
        }
    }

    togglestate() {
        this.setState({})
    }

    render() {
        return(
            <div>
                <button>
                    hello
                </button>
            </div>
        )
    }
}