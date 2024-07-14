import styled from "styled-components"
import { NavLink } from "react-router-dom"
import greeting from '../Assets/SVG/greeting.svg'
import routine from '../Assets/SVG/routine.svg'
import basicDescrition from '../Assets/SVG/basic_description.svg'
import ask from '../Assets/SVG/ask.svg'


const Expressions = () => {
    return (
        <Container>
            <WelcomeMessage>
                <h1>Welcome to Expressions</h1>
                <p>Discover useful expressions to enhance your English skills. Practice phrases categorized by their purpose and improve your fluency!</p>
            </WelcomeMessage>


            <Cards>
                <Card className='socialInteraction'>
                    <NavLink to='/socialInteraction'>
                        <img src={greeting} alt='greeting' />
                        <p>Greetings and Politeness</p>
                    </NavLink>
                </Card>
                <Card className='dailyRoutine'>
                    <NavLink to='/dailyRoutine'>
                        <img src={routine} alt='routine' />
                        <p>Daily Routines</p>
                    </NavLink>
                </Card>
                <Card className='BasicDescription'>
                    <NavLink to='/basicDescription'>
                        <img src={basicDescrition} alt='basicDescription' />
                        <p>Basic Descriptions</p>
                    </NavLink>
                </Card>
                <Card className='askingHelp'>
                    <NavLink to='/askingHelp'>
                        <img src={ask} alt='ask' />
                        <p>Asking for Help</p>
                    </NavLink>
                </Card>

            </Cards>

        </Container >
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const WelcomeMessage = styled.div`
    text-align: center;
    margin-bottom: 20px;

    p{
        font-size: 12px;
        color: #008170;  
    }

    h1{
        font-size: 35px;
    font-weight: bold;
    color: #005B41;
    margin-bottom: 10px;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    max-width: 1000px;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
    width: 200px;
    height: 200px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }

    p {
        margin: 0;
        font-size: 12px;
        font-weight: bold;
        color: #435585;
    }
    a{
        text-decoration: none;
        color: #435585;
    }
`;




export default Expressions