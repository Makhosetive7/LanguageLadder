import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from "react"
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { useModal } from '../../ContextAPI/ModalsContext';
import Modal from "./Modal";

const ExpectReading = () => {
    const [reading, setReading] = useState([])
    const { openModal, setModalContent } = useModal();

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

    const handleOpenModal = (data) => {
        setModalContent(data);
        openModal();
    };

    return (
        <Container>
            <ReadingContainer>
                <CardList>
                    {reading.map((data, index) => (
                        <Card key={index}>
                            <img src={data.image} alt={data.title} />
                            <div className="storyDetails">
                                <h2>{data.title}</h2>
                                <p>{`${data.content.slice(0, 400)}...`}</p>
                                <section>
                                    <button onClick={() => handleOpenModal(data)}><MdOutlineScreenshotMonitor /></button>
                                </section>
                            </div>
                        </Card>
                    ))}
                </CardList>
            </ReadingContainer>
            <Modal />
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
    margin-bottom: 16px;
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
        margin: 10px;
    }

    .storyDetails {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
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
    section{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        padding: 16px;
        button{
            display: flex;
            align-items: center;
            border: none;
            font-size: 20px;
            color: #555;
            transition: color 0.3s;

            &:hover {
                color: #000;
            }
        }

    }
`

export default ExpectReading
