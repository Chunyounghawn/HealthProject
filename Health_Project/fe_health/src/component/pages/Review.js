import React from "react"
import styled from "styled-components"

import { Review1, Review2, Review3 } from "../../image/index"

import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard, Mousewheel]) // Swiper

const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
`

const Title = styled.div`
  position: absolute;
  top: 10%;
  left: 45%;
  font-size: 60px;
  text-align: center;
  color: #fff;
  font-weight: 600;
`

const Comments = styled.div`
  position: absolute;
  font-size: 20px;
  text-align: right;
  color: #fff;
  font-weight: 400;
`

const Comments1 = styled(Comments)`
  top: 10%;
  right: 10%;
  color: #b4b4b4;
`

const Comments2 = styled(Comments)`
  top: 20%;
  right: 40%;
  color: #32aaff;
`

const Comments3 = styled(Comments)`
  top: 30%;
  right: 15%;
  color: #ef904c;
`
const Comments4 = styled(Comments)`
  top: 40%;
  right: 40%;
  color: #505050;
`

const Comments5 = styled(Comments)`
  top: 50%;
  right: 10%;
  color: #ffc300;
`

const Comments6 = styled(Comments)`
  top: 60%;
  right: 40%;
  color: #d151b7;
`

const Comments7 = styled(Comments)`
  top: 70%;
  right: 15%;
  color: #5ec75e;
`

const Review = styled.div`
position: absolute;
top:10%
left: 10%;
`

function ReviewSection() {
  return (
    <div className="section">
      <Container>
        <Title>Review</Title>
        <Swiper
          style={{
            width: "1600px",
            height: "600px",
            position: "absolute",
            top: "30%",
            left: "10%",
          }}
          spaceBetween={1}
          slidesPerView={1}
          direction="vertical"
          mousewheel={true}
          // keyboard={{ enabled: true }}
        >
          <SwiperSlide>
            <Review>
              <img
                src={Review1}
                alt="Review1"
                width="400px"
                height="520px"
              ></img>
            </Review>
            <Comments1>오늘부터 시작합니다!</Comments1>
            <Comments2>
              이런 웹을 이제야 알았다니... 인생 손해봤습니다...
            </Comments2>
            <Comments3>이제부터 이 웹 자주 이용할 것 같네요~</Comments3>
            <Comments4>덕분에 5kg 감량 성공했네요~</Comments4>
            <Comments5>앞으로도 자주 이용할 것 같네요~</Comments5>
            <Comments6>
              커뮤니티 게시판으로 회원들이랑
              <br />
              소통할 수 있어서 좋네요~
            </Comments6>
            <Comments7>오늘부터 몸짱 될 것 같네요~</Comments7>
          </SwiperSlide>

          <SwiperSlide>
            <Review>
              <img
                src={Review2}
                alt="Review2"
                width="400px"
                height="520px"
              ></img>
            </Review>
            <Comments1>여로모로 잘 사용중 이예요~</Comments1>
            <Comments2>친구 추전받고 오늘 알았습니다.</Comments2>
            <Comments3>좋아요 꾹!~</Comments3>
            <Comments4>
              커뮤니티 답변도 잘 받아주시고 챌린지도 편하게
              <br />
              시작할 수 있어서 좋았어요~~
            </Comments4>
            <Comments5>편하게 이용할 수 있어서 좋아요!</Comments5>
            <Comments6>챌린지로 운동하니깐 너무 재미 있어요~</Comments6>
            <Comments7>제 친구한테도 이 웹 추천하니 좋다고 하네요~</Comments7>
          </SwiperSlide>

          <SwiperSlide>
            <Review>
              <img
                src={Review3}
                alt="Review3"
                width="400px"
                height="520px"
              ></img>
            </Review>
            <Comments1>오늘부터 시작합니다!</Comments1>
            <Comments2>
              이런 웹을 이제야 알았다니... 인생 손해봤습니다...
            </Comments2>
            <Comments3>이제부터 이 웹 자주 이용할 것 같네요~</Comments3>
            <Comments4>덕분에 5kg 감량 성공했네요~</Comments4>
            <Comments5>앞으로도 자주 이용할 것 같네요~</Comments5>
            <Comments6>
              커뮤니티 게시판으로 회원들이랑
              <br />
              소통할 수 있어서 좋네요~
            </Comments6>
            <Comments7>오늘부터 몸짱 될 것 같네요~</Comments7>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}

export default ReviewSection
