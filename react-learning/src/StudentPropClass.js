import React, {useState,Component} from 'react';
export default  class StudentPropClass extends Component
{
    render(){
      return (<div> Student Prop Class@ 
          <h3>Name:   {this.props.name}</h3>
           </div>)
    }
}