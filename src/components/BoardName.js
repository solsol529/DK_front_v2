import { Link } from "react-router-dom";
const BoardName = (props) =>{
  return(
    <div className="board-name">
      <Link className="bname" to="/board">{props.name}</Link>
    </div>
  );
};
export default BoardName;