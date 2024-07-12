import React from "react";
import styled from "styled-components";
import Words from "./Words/Words.json";

const FlashCardLevel1 = () => {
    return (
        <Container>
            <WordsContainer>
                {Object.keys(Words).map((letter) => (
                    <div key={letter}>
                        <Letter>{letter}</Letter>
                        <WordList>
                            {Words[letter].map((word, index) => (
                                <p key={index}>{word}</p>
                            ))}
                        </WordList>
                    </div>
                ))}
            </WordsContainer>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WordsContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const WordList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin: 5px 0;
    font-size: 12px;
    font-weight: 500;
  }
`;

const Letter = styled.h2`
border-bottom: 2px solid #008170;
color: #005B41;
font-size: 24px;
font-weight: 900;

`

export default FlashCardLevel1;
