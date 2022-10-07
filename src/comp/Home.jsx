import React, { useState } from 'react'
import Childco from './Childco';

const Home = () => {
  const [state, setState] = useState({
    arr:[
      {id:1, name: "ini", count: 0},
      {id:2, name: "ini", count: 0},
      {id:3, name: "ini", count: 0},
      {id:4, name: "ini", count: 0},
      {id:5, name: "ini", count: 0},
      {id:6, name: "ini", count: 0},
    ]
  });

  const deleteHandler = (m) =>{
    console.log("clicked",index)
    let newArr = [...list];
    let index = newArr.indexOf(m);
    newArr.splice(index, 1);
    setState(prevState => {
      return {list:prevState.arr}
    })

  }
  

  const list = state.arr;



  return (
    <div className='container border my-4'>
      <div className="row">
        {list.map((m) => (
        <Childco
         key={m.id}
         m={m} 
         deleteHandler={deleteHandler}
        >
         
          <button className="btn btn-sm btn-outline-success">+</button>
          
        </Childco>))}
      </div>
      </div>
  )
}

export default Home