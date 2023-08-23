import { styled } from "styled-components"

const Container = styled.div `
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

`;

const Title = styled.text `
    color: #000;
    font-family: Poppins;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width:  528px;
    white-space: nowrap;
`

const Button = styled.button`
    display: flex;
    width: 220px;
    padding: 10px 18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-size: medium;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    &:hover{
      background-color      : white;
      color: black;
      border: 1px solid black;
      transition: 0.3s background ease-in;
    }
`;

const StartGame = ({ toggle }) => {
  return (
    
    <Container>
        <div>
            <img src="./Project3-Dice-StyleComponent/public/images/dices.png" />
        </div>

        <div>

            <Title>DICE GAME</Title> 

            <Button onClick={toggle}>Play Now</Button>

        </div>

    </Container>
    )
}

export default StartGame