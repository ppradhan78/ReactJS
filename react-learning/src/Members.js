function  Members(props)
{
    return(
    <div>
        <h1>Members Componets </h1>
        <button onClick={()=>props.data()} >Call data function</button>
    </div>
    )
}
export default Members;