const initialState = {
    count: 0
};

const homeReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'INCREMENT':
            newState.count += action.value;
            break;

        case 'DECREMENT':
            newState.count -= action.value;
            break;
    }
    return newState;
}

export default homeReducer;