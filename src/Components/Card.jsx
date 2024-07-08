import React from 'react'
import { FcLike ,FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';


const Card = (props) => {
    let course=props.course;
    let liked = props.liked;
    let setLiked=props.setLiked;

    function clickHandler(){
      //already liked then after clicking it will removed liked
         if(liked.includes(course.id)){
          setLiked( (prev)=> prev.filter((cid)=>(cid !==course.id)))
          toast.warning("liked removed")
         }
else{
        //phle se liked nahi hai aab like krna hia aur insert krna hai ye course like course mein
      
        if(liked.length ===0){
          setLiked([course.id])
        }
        else{
          setLiked((prev)=> [...prev,course.id])
        }
      toast.success("Liked Successfully")
}

    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt='pic' />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-8px] grid place-items-center'>
        <button onClick={clickHandler}>
            {
              liked.includes(course.id) ? <FcLike  fontSize="1.7rem" /> : <FcLikePlaceholder  fontSize="1.7rem"/>

            }
          </button>
      </div>
      </div>
      
      <div className='p-4 text-white'>
        <p className='font-bold text-s'>{course.title}</p>
        <p className='mt-2'>{course.description}</p>
      </div>
    </div>
  )
}

export default Card
