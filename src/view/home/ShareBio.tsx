import { useState, createContext, useContext } from "react";
import BioHead from './components/BioHead'
import BioMid from './components/BioMid'
import { useParams } from "react-router-dom";
import Cookie from "plugin/cookie";

const ShareBio = () => {
    const [count, setCount] = useState(0);
    const handleResult = (d: any) => {
        setCount(d);
    };
    let { id } = useParams();
    return (
        <div>
            <div>
                {/* <div>{count}</div> */}
                <BioHead data={count} onResult={handleResult}></BioHead>
            </div>
            <div>
                <BioMid/>
            </div>
        </div>
    )
}

export default ShareBio

