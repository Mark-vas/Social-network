import React from 'react';
import classes from './StatusProfile.module.css'

class StatusProfile extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            // Если editMode = true, то будет виден input
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            // Если editMode = false, то будет виден статус
            editMode: false,
        })
        this.props.updateProfileStatus(this.state.status)
    }

    changeStatus = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            <div >
                {!this.state.editMode
                    ? (<div>
                        {this.props.status
                            ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                            : <span className={classes.status} onDoubleClick={this.activateEditMode}>Установить статус</span>
                        }
                    </div>)
                    : (<div>
                        <input onChange={this.changeStatus} onBlur={this.deActivateEditMode} value={this.state.status} autoFocus />
                    </div>)
                }


            </div>

        </>
    }
}

export default StatusProfile