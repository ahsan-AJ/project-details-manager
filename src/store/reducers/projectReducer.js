const initState = {
    projects : [
        {id: 1, title: 'Do proj 1', content: 'blah blah blah'},
        {id: 2, title: 'Do proj 2', content: 'blah blah blah'},
        {id: 3, title: 'Do proj 3', content: 'blah blah blah'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project\n', action.project );

    }
    return state
}

export default projectReducer;