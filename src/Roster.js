import React, {Component} from "react";
import Student from "./Student";


export default class Roster extends Component{
    render(){
        const studentRoster = this.props.students.map((student, index)=>{
            return (
              <Student 
              student = {student}
              key = {`student-${index}`}
                
            //   key={`student-${index}`}
            //   name={student.name}
            //   bio={student.bio}
            //   scores={student.scores}
              />
            )
          })
        return(
            <>
            <h1>Student Roster</h1>
            {studentRoster}

            </>
        )
    }
}