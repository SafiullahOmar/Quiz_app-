import {
    CHANGE_AMOUNT,
    CHANGE_DIFFICULTY,
    CHANGE_CATEGORY, CHANGE_TYPE, CHANGE_SCORE
} from "./actionType";

export const handleAmountChange = (payload) => ({
    type: CHANGE_AMOUNT,
    payload,
});

export const handleCategoryChange = (payload) => ({
    type: CHANGE_CATEGORY,
    payload,
});


export const handleDifficultyChange = (payload) => ({
    type: CHANGE_DIFFICULTY,
    payload,
});

export const handleTypeChange = (payload) => ({
    type: CHANGE_TYPE,
    payload,
});

export const handleScoreChange = (payload) => ({
    type: CHANGE_SCORE,
    payload,
  });