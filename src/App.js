import React, {Component} from 'react';
import {Panel} from 'react-bootstrap'
import InputField from './Components/InputField';
import InputButtons from './Components/InputButtons';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curInput: ''
        }
    }
    numberChange(num){
        this.setState({curInput: num});
    }
    render() {
        return (
            <div className="App">
                <Panel className="calculator-wrap" xs={12} md={12} lg={12}>
                    <InputField total={this.state.curInput} onChange={this.numberChange.bind(this)} />
                    <InputButtons onChange={this.numberChange.bind(this)} value={this.state.curInput} />
                </Panel>
            </div>
        );
    }
}

export default App;
