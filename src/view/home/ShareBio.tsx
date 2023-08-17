import { useState, createContext, useContext } from "react";

import BioHead from './components/BioHead'
import BioMid from './components/BioMid'

const ShareBio = () => {
    const [count, setCount] = useState(0);
    const handleResult = (d: any) => {
        setCount(d);
      };
    return (
        <div>
            <div>
                {/* <div>{count}</div> */}
                <BioHead data={count} onResult={handleResult}></BioHead>
            </div>
            <div>
                <BioMid></BioMid>
            </div>
        </div>
    )
}

export default ShareBio
