import MainSection from './pages/Main'
import HealthKeyWordSection from './pages/HealthKeyWord'
import TotalStrengthSection from './pages/TotalStrength'
import ReviewSection from './pages/Review'
import QuestionSection from './pages/Question'

const TotalPage = (fullpageApi) => {
  return (
    <>
      <MainSection content="Slide down!" />
      <HealthKeyWordSection content="HealthKeyWordSection" />
      <TotalStrengthSection content="TotalStrengthSection" />
      <ReviewSection content="ReviewSection" />
      <QuestionSection content="QuestionSection" />
    </>
  )
}

export default TotalPage