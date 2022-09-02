export const AppReducer = (state, action) => {
    switch (action.type) {
        case "STEP_ONE":
            return {
                step_one: action.payload.step_one,
                step_two: action.payload.step_two,
                step_three: action.payload.step_three,
                step_four: action.payload.step_four,
            }
        case "STEP_TWO":
            return {
                step_one: action.payload.step_one,
                step_two: action.payload.step_two,
                step_three: action.payload.step_three,
                step_four: action.payload.step_four,
            }
        case "STEP_THREE":
            return {
                step_one: action.payload.step_one,
                step_two: action.payload.step_two,
                step_three: action.payload.step_three,
                step_four: action.payload.step_four,
            }
        case "STEP_FOUR":
            return {
                step_one: action.payload.step_one,
                step_two: action.payload.step_two,
                step_three: action.payload.step_three,
                step_four: action.payload.step_four,
            }
        default:
            return {...state};
    }
}