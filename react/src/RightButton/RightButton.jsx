import React, {Component} from 'react';
import './RightButton.css';

class RightButton extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }
    render(props){
        return(
                <button className="rightbtn" onClick={this.drawCard}>&#10003;</button>
        )
    }
}

export default RightButton
