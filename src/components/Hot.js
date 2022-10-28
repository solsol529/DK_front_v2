import { Link } from "react-router-dom";
const Hot = () =>{
  return(
    <div className="hot">
      <Link to="#" className="hotboardname">실시간 인기 글</Link>
      <Link to="#" className="hotwritename">인기 게시글 1</Link>
      <Link to="#" className="hotwritename">인기 게시글 2</Link>
      <Link to="#" className="hotwritename">인기 게시글 3</Link>
      <Link to="#" className="hotwritename">인기 게시글 4</Link>
      <Link to="#" className="hotwritename">인기 게시글 5</Link>
    </div>
  );
};
export default Hot;