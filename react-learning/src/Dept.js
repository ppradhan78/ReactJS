function  Dept(prop)
{
   let data="pradhan"
    return(
    <div>
        <span>Dept Component</span>
        <button onClick={()=>prop.pdata(data)}>Click Me</button>
    </div>
    )
}
export default Dept;