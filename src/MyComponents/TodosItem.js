import React from 'react'

export const TodosItem = ({todo,OnDelete}) => {
  return (
    <div className='py-3'>
      <p><u><strong>{todo.title}</strong></u><br/>
      <em>{todo.dec}</em></p>
     <button className="btn btn-sm btn-danger" onClick={()=>{OnDelete(todo)}}>Delete</button>
     </div>
  )
}
//* OnDelete is called inside arrow fun,because when we call function directly (OnDelete(todo)) it call is self during rendring only.