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
                <Stack>
                    <OverLay>
                        <Card className='socialInteraction'>
                            <NavLink to='/socialInteraction'>
                                <img src={greeting} alt='greeting' />
                                <p>Greetings and Politeness</p>
                            </NavLink>
                        </Card>
                    </OverLay>
                </Stack>

                <Stack>
                    <OverLay>
                        <Card className='dailyRoutine'>
                            <NavLink to='/dailyRoutine'>
                                <img src={routine} alt='routine' />
                                <p>Daily Routines</p>
                            </NavLink>
                        </Card>
                    </OverLay>
                </Stack>

                <Stack>
                    <OverLay>
                        <Card className='BasicDescription'>
                            <NavLink to='/basicDescription'>
                                <img src={basicDescrition} alt='basicDescription' />
                                <p>Basic Descriptions</p>
                            </NavLink>
                        </Card>
                    </OverLay>
                </Stack>
                <Stack>
                    <OverLay>
                        <Card className='askingHelp'>
                            <NavLink to='/askingHelp'>
                                <img src={ask} alt='ask' />
                                <p>Asking for Help</p>
                            </NavLink>
                        </Card>
                    </OverLay>
                </Stack>
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
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
   width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
const Stack = styled.div`
	transition: .25s ease;
    margin: 2rem;
	&:hover {			
		transform: rotate(5deg);
		.card:before {
			transform: translate(-2%) rotate(-4deg);
		}	
		.card:after {
			transform: translate(2%) rotate(4deg);
		}
	}
`
const OverLay = styled.div`
	aspect-ratio: 3 / 2;
	border: 1px solid #005B41;
	background-color: #FFF;
	position: relative;
	transition: .15s ease;
	cursor: pointer;
	padding: 5% 5% 15% 5%;
	&:before, &:after {
		content: "";
		display: block;
		position: absolute;
		height: 100%;
		width: 100%;
		border: 1px solid #435585;
		background-color: #FFF;
		transform-origin: center center;
		z-index: -1;
		transition: .15s ease;
		top: 0;
		left: 0;
	}
	
	&:before {
		transform: translate(-2%) rotate(-10deg);
	}
	
	&:after {
		transform: translate(2%) rotate(6deg);
	}
`




export default Expressions