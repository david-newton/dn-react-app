import React from 'react';
import { Button, Row, Col, Container, ButtonGroup } from 'reactstrap';
import './ListItem.css';

const ListItem = ({ item, onDeleteClicked, onCompleteClicked }) => {
    //if item is complete strikeout text and hide complete button
    const itemText = item.isComplete ? <p><del>{item.data}</del></p> : <p>{item.data}</p>;
    const completeButton = item.isComplete ? null : 
        <Button className="complete-button" onClick={() => onCompleteClicked(item.data)}>
            Task Completed 
        </Button>;

    return ( 
        <Container style={{margin: '25px'}} >
            <Row xs="4" >
                <Col className="bg-light border" xs="6">
                    <h4>{itemText}</h4>
                </Col>
            </Row>
            <Row xs="4">
                <Col className="bg-light border" xs="6">
                    <ButtonGroup>
                        {completeButton}
                        <Button 
                            onClick={() => onDeleteClicked(item.data)}
                            className="delete-button">Delete
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
            
    );
};

export default ListItem;