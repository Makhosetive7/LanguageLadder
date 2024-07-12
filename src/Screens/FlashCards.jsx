import styled from "styled-components"
import { NavLink } from "react-router-dom"
import flashcards1 from '../Assets/SVG/flashcards1.svg'
import flashcards2 from '../Assets/SVG/flashcards2.svg'
import flashcards3 from '../Assets/SVG/flashcards3.svg'
import flashcards4 from '../Assets/SVG/flashcards4.svg'
import flashcards5 from '../Assets/SVG/flashcards5.svg'

const Flashcards = () => {
    return (
        <Container>
            <WelcomeMessage>
                <h1>FlashCards</h1>
                <p>FlashCards helps you with learning words in Alphabetically order. in this section we are offering words categorised in five dificult levels</p>
            </WelcomeMessage>

            <Cards>
                <Card className='flashCards'>
                    <NavLink to='/flashCardLevel1'>
                        <img src={flashcards1} alt='flashcards' />
                        <p>Level 1</p>
                    </NavLink>
                </Card>
                <Card className='vocabulary'>
                    <NavLink to='vocabulary'>
                        <img src={flashcards2} alt='vocabulary' />
                        <p>Level 2</p>
                    </NavLink>
                </Card>
                <Card className='grammar'>
                    <NavLink to='/grammar'>
                        <img src={flashcards3} alt='grammar' />
                        <p>Level 3</p>
                    </NavLink>
                </Card>
                <Card className='pronunciation'>
                    <NavLink to='pronunciation'>
                        <img src={flashcards4} alt='pronunciation' />
                        <p>Level 4</p>
                    </NavLink>
                </Card>
                <Card className='reading'>
                    <NavLink to='reading'>
                        <img src={flashcards5} alt='reading' />
                        <p>Level 5</p>
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




export default Flashcards