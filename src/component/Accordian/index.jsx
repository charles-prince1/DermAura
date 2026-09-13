import React from "react";
import data from "./data";
import { useState } from "react";
import {
  FaAccessibleIcon,
  FaAngleLeft,
  FaDAndD,
  FaExpand,
  FaGreaterThan,
  FaSadCry,
  FaUpload,
  FaUps,
  FaCaretDown,
  FaCalculator,
} from "react-icons/fa";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([])
  const [toggel, setToggle] =  useState(false)

  const handleSingleSelection = (item) => {
    setSelected(item === selected ? null : item)
   }


  const handleMultiple = (currentIndex) => {
    const cpyMultiple = [... multiple]
    const findMultipleIndex  = cpyMultiple.indexOf(currentIndex)
    // console.log(findMultipleIndex);


    if(findMultipleIndex === -1){cpyMultiple.push(currentIndex)} 
      else {cpyMultiple.splice(findMultipleIndex, 1)}

      
    setMultiple(cpyMultiple)
  }
  console.log(selected, multiple);
  
  
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center align-center">
      {/* } <section className="mx-auto flex bg-green-700 px-4 py-4 rounded-xl space-y-4  flex-col gap-6">
                {data && data.length > 0 ? data.map((dataItems)=>(
                    <div className="w-full space-y-4 flex cursor-pointer">
                        <p className="p-2">{dataItems.question}</p>
                        <span><FaCaretDown/></span>
                    </div>
                )):<div>No data found</div>}
            </section> */}

      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-700 px-5 py-10 rounded-xl text-white ">
    <div className="mx-auto flex flex-col items-center ">
        <button className=" w-70  border border-white py-2 cursor-pointer active:text-[18px] px-2 rounded-full" onClick={()=>setToggle(prev => !prev)}> Enable multi-selection</button>
       <div>
         {data.map((item) => {
          return (
            <Question selected={selected} onClick={
                 toggel
                    ? () => handleMultiple(item.id)
                    : () => handleSingleSelection(item.id)
                } question={item.question} answer={toggel
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="acc-content ">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="acc-content ">{item.answer}</div>
                  )}/>
          )
         })}

         
       </div>
    </div>
      </div>
         
    </div>
  );}


const Question = ({onClick, question, answer,selected}) => {
   
  const display = () =>{
  if(toggel){
    if(multiple.indexOf(index) !== -1){
     return <p>{data.answer}</p>
     
    }
  // } else{
  //   if(selected === data.id){
  //     return <p>{data.answer}</p>
  //   }
  }
  }
  return (
    <div onClick={onClick}>
      <div className="flex gap-5 items-center mt-5 hover:bg-white/10 cursor-pointer px-3 rounded-lg">
        <p className="text-xl">{question}</p>
        <FaCaretDown className={(selected === data.id) ? '' : '-rotate-90'}/>
      </div>
      <div className={`bg-white/10 px-5 rounded-lg cursor-default ${(selected === data.id) ? 'h-30 mt-5' : 'opacity-0 h-0 pointer-events-none mt-0'}`}>
  {answer}
      </div>
   
    </div>
  );
};
export default Accordian;
