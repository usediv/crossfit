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
            <div className="buttonContainer">
                <button className="wrongbtn" onClick={this.drawCard}>Wrong</button>
            </div>
        )
    }
}

export default WrongButton 