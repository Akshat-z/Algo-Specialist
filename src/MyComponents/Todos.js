import React from 'react'
import {TodosItem} from './TodosItem';

export const Todos = ({todos,OnDelete}) => {
  return (
    <div className='container'>
      <h3 className="text-center my-3">Algorithm</h3>
      {todos.length===0? " Add Todos":todos.map((todo)=>{
      return  <TodosItem todo={todo} key={todo.s} OnDelete={OnDelete}/>
        })
      }
    </div>
  )
}
