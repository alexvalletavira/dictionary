import React from 'react'
import './Header.css'
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import categories from "../data/category"


const Header = ({category, setCategory, word, setWord, setPronounciation, setPronounciationURL, setFoundWord, setMeanings}) => {



    const handleChange = (language) => {
        setCategory(language);
        setWord("");
        setPronounciation("");
        setPronounciationURL("");
        setFoundWord("");
        setMeanings([])
    }

    const handleChange2 = (word) => {

        setWord(word);

        if(word === ""){
            setPronounciation("");
            setPronounciationURL("");
            setFoundWord("");
            setMeanings([])
            setWord("");
        }


    }

    return(
        <div className="header">
            <span className="title">{word ?  word : "Word Hunt"}</span>
            <div className="inputs" >
                    <TextField
                        className= "search"
                        label="Select Word"
                        value={word}
                        onChange={(e)=> handleChange2(e.target.value)}
                    />

                <TextField
                        select
                        className= "select"
                        label="Language"
                            value={category}
                            onChange={(e)=> handleChange(e.target.value)}

                    >
                    {categories.map(
                        (option)=> (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>))}
                </TextField>

            </div>
        </div>
    );
}

export default Header
