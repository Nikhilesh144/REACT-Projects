import React, { useEffect } from "react";
import Die from "./Die";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


function generateNew(){
const num=Math.ceil(Math.random()*6);
return  {value:num,isHeld:false,id: nanoid()};
}
export default function Game(){

    function generate(){
        const numArr=[];
        for(let i=0;i<10;i++){
          numArr.push(generateNew())
        }
        return numArr
    }


    const [Arr,setArr]=React.useState ( generate() );

    function handleClick(){
        if(!Tenzies){
        setArr( old=>old.map(die=>{
            return die.isHeld?die:generateNew()
        }))
    }
    else{
        setTenzies(false);
        setArr(generate())
    }
    }
    function hold(id){
        setArr(prev=>prev.map(die =>{
            return die.id===id?{...die,isHeld:!die.isHeld}:die
        }))

    }
  
     const elements=Arr.map((item)=>{
        return(
          <Die key={item.id}  hold={()=>hold(item.id)}   value={item.value} isHeld={item.isHeld}/>
         )
     })

     const[Tenzies,setTenzies]=React.useState(false);
     useEffect(()=>{
        const allHeld=Arr.every(die=>die.isHeld);
        const first=Arr[0].value;
        const sameNum=Arr.every(die=>die.value===first);
        if(allHeld && sameNum){
            setTenzies(true);
           
          
        }
     
     },[Arr])

  

    return(
        <>
            { Tenzies&&<Confetti   />}
  
        <div className="Box">
            <div className="Board">
                <div className="Game">

                    <h1 className="Title">Tenzies</h1>
                    <p className="Text"> Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                      <div className="container">
                
                        {elements}
                        </div> 
                        <button className="button" onClick={handleClick}> {Tenzies?"Reset":"Roll"} </button>
                </div>
                

            </div>

        </div>
        </>
    )
}