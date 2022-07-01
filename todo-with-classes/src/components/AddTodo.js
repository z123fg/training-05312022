import React, { Component } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

class AddTodo extends Component {
    state = {
        title: ""
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    handleSubmit = async (e) => {
        let title = this.state.title;
        e.preventDefault();
        if (this.state.title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false
            });
            this.setState({ title: "" })
        }
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='input_container'>
                    <input type="text" placeholder='Enter Todo' value={this.state.title} onChange={this.handleChange} />
                    <button className='btn'>Submit</button>
                </div>

            </form>
        )
    }
}

export default AddTodo;