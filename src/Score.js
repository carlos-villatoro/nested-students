import React,{Component} from "react";

export default class Score extends Component{
    render(){
        // console.log(this.props)
        return(
            
            <>
            <p>Date: {this.props.score.date}</p>
            <p>Score: {this.props.score.score}</p>
            </>
        )
    }
}