import React, { useState } from "react";

export default function Start({ setUserName }) {
    const [name, setName] = useState('');

    const handleName = () => {
        name && setUserName(name);
    }
  
    return (  
        <>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h1 className="text-warning text-center">Kaun Banega $ Millionaire ?</h1>  
                <div className="mt-5 text-center">      
                    <input type="text" className="form-control text-center fw-bold mb-3" placeholder="Enter Your Name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <button className="btn btn-outline-warning px-4" onClick={() => handleName()}>Start</button>
                </div>
            </div>
        </>
    )
}