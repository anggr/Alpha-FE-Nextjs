import axios from "../../utils/axios"
import { GET_SCOREBOARD } from "../type/scoreboardType"
export const getScoreboard = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/user/gamescore`)
    console.log(data)
    dispatch({
      type: GET_SCOREBOARD,
      scoreboard: data.data,
    })
  } catch (error) {
    console.log(error)
  }
}
