import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_LIST } from './actionTypes'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_LIST,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_LIST,
    index
})