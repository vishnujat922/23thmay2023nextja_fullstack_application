import React from 'react'
import { useState , useEffect } from 'react';

const Student = () => {
  //2.1 hooks Area
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    // po.then.then.catch.finally()
    fetch('/api/students',{})
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data.students);
      setStudents(data.students);
    })
    .catch((e)=>{

    })
  },[])
  //2.2 Function Defintion Area

  //2.3 Return Statement
  return (
    <>
      <h3>Student Page</h3>
      <ul>
          {
            students.length > 0 && students.map((cv,idx,arr)=>{
              return <li key={idx}>{cv.name}</li>
            })
          }
      </ul>
      
    </>
  )
}

export default Student