import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSpeech } from "../../ContextAPI/SpeechContext"

const GreetingAndPoliteness = () => {
    const [greetings, setGreetings] = useState([])
    const { speak }= useSpeech()

    const fetchGreetingsAndPoliteness = async () => {
        try {
            const response = await axios.get("/expressionsData/greetingAndPoliteness.json")
            setGreetings(response.data.greetingsAndPoliteness)  // Correctly set the state
            console.log("the data is:", response.data.greetingsAndPoliteness)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGreetingsAndPoliteness()
    }, [])


    const handleSpeak = (phrase) => {
        speak(phrase)
        console.log("reading phrase")
    }


    return (
        <Container>
            <GreetingAndPolitenessContainer>
                <CardList>
                    {greetings.map((data, index) => (
                        <Card key={index} onClick={() => handleSpeak(data.phrase)}>
                            <img src={data.image} alt="data.id" />
                            <p>{data.phrase}</p>
                        </Card>
                    ))}
                </CardList>
            </GreetingAndPolitenessContainer>
        </Container>
    )
}

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`

const GreetingAndPolitenessContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`

const CardList = styled.div`
      display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
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
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

export default GreetingAndPoliteness
