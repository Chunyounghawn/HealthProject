import MainSection from './pages/Main'
import StrengthSection from './pages/Strength'
import ReviewSection from './pages/Review'
import QuestionSection from './pages/Question'
import MapSection from './pages/Map'

const TotalPage = (fullpageApi) => {
  return (
    <>
      <MainSection content="Slide down!" />
      <StrengthSection content="StrengthSection" />
      <ReviewSection content="ReviewSection" />
      <MapSection content="MapSection" />
      <QuestionSection content="QuestionSection" />
    </>
  )
}

export default TotalPage