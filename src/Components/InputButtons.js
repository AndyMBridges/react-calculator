import React, {Component} from 'react';
import {Button, Col, Panel} from 'react-bootstrap'

class InputButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.value
        }
        // Bind this to events
        this.number = this.number.bind(this)
        this.equals = this.equals.bind(this)
        this.clear = this.clear.bind(this)
    }
    // Number & equations input
    number(e) {
        console.log('You\'ve pressed ' + e.target.value);
        this.setState({
            number: this.props.value + e.target.value
        }, () => {
            this.props.onChange(this.state.number);
        })
    }
    // Calculate the equation
    equals(e) {
        this.setState({
            number: eval(this.state.number)
        }, () => {
            this.props.onChange(this.state.number);
        })
    }
    // Clear the number state
    clear(e) {
        this.setState({
            number: ''
        }, () => {
            this.props.onChange(this.state.number);
        })
    }
    render() {
        // Render numbers 1-9 in for loop
        let numButtons = []
        for(var i =1; i <10; i++)
           numButtons.push(<Button key={i} bsStyle="primary" value={i} onClick={this.number}>{i}</Button>)
        return (
            <div className="buttons">
                <Panel>
                    <Col className="wrap" xs={9} md={9} lg={9}>
                        <div className="numbers">
                            {numButtons}
                        </div>
                        <div className="equals">
                            <Button bsStyle="danger" value='clear' onClick={this.clear}>Clear</Button>
                            <Button key='0' bsStyle="primary" value='0' onClick={this.number}>0</Button>
                            <Button bsStyle="success" value='=' onClick={this.equals}>=</Button>
                        </div>
                    </Col>
                    <Col className="wrap" xs={3} md={3} lg={3}>
                        <div className="equations">
                            <Button bsStyle="warning" value='+' onClick={this.number}>+</Button>
                            <Button bsStyle="warning" value='-' onClick={this.number}>-</Button>
                            <Button bsStyle="warning" value='*' onClick={this.number}>x</Button>
                            <Button bsStyle="warning" value='/' onClick={this.number}>/</Button>
                        </div>
                    </Col>
                </Panel>
            </div>
        );
    }
}

export default InputButtons;
