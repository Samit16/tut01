const Content = () => {
    const handleNameChange=() => {
    const names=['bob', 'samit '];
    const int=Math.floor(Math.random()*2);
    return names[int];
}

const handleClick=()=>{
    console.log('You clicked')
}
const handleClick2=(name)=>{
    console.log(`${name} was clicked`)
}
const handleClick3=(e)=>{
    console.log(e.target.innerText)
}

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}> Click This</button>
            <button onClick={() =>{handleClick2('Samit')}}> Click This</button>
            <button onClick={(e) =>handleClick(e)}> Click This</button>
        </main>
    )
}
export default Content
