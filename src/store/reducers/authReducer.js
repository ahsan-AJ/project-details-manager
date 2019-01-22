const initState = {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('error');
            return {
                ...state,
                authError: `Login failed - ${action.error.message}`
            };
        case 'LOGIN_SUCCESS':
            console.log('loggedIn');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('SignupError\n', action.error);
            return {
                ...state,
                authError: `Signup failed - ${action.error.message}`
            }

        default:
            return state;
    }
};

export default authReducer;