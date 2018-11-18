const initialState = {
    count: 0,
    history: []
};

const homeReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'INCREMENT_ASYNC':
            return {
                ...state,
                count: state.count + action.value,
                history: state.history.concat({ id: Math.random(), count: state.count + action.value })
            };
            break;

        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.value,
                history: state.history.concat({ id: Math.random(), count: state.count - action.value })
            };
            break;
        case "DEL_ENTRY":
            return {
                ...state,
                history: newState.history.filter((el) => el.id !== action.id)
            }
            break;
    }
    return newState;
}

export default homeReducer;