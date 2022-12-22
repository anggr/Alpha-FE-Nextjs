import { UPDATE_SCORE } from "../type/scoreType"

const initialState = {
  score: null,
}

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score,
      }
    default:
      return state
  }
}
export default scoreReducer
