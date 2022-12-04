//! rafc
import React from 'react'

export const Footer = () => {
  let footerStyle ={
    // position :"",
    // margin-top:""
    top: "100vh",
    width: "100%",
  }
  return (
    <footer className="bg-black text-center text-light mt-1 py-3" style={footerStyle}>
       Copyright &copy; Akshat Ag
    </footer>
    // <footer className='bg-black'>Copyright &copy; Marvel</footer>
  )
}
