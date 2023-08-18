export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = (number: number) => {
    return {
        type: INCREMENT,
        payload: number,
    };
};
export const decrement = (number: number) => {
    return {
        type: DECREMENT,
        payload: number,
    };
};