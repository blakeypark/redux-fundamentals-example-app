export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
}

const initialState = {
    status: StatusFilters.All,
    colors: [],
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        //Do something here based on the action type
        case "filters/statusFilterChanged": {
            return {
                ...state,
                status: action.payload,
            }
        }
        case "filters/colorFilterChanged": { //{color, changeType}
            let { color, changeType } = action.payload;
            const { colors } = state

            switch (changeType) {
                case "added": {
                    if (colors.includes(color)) {
                        return state;
                    }

                    return {
                        ...state,
                        colors: state.colors.concat(color),
                    }
                }
                case "removed": {
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (exisitingColor) => exisitingColor !== color
                        ),
                    }
                }
                default:
                    return state;
            }
        }
        default:
            return state;
    }
}