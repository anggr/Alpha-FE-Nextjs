import { combineReducers } from "redux"
import authReducer from "./authReducer"
import gameReducer from "./gameReducer"
import leaderboardReducer from "./leaderboardReducer"
import scoreboardReducer from "./scoreboardReducer"
import profileReducer from "./scoreReducer"
export default combineReducers({ authReducer, gameReducer, leaderboardReducer, scoreboardReducer, profileReducer })
