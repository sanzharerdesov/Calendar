import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment";

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
            taskDate: "",
            taskDescription: "",
            taskTime: ""
        };
        this.props.savedData.map(item=>{
            if(item.date===moment(this.props.selectedDate).format("DD-MM-YYYY")){
                this.state = {
                    taskName: item.taskName,
                    taskDate: item.taskDate,
                    taskDescription: item.taskDescription,
                    taskTime: item.taskTime
                };
            }else{
                this.state = {
                    taskName: "",
                    taskDate: "",
                    taskDescription: "",
                    taskTime: ""
                };
            }
            return null;
        });
    }

    componentWillUnmount() {
        this.setState({
            taskName: "",
            taskDate: "",
            taskDescription: "",
            taskTime: ""
        });
    }

    handleChange(val, name) {
        switch (name) {
            case "taskName":
                this.setState({taskName: val.target.value});
                break;
            case "taskTime":
                this.setState({taskTime: val.target.value});
                break;
            case "taskDescription":
                this.setState({taskDescription: val.target.value});
                break;
            default:
                break;
        }
        this.props.changeDateParam({date: this.props.selectedDate, name: name, val: val.target.value});
    }

    remove() {
        this.setState( {
            taskName: "",
            taskDate: "",
            taskDescription: "",
            taskTime: ""
        });
        this.props.removeTask({date: this.props.selectedDate});
        this.props.closeModal();
    }

    save() {
        this.props.closeModal();
        this.setState({
            taskName: "",
            taskDate: "",
            taskDescription: "",
            taskTime: ""
        });
    }

    render() {
        return (
            <div className={"task-body"} ref="container">
                <div className={"task-arrow"}></div>
                <input type="text" className={"task-input"} value={this.state?this.state.taskName:''}
                       onChange={(val) => this.handleChange(val, "taskName")}/>
                <input type="text" className={"task-input"} value={this.state?this.state.taskTime:''}
                       onChange={(val) => this.handleChange(val, "taskTime")}/>
                <textarea type="text" className={"task-textarea"} value={this.state?this.state.taskDescription:''}
                          onChange={(val) => this.handleChange(val, "taskDescription")}/>
                <div className={"button-add-task"}>
                    <div className={"button-save"} onClick={() => this.save()}>сохранить</div>
                    <div className={"button-remove"} onClick={() => this.remove()}>удалить</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    savedData: state.calendars.savedData || []
});

const mapDispatchToProps = (dispatch) => ({
    changeDateParam: dispatch.calendars.changeDateParam,
    removeTask: dispatch.calendars.removeTask
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
