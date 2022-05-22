import React from "react"
import styled from "styled-components"

import {
  Review1,
  Review2,
  Review3,
  Review4,
  Review5,
  Good,
  Click,
  Chat,
} from "../../image/index"

import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/css/effect-cube"

// lodash
// import { throttle } from "lodash"

SwiperCore.use([
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
]) // Swiper

const Container = styled.div`
  width: 1740px;
  height: 970px;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`
const ReviewBottom = styled.div`
  position: relative;
  left: 0.5%;
  top: 89%;
  width: 1580px;
  height: 85px;
  background-color: skyblue;
  border-radius: 30px;
`

const Best = styled.img`
  position: absolute;
  left: 3%;
  bottom: 5%;
  widht: 70px;
  height: 70px;
`

const BestText = styled.div`
  position: absolute;
  left: 9%;
  bottom: 25%;
  font-size: 30px;
`

const Vist = styled.img`
  position: absolute;
  left: 17%;
  bottom: 5%;
  widht: 70px;
  height: 70px;
`
const VistText = styled.div`
  position: absolute;
  left: 23%;
  bottom: 25%;
  font-size: 30px;
`

const Comments = styled.div`
  position: absolute;
  text-align: center;
  font-size: 20px;
`

const Comments1 = styled(Comments)`
  top: 10%;
  right: 10%;
  color: #b4b4b4;
`

const Comments2 = styled(Comments)`
  top: 20%;
  right: 30%;
  color: #32aaff;
`

const Comments3 = styled(Comments)`
  top: 30%;
  right: 10%;
  color: #ef904c;
`
const Comments4 = styled(Comments)`
  top: 40%;
  right: 30%;
  color: #505050;
`

const Comments5 = styled(Comments)`
  top: 50%;
  right: 10%;
  color: #ffc300;
`

const Comments6 = styled(Comments)`
  top: 60%;
  right: 35%;
  color: #d151b7;
`

const Comments7 = styled(Comments)`
  top: 70%;
  right: 15%;
  color: #5ec75e;
`

const Review = styled.img`
position: absolute;
top:10%
left: 10%;
width: 600px;
height: 720px;
`

function ReviewSection() {
  return (
    <div className="section">
      <Container>
        <Swiper
          // onSlideChange={(Swiper) => console.log(Swiper.realIndex + 1)}
          style={{
            width: "1600px",
            height: "820px",
            position: "absolute",
            top: "10%",
            borderRadius: "30px",
            borderWidth: "thick",
            borderStyle: "solid",
            borderColor: "pink",
            breakpoints: {
              1920: {
                //브라우저가 1920보다 클 때
              },
            },
          }}
          effect={"coverflow"}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={3000}
          slidesPerView={1}
          direction="vertical"
          mousewheel={true}
        >
          <SwiperSlide>
            <Review src={Review1} />

            <ReviewBottom>
              <Best src={Good}></Best>
              <BestText>1,500</BestText>
              <Vist src={Click}></Vist>
              <VistText>조회수 2,782회</VistText>
            </ReviewBottom>

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
            <Review src={Review2} />

            <ReviewBottom>
              <Best src={Good}></Best>
              <BestText>700</BestText>
              <Vist src={Click}></Vist>
              <VistText>조회수 1,352회</VistText>
            </ReviewBottom>

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
            <Review src={Review3} />

            <ReviewBottom>
              <Best src={Good}></Best>
              <BestText>1,002</BestText>
              <Vist src={Click}></Vist>
              <VistText>조회수 1,385회</VistText>
            </ReviewBottom>

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
            <Review src={Review4} />

            <ReviewBottom>
              <Best src={Good}></Best>
              <BestText>1.2만</BestText>
              <Vist src={Click}></Vist>
              <VistText>조회수 22,782회</VistText>
            </ReviewBottom>

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
            <Review src={Review5} />

            <ReviewBottom>
              <Best src={Good}></Best>
              <BestText>3.2만</BestText>
              <Vist src={Click}></Vist>
              <VistText>조회수 42,782회</VistText>
            </ReviewBottom>

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
