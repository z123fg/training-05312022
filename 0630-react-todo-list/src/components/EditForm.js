import React from 'react';

class EditForm extends React.Component {
    state = {
        ...this.props.todo
    }

    handleEditFormChange = (event) => {
        this.setState({content: event.target.value})
    }

    render(){
        return (
            <input value={this.state.content} name="edit" onChange={this.handleEditFormChange} />
        )
    }

}

export default EditForm;