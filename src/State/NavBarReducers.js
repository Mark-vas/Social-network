let stateInitialization = {
    friends: [
        { id: 1, name: 'Alina' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Anton' }
    ]
}

const friendsReducers = (state = stateInitialization, action) => {
    return state
}
export default friendsReducers