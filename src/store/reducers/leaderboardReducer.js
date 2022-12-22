import { GET_LEADERBOARD } from "../type/leaderboardType"

const initialState = {
  leaderboard: [],
}

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.leaderboard,
      }
    default:
      return state
  }
}
export default leaderboardReducer
