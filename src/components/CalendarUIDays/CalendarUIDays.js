import React, {Component} from 'react';
import {
    Row, Col, Container,
} from 'reactstrap';
import {connect} from "react-redux";

import moment from 'moment';
import DayComponent from "./DayComponent";
import AddTask from "./AddTask";

const initialData = {
    startDate: null,
    start: 0,
    end: 0,
    total: 0,
    curDate: null,
    isShowModal: false,
    selectedDate: null
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

    calcDay(val) {
        let d = new Date(this.state.startDate);
        d.setDate(d.getDate() + val);
        return d.getDate();
    }

    calcDate(val) {
        let d = new Date(this.state.startDate);
        d.setDate(d.getDate() + val);
        return d;
    }

    onDayClick(d){
        if(!this.state.isShowModal) {
            this.setState({isShowModal: !this.state.isShowModal, selectedDate: d});
            if (this.state.isShowModal) {
                this.props.changeDateParam({date: this.props.selectedDate});
            }
        }
    }

    closeModal(){
        this.setState({isShowModal: false});
    }

    saveTask(date, taskName, taskTime, taskDescription){
        this.props.changeDateParam({date:date, name: "taskName", val: taskName});
        this.props.changeDateParam({date:date, name: "taskTime", val: taskTime});
        this.props.changeDateParam({date:date, name: "taskDescription", val: taskDescription});
    }

    isSameDate(d){
        let ret = (moment(d).format("DD-MM-YYYY")+'')===(moment(this.state.selectedDate).format("DD-MM-YYYY")+'');
        return ret;
    }

    render() {
        return (<React.Fragment>
                <Container>
                    {
                        this.state.total && [...Array(Math.ceil(this.state.total / 7))].map((jitem, j) => (
                            <Row className={""} key={jitem+' '+j}>
                                {
                                    this.state.total && [...Array(7)].map((item, i) => (
                                        <Col key={i + '-' + (i+j*7)} className={"day-item"} onClick={()=>this.onDayClick(this.calcDate(i+j*7))} >
                                            <h3 className={"float-right pt-2"}>{this.calcDay(i+j*7)}</h3>
                                            <DayComponent curDate={this.calcDate(i+j*7)}/>
                                                {
                                                    this.props.savedData.map(item=>(
                                                        item.date===moment(this.calcDate(i+j*7)).format("DD-MM-YYYY") &&
                                                        <div className={"task"} key={"taskName"+i+j}>
                                                            {item.taskTime+' '+item.taskName}
                                                        </div>
                                                    ))
                                                }
                                            <div className={(this.state.isShowModal && this.isSameDate(this.calcDate(i+j*7)))?"visible overlay":"invisible" }>
                                                <AddTask
                                                    selectedDate={this.calcDate(i+j*7)}
                                                    closeModal={()=>this.closeModal()}
                                                    saveTask={(date, taskName, taskTime, taskDesc)=>this.saveTask(date, taskName, taskTime, taskDesc)}
                                                />
                                            </div>
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
    savedData: state.calendars.savedData || []
});

const mapDispatchToProps = (dispatch) => ({
    changeDateParam: dispatch.calendars.changeDateParam,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarUIDays);
