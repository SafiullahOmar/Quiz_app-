import {
    CHANGE_AMOUNT,
    CHANGE_DIFFICULTY,
    CHANGE_CATEGORY, CHANGE_TYPE, CHANGE_SCORE
} from "./actionType";


const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_question: 10,
    score: 0
}


const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                question_category: actions.payload
            };
        case CHANGE_AMOUNT:
            return {
                ...state,
                amount_of_question: actions.payload
            };
        case CHANGE_DIFFICULTY:
            return {
                ...state,
                question_difficulty: actions.payload
            };
        case CHANGE_TYPE:
            return {
                ...state,
                question_type: actions.payload
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: actions.payload
            };
        default:
            return state;

    }
}

export default reducer;