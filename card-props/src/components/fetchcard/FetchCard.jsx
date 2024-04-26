import React from 'react'


function FetchCard({information}) {
    function handleDelete(id) {
        information.filter((x)=> x.id1==id)
        
    }
  return (
    <div className='container'>
         <div className='card_box' key={information.id}  style={{ color: information.discontinued ? "green" : "red" }}>
            <h3>{information.name}</h3>
            <p>{`${information.unitPrice} $`}</p>
            <button onClick={()=>handleDelete(x.id)}>Delete</button>
          </div>
    </div>
  )
}

export default FetchCard