import React, { useState } from "react"
import styled from "styled-components"
import { Button, Dialog, DialogContent, IconButton } from "@mui/material"
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined"
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined"
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined"
import { useTodoDispatch } from "../List/BaordContext.js"
import DetailModal from "react-modal"
import { Close } from "../../../../../image/index.js"
import BoardEdit from "./BoardEdit.js"
import Comments from "./Comments.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
`

const ModalHead = styled.div`
  width: 100%;
  height: 100px;
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

const Delete = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 0.7rem;
  button {
    font-size: 1.2rem;
  }
  .delete-button {
    margin-left: 0.5rem;
  }
`

const ModalBody = styled.div`
  width: 100%;
  height: 790px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  transition: width 1s;
  opacity: 0;
  border-radius: 30px;
  animation: smoothAppear 1.5s forwards;
  animation-delay: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #fff;
  padding: 4rem;
`

const Header = styled.div`
  justify-content: space-between;
  align-items: baseline;
  display: flex;
  .board-header-username {
    font-size: 2rem;
  }
  .board-header-date {
    font-size: 1.5rem;
    vertical-align: baseline;
  }
`

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  .board-image {
    flex-shrink: 0;
    margin-right: 1rem;
    width: 50%;
    height: 80%;
    img {
      width: 100%;
      height: 125%;
      object-fit: cover;
    }
  }
  .board-title-content {
    word-break: break-all;
    margin-left: 1rem;
    overflow: auto;
    flex-grow: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    .board-title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: midnightblue;
    }
    .board-content {
      overflow-x: hidden;
      margin-top: 15px;
      font-size: 15px;
      font-weight: bold;
    }
  }
`

const Modal = styled.div`
  .modal-title {
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem 0;
  }
  .modal-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .button {
      font-size: 1.4rem;
    }
  }
`

const BoardDetail = ({
  id,
  img_url,
  title,
  content,
  username,
  date,
  isModal,
  setModal,
}) => {
  const [show, setShow] = useState(false)
  const [EditModalIsOpen, setEditModalOpen] = React.useState(false)
  const dispatch = useTodoDispatch()
  const onRemove = (e) => {
    dispatch({ type: "REMOVE", id })
    setModal(false)
  }

  return (
    <>
      <DetailModal
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
            backgroundColor: "rgb(231, 235, 240)",
          },
        }}
      >
        <ModalContainer>
          <ModalHead>
            <Closebtn src={Close} onClick={() => setModal(false)} />
          </ModalHead>

          <ModalBody>
            <Wrapper>
              <Delete>
                <Button
                  variant="outlined"
                  color="error"
                  endIcon={<DeleteForeverOutlinedIcon />}
                  className="delete-button"
                  onClick={() => {
                    setShow(true)
                  }}
                >
                  삭제
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<BuildOutlinedIcon />}
                  onClick={() => {
                    // setModal(false)
                    setEditModalOpen(true)
                  }}
                >
                  수정
                </Button>
              </Delete>

              <Header>
                <div className="board-header-username">{username}</div>
                <div className="board-header-date">{date}</div>
              </Header>
              <hr />

              <Body>
                <div className="board-image">
                  <img alt="이미지" src={img_url} />
                </div>
                <div className="board-title-content">
                  <div className="board-title">{title}</div>
                  <div className="board-content">{content}</div>
                </div>
              </Body>

              <hr />
              <div>
                <Comments />
              </div>
            </Wrapper>
          </ModalBody>

          <Dialog open={show}>
            <DialogContent style={{ position: "relative" }}>
              <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={() => {
                  setShow(false)
                }}
              >
                <DisabledByDefaultOutlinedIcon />
              </IconButton>
              <Modal>
                <div className="modal-title"> 정말 삭제하시겠습니까 ?</div>
                <div className="modal-button">
                  <Button
                    className="button"
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      onRemove()
                    }}
                  >
                    예
                  </Button>
                  <Button
                    className="button"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setShow(false)
                    }}
                  >
                    아니오
                  </Button>
                </div>
              </Modal>
            </DialogContent>
          </Dialog>
        </ModalContainer>
      </DetailModal>

      <BoardEdit
        id={id}
        img_url={img_url}
        title={title}
        content={content}
        username={username}
        date={date}
        isModal={EditModalIsOpen}
        setModal={setEditModalOpen}
      />
    </>
  )
}

export default BoardDetail
