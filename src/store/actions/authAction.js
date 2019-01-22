export const signInAction = (credentials) => {
    console.log(credentials);
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', error: err });
        });

    }
}

export const signOutAction = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'SIGNOUT_SUCCESS'
            });
        })
    };
}

export const signUpAction = (credentials) => {
    return(dispatch, getState, {getFirebase, getFirestore} ) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // TODO: To create a new user with own id we can use .doc(id) method instead of add()
        firebase
            .auth()
            .createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((response) => {
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName : credentials.firstName,
                    lastName : credentials.lastName,
                    initials : `${credentials.firstName[0]}${credentials.lastName[0]}`
                })
            })
            .then(() => {
                dispatch({
                    type: 'SIGNUP_SUCCESS'
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'SIGNUP_ERROR',
                    error : err
                })
            })


    }
}