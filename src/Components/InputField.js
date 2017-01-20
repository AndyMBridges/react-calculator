import React, {Component} from 'react';
import {Col, Panel} from 'react-bootstrap'

class InputField extends Component {
    render() {
        return (
            <Panel>
                <Col className="wrap" xs={12} md={12} lg={12}>
                    <input disabled="disabled" type="text" value={this.props.total || ''} />
                </Col>
            </Panel>
        );
    }
}

export default InputField;
