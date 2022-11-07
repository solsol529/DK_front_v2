import { useState, useEffect } from 'react';
import api from '../api/api';
import BoardName from "./BoardName";
import NewWrite from "./NewWrite";
import Write from "./Write";

const BoardCenter = () =>{
  const getBoard = window.localStorage.getItem("Board");
  const [boardDetail, setBoardDetail] = useState("");

  useEffect(() => {
    const boardData = async () => {
      try {
        const response = await api.boardPageBoardName(getBoard);
        setBoardDetail(response.data);
        console.log(response.data);//// 배열
      } catch(e) {
          console.log(e);
      }
    };
    boardData();
  },[])
  // <Write/> 게시글 목록 있는 컴포넌트
  return(
    <div className="boardcenter">
      {boardDetail&&boardDetail.map(board => (
      <BoardName key={board.boardName} name={board.boardName} />))}
      <NewWrite/>
      <Write/> 
      {/* <Write/> */}

    </div>
  );
};
export default BoardCenter;