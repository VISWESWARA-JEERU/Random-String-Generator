import { useState } from 'react';
import React from 'react';

function App() {
   
const [length, setLength] = useState(0);
const [randomString, setRandomString] = useState('');
// console.log(length);

const generateRandomString = () => { // function to generate random string
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-={}[]|;:"<>,.?/';
  let result = '';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) { // loop to create string of desired length
    result += characters.charAt(Math.floor(Math.random() * charactersLength)); // append random character to result
  }
  setRandomString(result);
}
  return ( // main return
    <div className='bg-blue-500  w-screen h-screen flex justify-center items-center'>
      <div className='bg-blue-200 h-40 w-100 rounded-lg flex  justify-center items-center flex-col gap-y-5'>
        <h3 className='font-semibold text-white'>Random String Generator </h3> 
        <div className='flex justify-center items-center gap-x-6 '>
          <input type="number" placeholder ="Enter a number" min="1" className='bg-white rounded-lg h-9 outline-none px-2 text-center'onChange={(e)=>setLength(e.target.value)} />
          <input type="number" min="1" className='bg-white rounded-lg h-9 outline-none px-2 text-center'onChange={(e)=>setLength(e.target.value)} />
          <button className='p-1.5 bg-blue-500 text-white rounded-lg'onClick={generateRandomString}>Click</button>
        </div>
        <input type="text" className='bg-white rounded-lg h-9 outline-none px-2 text-center w-68' readOnly value={randomString} />
      </div>
      </div>
        
  )
}

export default App;
