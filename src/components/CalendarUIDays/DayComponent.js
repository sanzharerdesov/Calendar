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

const initialData = {
    date: null
};

class DayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;
    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    refreshState(curDate){
    }

    render(){
        return (<React.Fragment>
                <Container>
                    <Row className={""}>
                        {
                            this.state.total && [...Array(this.state.total)].map((item, i)=>(
                                <Col md="1" className="mr-5" key={i+'-'+this.calcDate(i)}>
                                    <h3>{this.calcDate(i)}</h3>
                                </Col>
                            ))
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(DayComponent);
