import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from "react"

const ExpectReading = () => {
    const [reading, setReading] = useState([])

    const fetchStories = async () => {
        try {
            const response = await axios.get(`/readingData/expectStories.json`)
            setReading(response.data.expectStories)
            console.log(response.data.expectStories)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchStories()
    }, [])

    return (
        <Container>
            <ReadingContainer>
                <CardList>
                    {reading.map((data, index) => (
                        <Card key={index}>
                            <img src={data.image} alt={data.title} />
                            <div className="storyDetails">
                                <h2>{data.title}</h2>
                                <p>{`${data.content.slice(0, 200)}...`}</p>
                            </div>
                        </Card>
                    ))}
                </CardList>
            </ReadingContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ReadingContainer = styled.div`
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
`

const Card = styled.div`
    width: 100%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    img {
        width: 40%;
        height: 200px;
        margin-bottom: 10px;
    }

    .storyDetails {
        flex: 1;
        padding: 10px;
        h2 {
        margin: 0 0 10px 0;
        font-size: 16px;
        color: #333;
    }

    p {
        margin: 0;
        font-size: 12px;
        color: #333;
    }
    }

  
`

export default ExpectReading
