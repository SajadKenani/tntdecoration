import "../UpperBar/UpperBar.css";
import {MyData} from "../UpperBar/MyData";
import { useContext, useState } from "react";
import myLogo from "../UpperBar/MyLogo/image2.png"
import React from "react";
import { MyContext } from "../App";



export const UpperBar = () => {

    const [showdep, useshowdep] = useState(false)


    const contextValue: any = useContext(MyContext);
    console.log(contextValue.id);

    return (
        <div className="MainDiv-div">
            <div className="veryUpperBar-div">
            </div>

            <div className="myMainLine-div"></div>
            <div className="tnt-LeftWord">
                <p className="tntPara">TNT DECORATION</p>
            </div>

            <div className="myOptions-div">
                <p className="myOptions-para">{MyData[contextValue.id].homePage}<div className="myUpperLine"></div></p>
                
                <p className="myOptions-para">{MyData[contextValue.id].aboutUs}</p>
                <p className="myOptions-para">{MyData[contextValue.id].ourWork}</p>
                <p className="myOptions-para" onMouseEnter={() => useshowdep(!showdep) } >&#11167; {MyData[contextValue.id][`departments`]}</p>
                <p className="myOptions-para">{MyData[contextValue.id].contactUs}</p>
            </div>

            <div className="myLogo-div">
                <img className="myLogoImage-img" src={myLogo} />
            </div>

            {showdep && 
            <div className="myOuterDepartmentsDiv-div" onMouseLeave={() => useshowdep(!showdep)}>
            <ul className={`myDepDiv-div${contextValue.id}`} >
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptOne}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptTwo}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptThree}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptFour}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptFive}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptSix}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptSeven}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptEight}</li>
                <li className={`deptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptNine}</li>
            </ul>
            </div>}
        </div>
    )
}

export const Language = localStorage.getItem("language");

