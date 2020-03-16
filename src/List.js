import React, { Component } from 'react';
import ListItem from './ListItem';


class List extends Component {

    listItems() {
        return this.props.todos.map(todo => (
        <ListItem
            item={todo.item}
            priority={todo.priority}
            key={todo.id}
            id={todo.id}
            deleteCallback={this.props.handleDelete}
        />
    ))}

    render() {
        return (
            <div>
                {this.listItems()}
            </div>
        );
    }
}



export default List;
