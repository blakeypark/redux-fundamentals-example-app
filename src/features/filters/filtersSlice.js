const initialState = {
    filters: {
        status: 'All',
        colors: []
    },
};

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        //Do something here based on the action type
        case "filters/statusFilterChanged": {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }
        default:
            return state;
    }
}