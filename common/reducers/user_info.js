
module.exports = function (state, action) {
    state = state || {
            type: 'USER_INITIAL',
            data: [],
        };
    console.log("user_info", `action:${JSON.stringify(action)}`);
    switch (action.type) {

        case 'USER_REGISTER': {
            return {
                ...state,
                ...action,
                data: 'USER_REGISTER',
            }
        }

        case 'USER_LOGIN': {
            return {
                ...state,
                ...action,
                data: 'USER_LOGIN',
            }
        }
    }

    return {
        ...state
    }
}