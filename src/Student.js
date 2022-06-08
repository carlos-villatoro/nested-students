import React, {Component} from "react";
import Score from "./Score";

export default class Student extends Component{
    render(){
        console.log(this.props.student)
        return(
            <>
            <h2>{this.props.student.name}</h2>
            <p>{this.props.student.bio}</p>
            {this.props.student.scores.map((score, index) =>{return(
                <Score 
                key={`score-${index}`}
                score={score}/>
            )     
            })}
            </>

        )
    }
}