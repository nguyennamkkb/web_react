import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../plugin/store/actions/counter";
import { setTitle } from "../../../plugin/store/actions/infoApp";


const BioMid = () => {


  const dispatch = useDispatch();
  return (
    <div className="container mx-auto   rounded-b-lg  text-white  ">

      <div className="w-11/12 text-center h-14	bg-purple-600  m-auto mt-4 flex rounded-lg shadow-lg shadow-black-500/90 ">
        <img
          src="/image/avt.jpg"
          alt="avatar"
          className="w-10 h-10 m-2 rounded-lg"
        />
        <div className="m-auto ml-1">
          <a href="http://fb.com" target="_blank" rel="noopener noreferrer">sdasdasdasdas asd asd asd asd as das dasda</a>
        </div>
      </div>
      <div className="w-11/12 text-center h-14	bg-purple-600  m-auto  mt-4	flex rounded-lg  shadow-lg shadow-black-500/90">
        <img
          src="/image/avt.jpg"
          alt="avatar"
          className="w-10 h-10 m-2 rounded-lg"
        />
        <div className="m-auto ml-1">
          <a href="http://fb.com" target="_blank" rel="noopener noreferrer">sdasdasdasdas asd asd asd asd as das dasda</a>
        </div>
      </div>
      <div>
        
        <button onClick={() => dispatch(increment(3))}>Increment</button>
        <button onClick={() => dispatch(decrement(4))}>Decrement</button>
        <button onClick={() => dispatch(setTitle({title:"Nasdasd",theme:"2"}))}>setTitle</button>
      </div>
    </div>
  )
}

export default BioMid
