import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('bob');
    const [count,setCount]=useState(0);

    const handleNameChange=() => {
    const names=['bob', 'samit', 'susan', 'john', 'michael'];
    const int=Math.floor(Math.random()*2);
    setName(names[int]);
}

const handleClick=()=>{
    setCount(count+1);
    console.log(count);
}
const handleClick2=()=>{
    console.log(count);
}

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}> Change name</button>
            <button onClick={handleClick}> Click This</button>
            <button onClick={handleClick2}> Show Count</button>
        </main>
    )
}
export default Content
