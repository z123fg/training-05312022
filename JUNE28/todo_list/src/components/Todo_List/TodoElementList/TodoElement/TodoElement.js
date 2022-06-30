import React from "react";
import APIs from "../../lib/APIs";
import "./TodoElement.css"

export default class TodoElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            edit_text: this.props.content
        }
    }

    render() {
        let label_completed_style = "TodoElement_ContentContainer_Label";
        if (this.props.completed) {
            label_completed_style = "TodoElement_ContentContainer_Label completed"
        }
        let content = (
            <label className={label_completed_style}
                onClick={(()=>{
                    APIs.Update(this.props.id, {completed: !this.props.completed})
                    .then(((response)=>{
                        this.props.UpdateTodoListItem({content: this.props.content, completed:!this.props.completed, id:this.props.id})
                    }).bind(this))
                }).bind(this)}
            >{this.props.content}</label>
        )
        let buttons = (
            <>
                <button className="TodoElement_EditButton TodoElementButton"
                    onClick={(()=>{this.setState({edit: true})}).bind(this)}
                >
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                </button>

                <button className="TodoElement_DeleteButton TodoElementButton"
                    onClick={(()=>{
                        APIs.Delete(this.props.id)
                        .then(((response)=>{
                            this.props.DeleteTodoListItem(this.props.id);
                        }).bind(this))
                    }).bind(this)}
                >
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                </button>
            </>
        )
        if (this.state.edit) {
            content = (
                <input type="text" className="TodoElement_EditText" value={this.state.edit_text} onChange={((e)=>{this.setState({edit_text: e.target.value})}).bind(this)} />
            )
            buttons = (
                <>
                    <button className="TodoElement_SaveButton TodoElementButton"
                        onClick={(()=>{
                            APIs.Update(this.props.id, {content: this.state.edit_text})
                            .then((()=>{
                                this.setState({
                                    edit: false
                                },
                                this.props.UpdateTodoListItem({content: this.state.edit_text, completed:this.props.completed, id:this.props.id})
                                )
                            }).bind(this))
                        }).bind(this)}
                    >
                        <svg height='25' width='25'><line x1='0' y1='18' x2='10' y2='25' style={{stroke:'white',strokeWidth:'2'}} /><line x1='10' y1='25' x2='25' y2='0' style={{stroke:'white',strokeWidth:'2'}} /></svg>
                    </button>
                    <button className="TodoElement_CancelButton TodoElementButton"
                        onClick={(()=>{
                            this.setState({
                                edit: false,
                                edit_text: this.props.content
                            });
                            
                        }).bind(this)}
                    >
                        <svg height='25' width='25'><line x1='0' y1='0' x2='25' y2='25' style={{stroke:'white',strokeWidth:'2'}} /><line x1='0' y1='25' x2='25' y2='0' style={{stroke:'white',strokeWidth:'2'}} /></svg>
                    </button>
                    <button className="TodoElement_DeleteButton TodoElementButton"
                        onClick={(()=>{
                            APIs.Delete(this.props.id)
                            .then(((response)=>{
                                this.props.DeleteTodoListItem(this.props.id);
                            }).bind(this))
                        }).bind(this)}
                    >
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                    </button>
                </>
            )
        }
        return(
            <div className="TodoElement">
                <div className="TodoElement_ContentContainer">
                    {content}
                </div>
                <div className="TodoElement_ButtonContainer">
                    {buttons}
                </div>
            </div>
        )
    }
}