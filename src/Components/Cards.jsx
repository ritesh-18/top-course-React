import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {
    let courses=props.courses;
    let category =props.category
    const [liked , setLiked]=useState([]);
   
    function getCourses(){
        if(category==="All"){
          let allcourses=[]
        Object.values(courses).forEach((array)=>{
            array.forEach((course)=>{
                allcourses.push(course)
            })
          })
          return allcourses
        }
         else{
          return courses[category]
         }
    }
  
    

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {getCourses().map((course)=>{
        
            return(<Card course={course} key={course.id} liked={liked} setLiked={setLiked}></Card>)
        
    })
    }
    </div>
  )
}

export default Cards
