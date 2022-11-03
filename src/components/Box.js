import React from 'react'
import './box.css'

export default function Box({ data }) {

    return (
        <div className='box-container my-4'>
            <div className='box' style={{ boxShadow: `${data.color} ${data.horizontal}px ${data.vertical}px ${data.blur}px ${data.spread}px ${data.inset === "on" ? "inset" : ""}` }} />
            <div className='mt-5 border w-100 shadow pt-3 d-flex justify-content-center align-items-center'>
                <p className='px-2'>box-shadow: {data.horizontal}px {data.vertical}px {data.blur}px {data.spread}px {data.color} {data.inset === "on" ? "inset" : ""};</p>
            </div>
        </div>
    )
}
