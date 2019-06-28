
import React, {Component} from 'react';
import './WrongButton.css';

class WrongButton extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }
    render(props){
        return(
                <button className="wrongbtn" onClick={this.drawCard}>&#215;</button>
        )
    }
}

export default WrongButton