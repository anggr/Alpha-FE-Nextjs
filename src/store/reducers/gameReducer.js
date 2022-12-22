import { GET_GAMELIST } from "../type/gameListType"

const initialState = {
  gameList: [],
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMELIST:
      return {
        ...state,
        gameList: action.gameList,
      }
    default:
      return state
  }
}
export default gameReducer
