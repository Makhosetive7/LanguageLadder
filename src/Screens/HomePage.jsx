import React from 'react';
import styled from 'styled-components';
import blackboard from "../Assets/SVG/blackboard.svg";
import bookAndPen from '../Assets/SVG/bookAndPen.svg';
import conversation from '../Assets/SVG/conversation.svg';
import reading from '../Assets/SVG/reading.svg';
import vocabulary from '../Assets/SVG/vocabulary.svg';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container>
            <WelcomeMessage>
                <Heading>Elevate your English with LanguageLadder!</Heading>
                <SubHeading>We offer comprehensive, interactive learning with structured lessons, engaging exercises, and community support for an effective journey.</SubHeading>
            </WelcomeMessage>
            <Cards>
                <Card className='flashCards'>
                    <NavLink to='/flashCards'>
                        <img src={blackboard} alt='flashcards' />
                        <p>Flashcards</p>
                    </NavLink>
                </Card>
                <Card className='vocabulary'>
                    <NavLink to='vocabulary'>
                        <img src={vocabulary} alt='vocabulary' />
                        <p>Vocabulary</p>
                    </NavLink>
                </Card>
                <Card className='grammar'>
                    <NavLink to='/grammar'>
                        <img src={conversation} alt='grammar' />
                        <p>Grammar</p>
                    </NavLink>
                </Card>
                <Card className='pronunciation'>
                    <NavLink to='pronunciation'>
                        <img src={reading} alt='pronunciation' />
                        <p>Pronunciation</p>
                    </NavLink>
                </Card>
                <Card className='reading'>
                    <NavLink to='reading'>
                        <img src={bookAndPen} alt='reading' />
                        <p>Reading</p>
                    </NavLink>
                </Card>
            </Cards>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const WelcomeMessage = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

const Heading = styled.h1`
    font-size: 35px;
    font-weight: bold;
    color: #005B41;
    margin-bottom: 10px;
`;

const SubHeading = styled.p`
    font-size: 12px;
    color: #008170;
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

export default HomePage;
