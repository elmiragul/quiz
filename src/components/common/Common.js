import React, { Component } from 'react';
import { observer } from "mobx-react";
import store from './Store';
import Quiz from '../quiz/Quiz'

if (typeof window != 'undefined') window.store = store;




class Common extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        }
    }

    handleClick() {
        this.setState({
            step: this.state.step += 1
        });
    }
    handleChange(value){
        store.setName(value)
    }

    render() {
        return (
            <div>
            { this.state.step===1 && <div className='name'>
                Grill game play with us
                 <div className="name__question">
                    What's your name?
                 <textarea onChange ={e=>this.handleChange(e.currentTarget.value)} className="name__textarea">
                 </textarea>
                    <div>
                        <button onClick={this.handleClick.bind(this)}>Continue</button>
                    </div>
                </div>
            </div>}
            { this.state.step===2 && <Quiz/>}
            </div>
        )
    }

}

export default observer(Common);