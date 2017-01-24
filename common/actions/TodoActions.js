const LOAD_TODOS = 'LOAD_TODOS';
const SELECT_TODO = 'SELECT_TODO';
const APPEND_TODO = 'APPEND_TODO';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_BILL_TEXT = 'SET_BILL_TEXT';

var setUserInfo = (text) => {
	return {
		type: SET_USER_INFO,
		user: { text }
	}
}

var setBillText = (text) => {
	return {
		type:SET_BILL_TEXT,
		todo: {text}
	}
}

var loadTodos = () => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({ type: LOAD_TODOS });
		}, 1000);

		// fetch().then() => dispatch in promise 
	}
}

var appendTodo = (text, cleanUIState) => {
	if(text) {
		if(cleanUIState) 
			cleanUIState();
		return {
			type: APPEND_TODO,
			todo: { text }
		}
	}

	return ;
}

var selectTodo = (selected) => {
	return {
		type: SELECT_TODO,
		selected
	}
}

module.exports = {
	loadTodos,
	appendTodo,
	selectTodo,
	setUserInfo,
	setBillText
}