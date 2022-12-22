import { GET_SCOREBOARD } from "../type/scoreboardType"

const initialState = {
  scoreboard: [],
}

const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCOREBOARD:
      return {
        ...state,
        scoreboard: action.scoreboard,
      }
    default:
      return state
  }
}
export default scoreboardReducer