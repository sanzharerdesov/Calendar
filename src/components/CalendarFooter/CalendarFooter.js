import React, {Component} from 'react';
import {
    Row, Container,
} from 'reactstrap';
import {connect} from "react-redux";

import moment from 'moment';


class CalendarFooter extends Component {
    render(){
        return (<React.Fragment>
                <Container>
                    <Row>
                        <div>
                            {this.props.eventsNumberInMonth?this.props.eventsNumberInMonth:0} events on {moment(this.props.selectedDate).format("MMMM")}&nbsp;{"-"}&nbsp;
                        </div>
                        <div className={"button-remove"} onClick={()=>this.props.removeAllEvents({remove: true})}>
                            {" "}Remove all
                        </div>
                    </Row>
                </Container>

            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    selectedDate: state.calendars.selectedDate || {},
    savedData: state.calendars.savedData || [],
    eventsNumberInMonth: state.calendars.eventsNumberInMonth || 0
});

const mapDispatchToProps = (dispatch) => ({
    onChangeMonth: dispatch.calendars.changeMonth,
    removeAllEvents: dispatch.calendars.removeAllEvents
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarFooter);
