import React, { Component } from 'react';
import { RedButton, Card } from './Styles'

export class ListItem extends Component {

    handleDelete = e => {
        this.props.deleteCallback(this.props.id)
    }

    render() {
        return (
            <Card>
                <h4>Item: {this.props.item}</h4>
                <p>Priority: {this.props.priority}</p>
                <RedButton onClick={this.handleDelete}>Delete</RedButton>
            </Card>
        );
    }
}

export default ListItem;
