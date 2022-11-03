import { useState } from 'react';
import Box from './Box';
import Generator from './Generator';


function BoxShadow() {
    const [box_shadow, setBoxShadow] = useState({});

    const boxData = (data) => {
        setBoxShadow(data);
    }
    return (
        <div className='row mx-0 shadow pb-4 rounded-bottom'>
            <div className="col-sm-12 col-md-12 col-lg">
                <Generator onChange={boxData} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg">
                <Box data={box_shadow} />
            </div>
        </div>
    );
}

export default BoxShadow;
