import React from 'react';

class StatusProfile extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return <>
            <div>
                {!this.state.editMode
                    ? (<div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>)
                    : (<div>
                        <input onBlur={this.deActivateEditMode} autoFocus />
                    </div>)
                }


            </div>

        </>
    }
}

export default StatusProfile