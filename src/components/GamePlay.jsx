import  styled  from "styled-components"
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Dice from "./Dice";
import { useState } from "react"


const MainContainer = styled.main `
    //display: flex;
    //gap: 24px;
    .top_section{
      display: flex;
      justify-content: space-around;
      align-items: end;
    }
`;


const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState ("");

  const generateRandom = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min)
  }

const Roll = () => {
    
    if (!selectedNumber) {
      setError("Select number first") ;

      return; // if number is not selected, don't change score
    }

    setError("");

    const randomNumber = generateRandom(1,7)
    setCurrentDice ((prev) => randomNumber )

    

    if (selectedNumber==randomNumber){
      setScore((prev) => prev + randomNumber)
    }else{
      setScore((prev) => prev -2)
    }

    setSelectedNumber(undefined);

  }



  return (
    
      <MainContainer>

        <div className="top_section">    
            <TotalScore score={score}/>

            <NumberSelector 
              error={error}
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />      
    
        </div>

        <Dice 
          currentDice={currentDice}
          Roll={Roll}
          />

      </MainContainer>
  );
};

export default GamePlay ;

/*
*/