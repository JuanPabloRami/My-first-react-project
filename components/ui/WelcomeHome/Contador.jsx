import React, { useEffect } from 'react'
import { useState } from 'react';

export const Contador = () => {

  //

  const [counter,setCounter] = useState(0);
  let [text,setText] = useState("");

  // imprimir un arreglo con objetos de nombres de gente
  const people = [
  {nombre:"juanpa"},
  {nombre:"lopez"},
  {nombre:"lu"},
  {nombre:"edwin"}
  ]
  
  
  const [names,setNames] = useState([]);
  const HandleNames=() => setNames(people);

// titulo que cambia de color cuando el contador sea 10 o mayor
  const [styleTitle,setStyleTitle] = useState("titulo1");


  useEffect(()=>{
    counter >=10
    ?setStyleTitle("titulo1")
    :setStyleTitle("titulo2")
  },[counter])

  // seccion de tweets
  // array donde se guardaran los tweets
  const [arrayTweets,SetArrayTweet] = useState([])
  const [text2,SetText2] = useState("");
  

  

  function PostTweet(){
    SetArrayTweet([...arrayTweets,text2]);
    console.log(arrayTweets);
  }
  // fin seccion de tweets

  // seccion del reloj


  const [clock,setClock] = useState();

  setInterval(()=>{
    const currentTime = new Date();
    setClock(currentTime.toLocaleTimeString())
  },1000);


  return (
    <div className='contadorDiv'>
        <h1>Contador React</h1>
        <h1 className={styleTitle}>{counter}</h1>
        
        <div>
          <button className='btn-options'  onClick={()=>setCounter(counter+1)}>sumar</button>
          <button className='btn-options' onClick={()=>setCounter(counter-1)}>restar</button>
          <button className='btn-options' onClick={()=>setCounter(0)}>RESET</button>
        </div>
        <h1>texto en tiempo real</h1>
        <input  type="text" placeholder='ingrese texto' onChange={(event)=>setText(event.target.value)} />
        <p>{text}</p>
        
        <button className='btn-options' onClick={HandleNames}>Mostrar un arreglito de nombres</button>
        <ul>
        {names.map((nameP,key)=><li key={key}>{nameP.nombre}</li>)}
        </ul>
      <div className="tweetContainer">
        <h1>twitea tus cosas</h1>
        <textarea id="InputMessage" cols="29" rows="10" maxLength="200" onChange={(event)=>SetText2(event.target.value)}></textarea><br/>
        <button className='btn-options' id = "ButtonMessage" type="submit" onClick={PostTweet}>Publica tu comentario</button>
        <div className="messageContainer">
            {arrayTweets.map((element,key) => <p key={key}>{element}</p>)}
        </div>
        <h1>{clock}</h1>
      </div>
    </div>
    
  )
}
