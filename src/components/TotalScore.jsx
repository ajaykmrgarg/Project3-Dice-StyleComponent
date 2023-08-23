import styled  from "styled-components"

const ScoreContainer = styled.div `
    max-width: 200px;
    text-align: center;
    //justify-content: space-between;
    h1 {
      font-size: 100px;
  //    background-color: yellow
    }
  
    p {
      font-size: 24px;
      }

  `
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1> {score} </h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore