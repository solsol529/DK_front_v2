import { useState, useEffect } from 'react';
import api from '../api/api';
import BoardName from "./BoardName";
import NewWrite from "./NewWrite";
import Write from "./Write";
import Loader from './Loader';

const BoardCenter = () =>{
  const getBoard = window.localStorage.getItem("Board");
  const [boardDetail, setBoardDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const changeLoading = (value) => {
    setLoading(value);
  };

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

  if(loading){
    return (<Loader/>)
  }
  
  return(
    <div className="boardcenter">
      {boardDetail&&boardDetail.map(board => (
      <BoardName key={board.boardName} name={board.boardName} />))}
      <NewWrite/>
      <Write loading={loading} changeLoading={changeLoading} part="board"/> 
      {/* <Write/> */}

    </div>
  );
};
export default BoardCenter;