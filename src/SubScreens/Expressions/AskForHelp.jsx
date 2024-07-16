import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useSpeech } from "../../ContextAPI/SpeechContext"

const AskForHelp = () => {
    const [help, setHelp] = useState([])
    const { speak } = useSpeech()

    const fetchAskForHelp = async () => {
        try {
            const response = await axios.get(`/expressionsData/askingForHelp.json`)
            setHelp(response.data.AskForHelp)
            console.log("the data is:", response.data.AskForHelp)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAskForHelp()
    }, [])

    const handleSpeak = (phrase) => {
        speak(phrase)
    }
    return (
        <Container>
            <AskForHelpContainer>
                <CardList>
                    {help.map((data, index) => (
                        <Card key={index} onClick={() => handleSpeak(data.phrase)}>
                            <p>{data.phrase}</p>
                        </Card>
                    ))}
                </CardList>
            </AskForHelpContainer>

        </Container>
    )
}

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`

const AskForHelpContainer = styled.div`
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
    flex-direction: column;
    align-items: center;
`;


const Card = styled.div`
  width: 100%;
  height: 50px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;


export default AskForHelp