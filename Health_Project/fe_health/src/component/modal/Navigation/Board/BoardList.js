import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Close, DefaultImage } from "../../../../image/index.js"
import Header from "./Header.js"
import Card from "./Card.js"
import { img_url } from "./ImageUploader.js"

import Menubar from "../Menubar.js"
import BoardModal from "react-modal"

import { Router, Routes, useSearchParams } from "react-router-dom"
import { Pagination } from "@mui/material"
import axios from "axios"
import moment from "moment"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
  background-color: rgb(231, 235, 240);
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const Footer = styled.div`
  width: 1350px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const BoardListWrapper = styled.div`
  width: 100%;
  height: 91%;
  position: relative;
  opacity: 0;
  animation: smoothAppear 1.5s forwards;
  animation-delay: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  .boardList-header {
    color: midnightblue;
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 50px;
  }
  .boardList-body {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .boardList-footer {
    margin: 1.5rem;
  }
`

const BoardList = ({ isModal, setModal }) => {
  const [pageCount, setPageCount] = useState(0)
  const [boardList, setBoardList] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  // 렌더링 되고 한번만 전체 게시물 갯수 가져와서 페이지 카운트 구하기
  // 렌더링 되고 한번만 페이지에 해당하는 게시물 가져오기

  /*
  useEffect(() => {
    // 페이지에 해당하는 게시물 가져오기
    const getBoardList = async () => {
      const page_number = searchParams.get("page")
      const { data } = await axios.get(
        `/api/board/list?page_number=${page_number}&page_size=4`
      )
      return data
    }
    // 현재 페이지에 해당하는 게시물로 상태 변경하기
    getBoardList().then((result) => setBoardList(result))
    // 게시물 전체 갯수 구하기
    const getTotalBoard = async () => {
      const { data } = await axios.get("/api/board/count")
      return data.total
    }
    // 페이지 카운트 구하기: (전체 board 갯수) / (한 페이지 갯수) 결과 올림
    getTotalBoard().then((result) => setPageCount(Math.ceil(result / 4)))
  }, [])
*/

  return (
    <BoardModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
    >
      <Menubar />

      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Header />
          <BoardListWrapper>
            <div className="boardList-header">전체 게시물 📝</div>
            <div className="boardList-body">
              {/* {boardList.map((item, index) => (
                <Card
                  date={moment(item.created)
                    .add(9, "hour")
                    .format("YYYY-MM-DD")}
                />
              ))} */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="boardList-footer">
              {/*페이지네이션: count에 페이지 카운트, page에 페이지 번호 넣기*/}
            </div>
          </BoardListWrapper>
        </ModalBody>

        <Footer>
          <Pagination
            variant="outlined"
            color="primary"
            page={Number(searchParams.get("page"))}
            count={pageCount}
            size="large"
            onChange={(e, value) => {
              //              window.location.href = `/board-list?page=${value}`
            }}
            style={{
              position: "absolute",
              bottom: "30px",
              cursor: "pointer",
            }}
            showFirstButton
            showLastButton
          />
        </Footer>
      </ModalContainer>
    </BoardModal>
  )
}

export default BoardList
