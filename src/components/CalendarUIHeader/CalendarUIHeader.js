import React, {Component} from 'react';
import {
    Row, Col, Container,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";

import moment from 'moment';


class CalendarUIHeader extends Component {
    onMonthChange(val){
        this.props.onChangeMonth(val);
    }

    render(){
        return (<React.Fragment>
                <Container>
                    <Row>
                        <Col md="9" className="mt-3">
                            <div className={"header-title"}>
                                {moment(this.props.selectedDate).format( "MMMM YYYY")}
                            </div>
                        </Col>
                        <Col md="3" className="mt-3">
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-around"}}>
                                <div><FontAwesomeIcon icon={faChevronLeft} onClick={() => this.onMonthChange(-1)} style={{cursor: 'pointer'}}/></div>
                                {' '}
                                <div onClick={() => this.onMonthChange(0)} style={{cursor: 'pointer'}}><h3>Today</h3></div>
                                {' '}
                                <div><FontAwesomeIcon icon={faChevronRight} onClick={() => this.onMonthChange(1)} style={{cursor: 'pointer'}}/></div>
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
