// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

import styled from "styled-components"

import {
  Calender, In_body, Scheduling, Water_alarm
} from '../../image/index'


SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const ItemBox = styled.div`
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #333;
  background-color: purple;
  border-radius: 50%;
  font-size: 30px;
`



const SwiperPhone = styled.div`
  width: 350px;
  height: 600px;
  background-color: yellow;
  border: 4px solid #333;
  border-radius: 10%;
  position: absolute;
  top: 200px;
  left: 250px;
`



const SwiperSlideStyle = styled.div`
  width: 300px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 50px;
  left: 105px;
`

const Front1 = styled(ItemBox)`
  position: absolute;
  top: 200px;
  left: 1150px;
  transform: rotateY(0deg);
`

const Front2 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 950px;
  transform: rotateY(0deg);
`

const Front3 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 1350px;
  transform: rotateY(0deg);
`

const Front4 = styled(ItemBox)`
  position: absolute;
  top: 600px;
  left: 1150px;
  font-size: 30px;
  transform: rotateY(0deg);
`

const Back1 = styled(ItemBox)`
  position: absolute;
  top: 200px;
  left: 1150px;
  font-size: 15px;
  background-color: #333;
  color: #fff;
  transform: rotateY(-180deg);
`

const Back2 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 950px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Back3 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 1350px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

const Back4 = styled(ItemBox)`
  position: absolute;
  top: 600px;
  left: 1150px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`


const Selecter1 = styled.div`
  &:hover ${Front1} {
    transform: rotateY(180deg);
  }
  &:hover ${Back1} {
    transform: rotateY(0deg);
  }
`

const Selecter2 = styled.div`
  &:hover ${Front2} {
    transform: rotateY(180deg);
  }
  &:hover ${Back2} {
    transform: rotateY(0deg);
  }
`

const Selecter3 = styled.div`
  &:hover ${Front3} {
    transform: rotateY(180deg);
  }
  &:hover ${Back3} {
    transform: rotateY(0deg);
  }
`

const Selecter4 = styled.div`
  &:hover ${Front4} {
    transform: rotateY(180deg);
  }
  &:hover ${Back4} {
    transform: rotateY(0deg);
  }
`








function HealthKeyWordSection() {
  return (
    <div className="section">

      <SwiperPhone>
        <Swiper
          style={{
            height: "680px",
            width: "500px",
            position: "relative",
            left: "-80px",
            top: "-30px",
          }}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <SwiperSlideStyle>
              <img
                src={Calender}
                alt="진단표 스캔"
                width="300px"
                height="520px"
              ></img>
            </SwiperSlideStyle>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideStyle>
              <img
                src={In_body}
                alt="캘린더"
                width="300px"
                height="520px"
              ></img>
            </SwiperSlideStyle>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideStyle>
              <img
                src={Scheduling}
                alt="운동 스케줄링"
                width="300px"
                height="520px"
              ></img>
            </SwiperSlideStyle>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideStyle>
              <img
                src={Water_alarm}
                alt="물 알람"
                width="300px"
                height="520px"
              ></img>
            </SwiperSlideStyle>
          </SwiperSlide>
        </Swiper>
      </SwiperPhone>

      <Selecter1>
        <Front1>진단표 스캔</Front1>
        <Back1>
          카메라로 진단표를 스캔하여 나의 인다비 정보를 확인할 수 있습니다.
        </Back1>
      </Selecter1>

      <Selecter2>
        <Front2>물 알람</Front2>
        <Back2>
          알람 기능을 이용하여 사용자가 직접 물 알람을 설정할 수 있습니다.
        </Back2>
      </Selecter2>

      <Selecter3>
        <Front3>운동 스케줄링</Front3>
        <Back3>사용자가 직접 운동 스케줄을 추가 및 삭제할 수 있습니다.</Back3>
      </Selecter3>

      <Selecter4>
        <Front4>캘린더</Front4>
        <Back4>
          사용자는 캘린더를 통해 해당 날짜의 운동 달성량을 파악할 수 있습니다.
        </Back4>
      </Selecter4>

    </div>
  )
}

export default HealthKeyWordSection