import {useState} from 'react';



export default function State() {
    const [variable, updateVariable] = useState(0);



    function incrementar() {
      updateVariable(variable + 1);
    }




  return (
    <div className='flex justify-center w-full h-screen '>
        <h1 className='m-36'>Contador: {variable}</h1>
        <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}
