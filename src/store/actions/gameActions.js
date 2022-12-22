import axios from "../../utils/axios"
import { GET_GAMELIST } from "../type/gameListType"

export const getGameList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/game")
    dispatch({
      type: GET_GAMELIST,
      gameList: data.data,
    })
  } catch (error) {
    console.log(error)
  }
}
