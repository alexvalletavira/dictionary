import React from 'react'
import './Definitions.css'

const Definitions = ({word, meanings, category, pronounciation, pronounciationURL, foundWord}) => {

    return(
        <div className="meanings">

            {word !== "" &&(

                <div>
                    {foundWord}
                </div>
            )}

            {pronounciationURL !== "" && category === "en" && word !== "" &&(

                <div>
                    {pronounciation}
                </div>
            )}
                {pronounciationURL !== "" && category === "en" && word !== "" &&(
                    <div>
                        <audio className="audio" src={pronounciationURL} controls>

                        </audio>
                    </div>
                )}
            <br/>

            { word=== "" ? (
                <span className='subTitle'>Start by typing a word in search </span>
            )
            : (
                meanings.map((mean, num)=>(
                        <React.Fragment key={"frag" + mean + num}>
                            <div key={mean+num}>
                                {mean.partOfSpeech}
                            </div>
                                {mean.definitions.map ((mean2, num2) => (
                                    <div key={mean2+num2}>
                                        { (num2+1) + ". " + mean2.definition}
                                    </div>
                                ))}
                            <br key={num+mean}/>
                        </React.Fragment>
                    )
                    )
                )
            }

        </div>
    )
}

export default Definitions
