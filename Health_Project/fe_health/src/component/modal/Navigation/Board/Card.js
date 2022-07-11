import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { DefaultImage } from "../../../../image/index.js"
// import { img_url } from "./ImageUploader.js"
// import { Title, Content } from "./TextArea.js"

const CardWrapper = styled.div`
  flex-shrink: 0;
  margin: 15px;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 1s, height 1s, box-shadow 1s;
  cursor: pointer;

  @media all and (min-width: 1024px) {
    width: 300px;
    height: 400px;

    &:hover {
      width: 310px;
      height: 410px;
      box-shadow: rgba(0, 0, 0, 0.9) 0px 22px 70px 4px;
    }
  }

  @media all and (max-width: 1024px) {
    width: 270px;
    height: 440px;

    &:hover {
      width: 280px;
      height: 450px;
      box-shadow: rgba(0, 0, 0, 0.9) 0px 22px 70px 4px;
    }
  }

  .card-body-img {
    width: 100%;
    height: 60%;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-body-text {
    flex-grow: 1;

    word-break: break-all;
    padding: 0.6rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .card-body-text-title {
      font-size: 1.3rem;
      color: darkslategray;
      font-weight: bold;
    }
  }

  .card-footer {
    border-top: 0.5px solid black;
    padding: 0.6rem;
    font-weight: 200;
    display: flex;
    color: #282c34;
    font-size: 1.1rem;
    justify-content: space-between;
  }
`

const Card = ({ board_id, title, content, img_url, username, date }) => {
  // const navigate = useNavigate()
  return (
    <>
      <CardWrapper
        onClick={() => {
          // navigate(`/board/${board_id}`)
        }}
      >
        <div className="card-body-img">
          <img alt="" src={DefaultImage} />
        </div>
        <div className="card-body-text">
          <div className="card-body-text-title">뚱이</div>
          <div className="card-body-text-content">"스폰지밥"</div>
        </div>

        <div className="card-footer">
          <div className="username">장진원</div>
          <div className="date">{date}</div>
        </div>
      </CardWrapper>
    </>
  )
}

export default Card
