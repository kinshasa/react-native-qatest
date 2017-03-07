
module.exports = function (state, action) {
    state = state || {
            type: 'USER_INITIAL',
            data: [],
        };
    console.log("DBUserInfo", `action:${JSON.stringify(action)}`);
    switch (action.type) {

        case 'USER_REGISTER': {
            return {
                ...state,
                ...action,
                data: [1, 23],
            }
        }

        case 'USER_LOGIN': {
            return {
                ...state,
                ...action,
                data: [1, 33],
            }
        }
    }

    return {
        ...state
    }
}