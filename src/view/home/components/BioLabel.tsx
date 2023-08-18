import ShareBio from "../ShareBio";
import { useState, createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";


const BioLabel = (props: any) => {
    const infoApp = useSelector((state: any) => state.infoApp);    
    return (
        <div className="pt-5 text-center">
            <p>{props.data.fullname}</p>
            <p>{props.data.bio}</p>
            <p>Title {infoApp.infoApp.title}</p>
        </div>

    );
}

export default BioLabel