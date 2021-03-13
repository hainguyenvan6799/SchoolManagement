let isLogin = false;

const loginReducer = (state = isLogin, action) => {
    switch(action.type)
    {
        case 'Submit_Login_Form':
            const newState = action.isLogin;
            return newState;

        default: return state;
    }
}

export default loginReducer;