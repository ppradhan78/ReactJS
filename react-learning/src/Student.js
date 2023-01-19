function Student(props){
    return(
        <div>
            <h1>Hello {props.name}, email: {props.email}  course: {props.course} </h1>
        </div>
    )
}
export default Student;