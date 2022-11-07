import { useState, useEffect } from "react";
import api from "../api/api";
import "../style/main.scss";
import "../style/board.scss";
import Header from "../components/Header";
import BoardName from "../components/BoardMain";
import Write from "../components/Write";
import { isLogin } from "../util/common";
import { useParams } from 'react-router-dom';

const SearchPage = () =>{
  
  let { query } = useParams();

  if(!isLogin){
    window.location.replace("/");
  }
  if(isLogin){
    return(
      <>
      <Header/>
      <div className="boardcenter">
      <BoardName name={query+"의 검색결과"}/>
      <Write part="search" query={query}/> 
      {/* <Write/> */}
      </div>
      </>
    );
  }
};
export default SearchPage;