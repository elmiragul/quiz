import React, { Component } from 'react';
import { observer } from "mobx-react";
import store from '../common/Store';

if (typeof window != 'undefined') window.store = store;




class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    question: 'are you awesome?',
                    choices: [
                        'yes', 'no', 'maybe'
                    ],
                    correctAnswer: 'yes',
                    score: 1
                },
                {
                    question: 'are you stupid?',
                    choices: [
                        'yes', 'no', 'maybe', 'you are the one who are stupid'
                    ],
                    correctAnswer: 'maybe',
                    score: 32
                },
                {
                    question: 'lets go?',
                    choices: [
                        'yes', 'no', 'maybe'
                    ],
                    correctAnswer: 'yes',
                    score:33
                },
            ],
            index: 0
        }
    }
    handleOptionChange(value) {
        if(this.state.questions[this.state.index].correctAnswer===value){
            store.addValue(this.state.questions[this.state.index].score)
        }
        
        this.setState({
            index: this.state.index += 1
        })
        if(this.state.index===3){
            store.sendToServer()
        }
        
       
    }

    render() {
        return (
            <div>
                {this.state.index !== 3 && <div className='name'>
                    Please answer this quiestions:
                <div>{this.state.questions[this.state.index].question}</div>
                    <div className="control">{
                        this.state.questions[this.state.index].choices.map(choice=>
                            <label className="radio">
                            <input onChange={e => this.handleOptionChange(e.currentTarget.value)} type="radio" value={choice} name="answer" />
                           {choice}
                    </label> 
                        )
            }
            
            </div>
            </div>}

                {this.state.index === 3 && <div className='name'>
                    {store.name}, your score is:{store.score}



                </div>}


            
            </div>
        )


        
    }

}

export default observer(Quiz);