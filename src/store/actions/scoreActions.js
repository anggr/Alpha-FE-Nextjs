import axios from "../../utils/axios";
import { UPDATE_SCORE } from "../type/scoreType";
import { toast } from "react-toastify";

export const updateScore = async (body) => {
  try {
    await axios.put("/score", body);
    toast.success("Score updated");
  } catch (error) {
    toast.error(error.message);
  }
};
