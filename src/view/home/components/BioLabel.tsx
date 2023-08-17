import ShareBio from "../ShareBio";
import { useState, createContext, useContext } from "react";


const BioLabel = (props: any) => {


    return (
        <div className="pt-5 text-center">
            <p>{props.data.fullname}</p>
            <p>{props.data.bio}</p>
            <p></p>
        </div>
    );
}

export default BioLabel