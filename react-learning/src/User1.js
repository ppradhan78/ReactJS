function  User1(props)
{
    return(
    <div>
        <h1> User 1 Componets </h1>
        <button onClick={()=>props.data()} >Call data function</button>
    </div>
    )
}
export default User1;