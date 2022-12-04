import React, { useState } from 'react'

export const AddTodos = ({addTodos}) => {
  const [title,setTitle]=useState("");
  const [dec,setDec]=useState("");
  const submit=(e)=>{
    e.preventDefault(); {/* by appling this page will not relode */}
    if(title.length===0 || dec.length===0) {
      console.log("Not valid data");
    }
    else {
      addTodos(title,dec);
    }
  }
  return (
    <div className="container py-3">
      <hr className='bg-danger border-2 border-top border-danger'/>
      <h4 className='text-center'>Add Algo</h4>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Algorithm Name</label>
    {/*! e stant for event */}
    <input type="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title"/> 
  </div>
  <div className="mb-3">
    <label htmlFor="Todo Dec" className="form-label">Algorithm Descreption</label>
    <textarea className="form-control" value={dec} onChange={(e)=>{setDec(e.target.value)}} id="Todo Dec"  rows="7"></textarea>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Algo</button>
</form>
</div>
  )
}
