import { Link } from "react-router-dom";
const BoardName = (props) =>{
  return(
    <div className="board-name">
      <Link className="bname" to="#">{props.name}</Link>
    </div>
  );
};
export default BoardName;