import BoardName from "./BoardName";
import NewWrite from "./NewWrite";
import Write from "./Write";
const BoardCenter = () =>{
  return(
    <div className="boardcenter">
      <BoardName name="자유게시판"/>
      <NewWrite/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
      <Write/>
    </div>
  );
};
export default BoardCenter;