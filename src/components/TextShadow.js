import { useState } from 'react';
import Generator from './Generator';


function TextShadow() {
    const [box_shadow, setBoxShadow] = useState({});

    const boxData = (data) => {
        setBoxShadow(data);
    }
    return (
        <div className='row mx-0 shadow pb-4 rounded-bottom'>
            <div className="col-sm-12 col-md-12 col-lg">
                <Generator onChange={boxData} text={true} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg">
                <div className='d-flex flex-column justify-content-center align-items-center h-100 my-4'>
                    <h1 style={{ textShadow: `${box_shadow.color} ${box_shadow.horizontal}px ${box_shadow.vertical}px ${box_shadow.blur}px` }}>This text is the preview text.</h1>
                    <div className='mt-5 border w-100 shadow pt-3 d-flex justify-content-center align-items-center'>
                        <p className='px-2'>text-shadow: {box_shadow.horizontal}px {box_shadow.vertical}px {box_shadow.blur}px {box_shadow.color};</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextShadow;
