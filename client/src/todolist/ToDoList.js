import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

//page specific imports
import NewListForm  from './NewItemForm';
import ListItem from './ListItem';

//actions
import { removeTask, completeTask, completeAll } from './actions/actions';

//thunks
import { loadTodoList } from './thunks/thunks';

//styles
import './ToDoList.css';

const ToDoList = ({ listItems = [], onDeleteClicked, onCompleteClicked, onCompleteAllClicked, isLoading, startLoadingTodoList }) => {
    useEffect(() => {
        startLoadingTodoList();
    }, [startLoadingTodoList])
    
    const loadingMessage = <div>Loading...</div>;

    //TODO - persistor can cause listItems to be undefined/null - should protect against this or remove in memory persisting
    const completeAllButton = 
        listItems.some(item => !item.isComplete) ?
            <Button
                onClick={() => onCompleteAllClicked()} 
                className="complete-all-button">
                    Complete All
            </Button> : null;

    const content = (
        <div className="todo-list-wrapper">
            <h1 className="form-title">Tasks</h1>
            <NewListForm />
            {listItems.map(item => <ListItem key={item.data} item={item} onDeleteClicked={onDeleteClicked} onCompleteClicked={onCompleteClicked}/>)}
            {completeAllButton}
        </div>
    );

    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    listItems: state.todolist,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    onDeleteClicked: data => dispatch(removeTask(data)),
    onCompleteClicked: data => dispatch(completeTask(data)),
    onCompleteAllClicked: () => dispatch(completeAll()),
    startLoadingTodoList: () => dispatch(loadTodoList),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);