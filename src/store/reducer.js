import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_LIST } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    //console.log(state, action)
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}