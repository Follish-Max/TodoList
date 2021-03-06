import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component{

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        store.subscribe(this.handleStoreChange)
        // console.log(store.getState())
    }

    render () {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemClick={this.handleItemClick}
            />
        )
    }

    componentDidMount () {
        axios.get('/src/list.json').then(() => {

        })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        //console.log(action)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemClick(index) {
        console.log(index)
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

}

export default TodoList