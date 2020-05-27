import React, {Component} from 'react';
import {
    Row, Col, Container,
} from 'reactstrap';
import {connect} from "react-redux";

class CalendarUIWeeks extends Component {
    render(){
        return (<React.Fragment>
                <Container>
                    <Row className={""}>
                        <Col>
                            <h3 className={"float-right"}>Sun</h3>
                        </Col>
                        <Col>
                            <h3 className={"float-right"}>Mon</h3>
                        </Col>
                        <Col>
                            <h3 className={"float-right"}>Tue</h3>
                        </Col>
                        <Col>
                            <h3 className={"float-right"}>Wed</h3>
                        </Col>
                        <Col>
                            <h3 className={"float-right"}>Thu</h3>
                        </Col>
                        <Col>
                            <h3 className={"float-right"}>Fri</h3>
                        </Col>
                        <Col>
                            <h3 className={"float-right"}>Sat</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarUIWeeks);
