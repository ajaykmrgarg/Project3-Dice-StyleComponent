import styled from "styled-components"

const Box = styled.div` //six boxes at top
    display: flex;
    width: 72px;
    height: 42px;
    padding: 18px 0px;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    background: #FFF;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white" )};
    color: ${(props) => (props.isSelected ? "white" : "black" )};
`;


const NumberSelector = ({error, selectedNumber, setSelectedNumber}) => {
    const arrayNumber = [1,2,3,4,5,6];

    const NumberSelectorContainer =styled.div`
        display: flex;
        flex-direction: column;
        align-items: end;

        .flex {
            display: flex;
            gap: 24px
        }
        p {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
        }
        .error {
            color: red;
        }
        `

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>

            <div className="flex">
                {arrayNumber.map((value,i) => (
                    <Box 
                        isSelected={value===selectedNumber}
                        key={i} 
                        onClick={() => setSelectedNumber(value)}
                        >
                        {value}
                    </Box>
                )
                )
                }
            </div>
            <p>1. Select Number</p>
          
        </NumberSelectorContainer>
    )
}

export default NumberSelector
