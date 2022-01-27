import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, InputGroup, Input } from 'reactstrap';

//Actions
import { createTask } from './actions/actions';

//Style
import './NewItemForm.css';

const NewListForm = ({ todolist, newTaskClicked }) => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div className="new-list-form">
            <Row>
                <Col 
                    className="bg-light border"
                    style={{padding: 10}}
                    xs="6"
                >   
                    <InputGroup>
                        <Input 
                            className="new-list-input" 
                            placeholder="Enter new Task..."
                            type="text" 
                            value={inputVal}
                            onChange={e => setInputVal(e.target.value)} />
                    </InputGroup>
                </Col>
                <Col
                    className='bg-light border'
                    style={{padding: 10}}
                    xs="auto"
                >
                    <Button 
                        className="new-list-button"
                        onClick = {() => {
                            //TODO - validate against duplicate items?
                            newTaskClicked(inputVal);
                            setInputVal('');
                        }}>
                            Create New Task
                    </Button>
                </Col>
            </Row>
        </div>
    );

};

const mapStateToProps = state => ({
    todolist: state.todolist
});

const mapDispatchToProps = dispatch => ({
    newTaskClicked: data => dispatch(createTask(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NewListForm);