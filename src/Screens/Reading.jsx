import styled from "styled-components"
import { NavLink } from "react-router-dom"
import juniorReading from '../Assets/SVG/juniorReading.svg'
import midReading from '../Assets/SVG/midReading.svg'
import expectReading from '../Assets/SVG/expectReading.svg'


const Reading = () => {
    return (
        <Container>
            <WelcomeMessage>
                <h1>Story Reading</h1>
                <p>FlashCards helps you with learning words in Alphabetically order. in this section we are offering words categorised in five dificult levels</p>
            </WelcomeMessage>

            <Cards>
                <Card className='flashCards'>
                    <NavLink to='/juniorReading'>
                        <img src={juniorReading} alt='juniorReading' />
                        <p>Junior</p>
                    </NavLink>
                </Card>
                <Card className='vocabulary'>
                    <NavLink to='/midReading'>
                        <img src={midReading} alt='midReading' />
                        <p>Middle</p>
                    </NavLink>
                </Card>
                <Card className='grammar'>
                    <NavLink to='/expectReading'>
                        <img src={expectReading} alt='expectReading' />
                        <p>Expect</p>
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




export default Reading