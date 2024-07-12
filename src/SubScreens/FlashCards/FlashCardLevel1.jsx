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
              {Words[letter].map((item, index) => (
                <Card key={index}>
                  <img src={item.image} alt={item.word} />
                  <p>{item.word}</p>
                </Card>
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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;


`;

const Letter = styled.h2`
border-bottom: 2px solid #008170;
color: #005B41;
font-size: 24px;
font-weight: 900;

`

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
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

export default FlashCardLevel1;
