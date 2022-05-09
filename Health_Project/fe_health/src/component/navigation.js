
import {
  Light, User,
  Main, Thumbs_up, Reviews, Headphone, Placeholder
} from '../image/index.js'

import styled from "styled-components"

const NavigationStyle = styled.div`
position:fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 200px;
right: 0;
top: 0;
height: 100% ;
background: #F9D9CA;
z-index: 100;

img{
  margin: 12px;
  width: 50px;
  height: 50px;
  &:last-child{
    width: 80px;
    height: 80px;
  }
}

img.attrs{
  src:${props => props.src}
}

`


const ThemeButton = styled.img`

position: fixed;
top: 10px;
right: 100px;
&:hover{
  cursor: pointer;
}
`
const UserButton = styled.img`
position: fixed;
width: 5px;
height: 5px;
top: 10px;
right: 20px;
&:hover{
  cursor: pointer;
}
`

const handleClick = (e) => {
  e.preventDefault();
  console.log("asdfasdfasd");
}


const Navigation = () => {
  return (
    <>
      <NavigationStyle>
        <ThemeButton src={Light} onClick={handleClick} />
        <UserButton src={User} onClick={handleClick} />



        <ul>
          <li data-menuanchor="MainPage">
            <a href="#MainPage">
              <img src={Main} alt="메인페이지" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="StrengthPage" >
            <a href="#StrengthPage">
              <img src={Thumbs_up} alt="앱장점" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="ReviewPage" >
            <a href="#ReviewPage">
              <img src={Reviews} alt="리뷰" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="MapPage" >
            <a href="#MapPage">
              <img src={Placeholder} alt="지도" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="QuestionPage" >
            <a href="#QuestionPage">
              <img src={Headphone} alt="고객센터" />
            </a>
          </li>
        </ul>
      </NavigationStyle>
    </>
  )
}

export default Navigation