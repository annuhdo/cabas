import React, { Component } from 'react';

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.currentTitle
        };

        this.handleChange = this.handleChange.bind(this);
    }

    updateTitle(e) {
        e.preventDefault();

        const newTitle = this.title.value;

        if (newTitle !== '') {
            this.props.updateTitle(newTitle);
        } else {
            this.props.toggleDisplay(e);
        }
    }

    handleChange(e) {
        let title = {...this.state.title}
        title.listName = e.target.value;
        this.setState({
            title
        })
    }

	render() {
		let displayNone = {
	  		display: "none"
	  	}

	    return (
	    	<div className="edit-modal" style={this.props.editable ? null : displayNone}>

		      	<input type="text" value={this.state.title.listName} onChange={this.handleChange} placeholder={this.props.currentTitle.listName} ref={(input) => this.title = input} onKeyPress={(e) => e.key === 'Enter' ? this.updateTitle(e) : null} />

		      	<button name="editTitle" className="done-btn" onClick={(e) => this.updateTitle(e)}>Done</button>
		      	<button name="editTitle" className="cancel-btn" onClick={(e) => this.props.toggleDisplay(e)}>Cancel</button>
	      	</div>

	    );
	}
}

EditModal.contextTypes = {
    updateTitle: React.PropTypes.func,
    toggleDisplay: React.PropTypes.func,
    editable: React.PropTypes.bool,
    currentTitle: React.PropTypes.object
}

export default EditModal;
