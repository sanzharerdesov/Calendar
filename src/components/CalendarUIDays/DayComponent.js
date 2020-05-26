import React, {Component} from 'react';
import {connect} from "react-redux";

const initialData = {
    date: null
};

class DayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = initialData;
    }

    componentDidMount() {
        this.setState({date:this.props.curDate});
    }

    render(){
        return (<div>

            </div>
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
