import React from 'react'

export default function Filter(props) {
  let filterData=props.filterData
  let category=props.category
  let setCategory=props.setCategory
  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-3 gap-y-4 mx-auto py-4 justify-center border-'>
        {filterData.map((data)=>{
          return(  <button key={data.id} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 transition-all duration-300  hover:bg-slate-400 "
         onClick={()=>{filterHandler(data.title)}}>
                {data.title}
            </button>
          )
        })}
    </div>
  )
}
