import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Definitions from "./components/Definitions/Definitions";
import {ThemeProvider} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createTheme";

function App() {

    const[word, setWord] = useState("");
    const[meanings, setMeanings] = useState([]);
    const[pronounciation, setPronounciation] = useState([]);
    const[pronounciationURL, setPronounciationURL] = useState([]);
    const[category, setCategory] = useState(["en"]);
    const[foundWord, setFoundWord] = useState([]);

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    const dictionaryApi=async()=>{
        try{
            if(word !== "") {
                const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
                setMeanings(data.data[0].meanings)
                setPronounciation(data.data[0].phonetics[0].text)
                setPronounciationURL(data.data[0].phonetics[0].audio)
                setFoundWord(data.data[0].word)
            }

        }catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        dictionaryApi();
        // eslint-disable-next-line
    }, [word, category]);

    return (
        <div className="App" style={{height: "100vh", backgroundColor: '#282c34', color: 'white'}}>
            <Container maxWidth="md" styles={{display: "flex", flexDirection: "column", height: "100vh"}}>
                <ThemeProvider theme={darkTheme}>
                    <Header category={category} setCategory={setCategory} word={word} setWord={setWord} setPronounciation={setPronounciation} setPronounciationURL={setPronounciationURL} setFoundWord={setFoundWord} setMeanings={setMeanings}/>
                    {meanings && (
                        <Definitions word={word} meanings={meanings} category={category} pronounciation={pronounciation} pronounciationURL={pronounciationURL} foundWord={foundWord}/>
                    )}
                </ThemeProvider>
            </Container>
        </div>
    );
}

export default App;
