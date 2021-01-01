export default (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                language: action.payload
            }
        default:
            return state;
    }
}