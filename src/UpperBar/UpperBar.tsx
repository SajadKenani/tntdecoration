import "../UpperBar/UpperBar.css";
import {MyData} from "../UpperBar/MyData";
import { useContext, useState } from "react";
import myLogo from "../UpperBar/MyLogo/image2.png"
import React from "react";
import { MyContext } from "../App";


import ClickedHomePageMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/miniClickedHomeIcon.png"
import ClickedAboutUsMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/MiniClickedAboutUsMiniIcon.png"
import ClickedOurWorkMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/MiniClickedOurWorkMiniIcon.png"
import ClickedDepartmentsMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/ClickedDepartmentsMiniIcon.png"
import ClickedContactUsMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/miniClickedContactUsIcon.png"


import UnClickedHomePageMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/miniUnClickedHomeIcon.png"
import UnClickedAboutUsMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/MiniUnClickedAboutUsMiniIcon.png"
import UnClickedOurWorkMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/MiniUnClickedOurWorkMiniIcon.png"
import UnClickedDepartmentsMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/UnClickedDepartmentsMiniIcon.png"
import UnClickedContactUsMiniIcon from "../UpperBar/SmallMainIcons/MiniHomeIcons/miniUnClickedContactUsIcon.png"





export const UpperBar = () => {

    const [showdep, useshowdep] = useState(false)


    const contextValue: any = useContext(MyContext);
    console.log(contextValue.id);

    return (
        <div className="MainDiv-div">
            <div className="veryUpperBar-div">
            </div>
            
            <div className="tnt-LeftWord">
                <p className="tntPara">TNT DECORATION</p>
            </div>

            <div className="myOptions-div">
                <p className="myOptions-para">{MyData[contextValue.id].homePage}</p>    
                <p className="myOptions-para">{MyData[contextValue.id].aboutUs}</p>
                <p className="myOptions-para">{MyData[contextValue.id].ourWork}</p>
                <p className="myOptions-para" onMouseEnter={() => useshowdep(!showdep) } >&#11167; {MyData[contextValue.id][`departments`]}</p>
                <p className="myOptions-para">{MyData[contextValue.id].contactUs}</p>
            </div>

            <div className="myHiddenOptions-div">
                <div style={{display:"grid"}}>
                    <img className="myHiddenOptions-img" src={UnClickedHomePageMiniIcon}/>  
                    <p className="myHiddenOptions-para">{MyData[contextValue.id].Minihome}</p>   
                </div>

                <div>
                    <img className="myHiddenOptions-img" src={UnClickedAboutUsMiniIcon}/>  
                    <p className="myHiddenOptions-para">{MyData[contextValue.id].MiniaboutUs}</p>      
                </div>

                <div>
                    <img className="myHiddenOptions-img" src={UnClickedOurWorkMiniIcon}/>      
                    <p className="myHiddenOptions-para">{MyData[contextValue.id].MiniourWork}</p>  
                </div>

                <div>
                    <img className="myHiddenOptions-img" src={UnClickedDepartmentsMiniIcon}/>  
                    <p className="myHiddenOptions-para">{MyData[contextValue.id].Minidepartments}</p>      
                </div>

                <div>
                    <img className="myHiddenOptions-img" src={UnClickedContactUsMiniIcon}/>    
                    <p className="myHiddenOptions-para">{MyData[contextValue.id].MinicontactUs}</p>   
                </div>
                           
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

