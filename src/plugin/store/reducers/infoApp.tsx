interface actionReducers {
    type: string,
    payload: any
}
var initInfoApp = {
    infoApp: {
        title: "Nam",
        theme: "white"
    }
}


// Khởi tạo trạng thái mặc định cho reducer

// Reducer cho trạng thái đếm
const infoAppReducer = (state = initInfoApp, action: actionReducers) => {
    switch (action.type) {
        case "SETTITLEAPP":
            return {
                ...state,
                infoApp: state.infoApp = action.payload
            };

        default:
            return state;
    }
};

export default infoAppReducer;