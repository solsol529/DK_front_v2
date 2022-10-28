import { Link } from "react-router-dom";
import Board from "./Board";
const Center = (props) =>{
  return(
    <div className={props.position + "center"}>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
      <Board/>
    </div>
  );
};
export default Center;