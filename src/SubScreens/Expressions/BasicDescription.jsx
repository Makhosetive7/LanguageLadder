import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSpeech } from "../../ContextAPI/SpeechContext"


const BasicDescription = () => {
    const [description, setDescription] = useState([])
    const { speak } = useSpeech()


    const fetchDescription = async () => {
        try {
            const response = await axios.get(`/expressionsData/basicDescription.json`)
            setDescription(response.data.basicDescription)
            console.log("the data is", response.data.basicDescription)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDescription()
    }, [])

    const handleSpeak = (phrase) => {
        speak(phrase)
    }

    return (
        <Container>
            <BasicDescriptionContainer>
                <CardList>
                    {description.map((data, index) => (
                        <Stack>
                            <OverLay>
                                <Card key={index} onClick={() => handleSpeak(data.phrase)}>
                                    <img src={data.image} alt="data.id" />
                                    <p>{data.phrase}</p>
                                </Card>
                            </OverLay>
                        </Stack>
                    ))}
                </CardList>
            </BasicDescriptionContainer>

        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const BasicDescriptionContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
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
    font-size: 16px;
    font-weight: bold;
    color: #333;
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
export default BasicDescription