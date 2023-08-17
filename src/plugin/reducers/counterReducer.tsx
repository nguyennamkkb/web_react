const initialState = {
    state: 0,
};

interface  actionCounterReducers {
    type: string,
    payload: number
}
export const counterReducer = (state = 0 , action: actionCounterReducers) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
};

export default counterReducer;