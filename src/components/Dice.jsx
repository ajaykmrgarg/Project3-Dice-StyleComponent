
import styled from "styled-components"

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 24px;
    }

    .hoverDice {
        cursor: pointer;
    }
`

const Dice = ({currentDice,Roll}) => {

    return (
    <DiceContainer >
        <div 
            className="hoverDice"
            onClick={Roll}
        >
            <img src={`./public/images/dice_${currentDice}.png`} alt="Die"/>
        </div>
        <p>2. Click on die to roll</p>

    </DiceContainer>

  )
}

export default Dice