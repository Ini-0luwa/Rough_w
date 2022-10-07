
import React, {useState} from 'react'

const Childco = ({m,deleteHandler}) => {
  const [valu, setValue] = useState("");
  const [balu, setBalue] = useState("");
  const num = 3;
  const go = () => {
      setBalue(num);
  };
  const gk = () =>{
    setValue(5);
  };
  return (
    <div className='col-lg-6'>
        <div className="m-3 card">
            <div className="card-body">#{m.id}
                <div onClick={() => deleteHandler(m)} className='fa fa-times text-muted ps-5'></div>
            </div>
            <div className="card-body">{m.name}</div>
            <div className="card-body">
            <input type="text" value={valu} onChange={(e) => setValue(e.target.value)} />
            <input onClick={go} type="button" value={3} />
            <input onClick={gk} type="button" value={5} />
            <div>{`${valu}${balu}`}</div>
            <button className="btn btn-sm btn-outline-success">+</button>
            </div>
            <div className="card-footer">{m.count}</div>
            
        </div>
    </div>
  )
}

export default Childco