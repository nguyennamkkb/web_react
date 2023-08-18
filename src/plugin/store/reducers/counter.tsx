import {INCREMENT,DECREMENT} from '../actions/counter'


interface actionCounterReducers {
    type: string,
    payload: number
}

// Khởi tạo trạng thái mặc định cho reducer
const initialState = {
    count: 0
  };
  
  // Reducer cho trạng thái đếm
  const counterReducer = (state = initialState, action: actionCounterReducers) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  };
  
  export default counterReducer;