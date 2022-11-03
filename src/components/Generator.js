import React, { useEffect, useState } from 'react'
import './generator.css'

export default function Generator({ onChange, text }) {
    const [horizontal, setHorizontal] = useState(10)
    const [vertical, setVertical] = useState(10)
    const [blur, setBlur] = useState(5)
    const [spread, setSpread] = useState(0)
    const [color, setColor] = useState('#000000')
    const [inset, setInset] = useState('off')

    useEffect(() => {
        const data = {
            horizontal,
            vertical,
            blur,
            spread,
            color: color,
            inset: inset,
        }
        onChange(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [horizontal, vertical, blur, spread, color, inset]);

    return (
        <div className='generator'>
            <div className="input-field border px-2 py-1 mt-5 rounded shadow">
                <label className='d-flex justify-content-between w-100 px-3'>
                    <h5 className='text-left'>Horizontal Shadow Length</h5>
                    <h5 className='text-right'>{horizontal} px</h5>
                </label>
                <input className='w-75' min="0" max="200" value={horizontal} onChange={(e) => setHorizontal(e.target.value)} type="range" id="range" name="fav_language" />
            </div>

            <div className="input-field border px-2 py-1 mt-3 rounded shadow">
                <label className='d-flex justify-content-between w-100 px-3'>
                    <h5 className='text-left'>Vertical Shadow Length</h5>
                    <h5 className='text-right'>{vertical} px</h5>
                </label>
                <input className='w-75' min="0" max="200" value={vertical} onChange={(e) => setVertical(e.target.value)} type="range" id="range" name="fav_language" />
            </div>

            <div className="input-field border px-2 py-1 mt-3 rounded shadow">
                <label className='d-flex justify-content-between w-100 px-3'>
                    <h5 className='text-left'>Blur Radius</h5>
                    <h5 className='text-right'>{blur} px</h5>
                </label>
                <input className='w-75' min="0" max="200" value={blur} onChange={(e) => setBlur(e.target.value)} type="range" id="range" name="fav_language" />
            </div>

            {!text && <div className="input-field border px-2 py-1 mt-3 rounded shadow">
                <label className='d-flex justify-content-between w-100 px-3'>
                    <h5 className='text-left'>Spread Radius</h5>
                    <h5 className='text-right'>{spread} px</h5>
                </label>
                <input className='w-75' min="0" max="200" value={spread} onChange={(e) => setSpread(e.target.value)} type="range" id="range" name="fav_language" />
            </div>}

            <div className="input-field border px-2 py-1 mt-3 rounded shadow">
                <label className='d-flex justify-content-between w-100 px-3'>
                    <h5 className='text-left'>Shadow Color</h5>
                    <h5 className='text-right'>{color}</h5>
                </label>
                <span>
                    <input className='' min="0" max="200" value={color} onChange={(e) => setColor(e.target.value)} type="color" id="colors" name="fav_language" />
                </span>
            </div>

            {!text && <div className="input-field border px-2 py-1 mt-3 rounded shadow">
                <label className='d-flex justify-content-between w-100 px-3'>
                    <h5 className='text-left'>Inset</h5>

                    <input type="checkbox" value={inset} onChange={() => setInset(inset === 'off' ? 'on' : 'off')} />
                </label>
            </div>}
        </div>
    )
}
