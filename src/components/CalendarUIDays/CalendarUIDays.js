import React, {Component} from 'react';
import {
    Row, Col, Container,
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowLeft, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";

import moment from 'moment';

const initialData = {
    startDate: null,
    start: 0,
    end: 0,
    total: 0,
    curDate: null
};

class CalendarUIDays extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;
    }

    componentDidMount() {
        this.refreshState(this.props.selectedDate);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (moment(this.state.curDate).format('yyyy-MM-DD') !== moment(this.props.selectedDate).format('yyyy-MM-DD')) {
            this.refreshState(this.props.selectedDate);
        }
    }

    refreshState(curDate) {
        const d = new Date(curDate);
        d.setDate(0);
        let end = this.daysInMonth(d.getMonth(), d.getFullYear()) + 1;
        let dif = moment(d).weekday() - 1;
        d.setDate(d.getDate() - dif);
        this.setState({startDate: d, start: d.getDate(), end: end, total: dif + end, curDate: curDate});
    }

    daysInMonth(iMonth, iYear) {
        return new Date(iYear, iMonth, 0).getDate();
    }

    calcDate(val) {
        let d = new Date(this.state.startDate);
        d.setDate(d.getDate() + val);
        return d.getDate();
    }

    render() {
        return (<React.Fragment>
                <Container>
                    {
                        this.state.total && [...Array(Math.ceil(this.state.total / 7))].map((jitem, j) => (
                            <Row className={""} key={j}>
                                {
                                    this.state.total && [...Array(7)].map((item, i) => (
                                        <Col key={i + '-' + this.calcDate(i+j*7)} style={{
                                            height: 85,
                                            borderWidth: 1,
                                            borderColor: '#F2F2F2',
                                            borderStyle: 'solid'
                                        }}>
                                            <h3>{this.calcDate(i+j*7)}</h3>
                                        </Col>
                                    ))
                                }
                            </Row>

                        ))
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarUIDays);
