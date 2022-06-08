import React, {Component} from "react";
import Score from "./Score";


export default class Roster extends Component{
    render(){
        console.log(this.props)
        return(
            <>
            <h2>{this.props.name}</h2>
            <p>{this.props.bio}</p>
            {this.props.scores.map((score, index) =>{return(
                <Score 
                key={`score-${index}`}
                score={score}/>
            )     
            })}
            </>
        )
    }
}