import React, { useState } from 'react';
import {Row, Col, Input, Button, Form, FormGroup, Label} from 'reactstrap';

const ClockAngle = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [degrees, setDegrees] = useState(-1);

    const handleSubmit = event => {
        event.preventDefault();
        setDegrees(calculateAngle());
    }

    const validateHour = h => {
        if (h < 0 || h > 12) {
            return false;
        }
        return true;
    }

    const validateMinutes = m => {
        if (m < 0 || m > 59) {
            return false;
        }
        return true;
    }

     //Returns smaller of 2 numbers
    const getMin = (a1, a2) => {
        if (a1 < a2) {
            return a1;
        }
        return a2;
    } 

    const calculateAngle = () => {
        let h = Number(hours);
        let m = Number(minutes);
        //initial validate
        if (!validateHour(h) || !validateMinutes(m)){
            return -1;
        }

        //User will likely input 12 and not 0
        if (h === 12){
            h = 0;
        }
        
        const hourHandAngle = (1/2) * (h * 60 + m);
        const minuteHandAngle = 6 * m;
        const absDiff = Math.abs(hourHandAngle - minuteHandAngle);
        
        //need the min between 360 - difference and difference
        //to get valid results around the clock
        return getMin(absDiff, 360 - absDiff);
    }

    return (
        <div className="clock-angle-wrapper">
            <h1 className="form-title">Find the angle between analog clock hands given the hour/minutes</h1>
            <Form onSubmit={handleSubmit}>
                <Row style={{margin: 10}}>
                    <Col md={3}>
                        <FormGroup>
                            <Label> Hours (HH):</Label>
                            <Input type="number" onChange={event => setHours(event.target.value)}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{margin: 10}}>
                    <Col md={3}>
                        <FormGroup>
                            <Label> Minutes (MM): </Label>
                            <Input type="number" onChange={event => setMinutes(event.target.value)}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{margin: 10}}>
                    <Col md={3}>
                        <FormGroup>
                            <Button type="submit">Submit</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
            <br />
            <Row>
                <Col
                    className='bg-light border'
                    sm={{
                        offset: 1,
                        size: 'auto'
                    }}
                >
                    {degrees === -1 ? '' : <h2>{degrees} degrees</h2>}   
                </Col>
            </Row>         
        </div>
    );
};

export default ClockAngle;
