import React, {Component} from 'react';
import {
    Row, Col, Container,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";

import moment from 'moment';


class CalendarUIHeader extends Component {
    constructor(props) {
        super(props);
    }
    onMonthChange(val){
        this.props.onChangeMonth(val);
    }

    render(){
        return (<React.Fragment>
                <Container>
                    <Row>
                        <Col md="8" className="mt-3">
                            <h3>
                                {moment(this.props.selectedDate).format( "MMMM YYYY")}
                            </h3>
                        </Col>
                        <Col md="4" className="mt-3">
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-around"}}>
                                <FontAwesomeIcon icon={faArrowLeft} onClick={() => this.onMonthChange(-1)} style={{cursor: 'pointer'}}/>
                                {' '}
                                <div onClick={() => this.onMonthChange(0)} style={{cursor: 'pointer'}}><h3>Today</h3></div>
                                {' '}
                                <FontAwesomeIcon icon={faArrowRight} onClick={() => this.onMonthChange(1)} style={{cursor: 'pointer'}}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    selectedDate: state.calendars.selectedDate || {},
});

const mapDispatchToProps = (dispatch) => ({
    onChangeMonth: dispatch.calendars.changeMonth,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarUIHeader);
