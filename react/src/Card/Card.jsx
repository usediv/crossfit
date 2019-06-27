import React from 'react'; 
import './Card.css'; 

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="lettercount">{props.word.length} letters</div>
                <div className="clue">{props.clue}</div>
            </div>
            <div className="back">
                <div className="word">{props.word}</div>
                <div className="explanation">{props.explanation}</div>
            </div>
        </div>
    </div>
)

export default Card 