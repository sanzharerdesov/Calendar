import React, {Component} from 'react';
import {
    Row, Col, Container,
} from 'reactstrap';
import {connect} from "react-redux";

class CalendarUIWeeks extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (<React.Fragment>
                <Container>
                    <Row className={""}>
                        <Col className="mr-5">
                            <h3>Sun</h3>
                        </Col>
                        <Col className="mr-5">
                            <h3>Mon</h3>
                        </Col>
                        <Col className="mr-5">
                            <h3>Tue</h3>
                        </Col>
                        <Col  className="mr-5">
                            <h3>Wed</h3>
                        </Col>
                        <Col className="mr-5">
                            <h3>Thu</h3>
                        </Col>
                        <Col className="mr-5">
                            <h3>Fri</h3>
                        </Col>
                        <Col className="mr-5">
                            <h3>Sat</h3>
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
