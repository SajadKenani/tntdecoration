import "../UpperBar/UpperBar.css";
import {MyData} from "../UpperBar/MyData";
import { useContext, useState } from "react";
import myLogo from "../UpperBar/MyLogo/image2.png"
import React from "react";
import { MyContext } from "../App";


import ClickedHomePageMiniIcon from "../UpperBar/MiniHomeIcons/miniClickedHomeIcon.png"
import ClickedAboutUsMiniIcon from "../UpperBar/MiniHomeIcons/MiniClickedAboutUsMiniIcon.png"
import ClickedOurWorkMiniIcon from "../UpperBar/MiniHomeIcons/MiniClickedOurWorkMiniIcon.png"
import ClickedDepartmentsMiniIcon from "../UpperBar/MiniHomeIcons/ClickedDepartmentsMiniIcon.png"
import ClickedContactUsMiniIcon from "../UpperBar/MiniHomeIcons/miniClickedContactUsIcon.png"


import UnClickedHomePageMiniIcon from "../UpperBar/MiniHomeIcons/miniUnClickedHomeIcon.png"
import UnClickedAboutUsMiniIcon from "../UpperBar/MiniHomeIcons/MiniUnClickedAboutUsMiniIcon.png"
import UnClickedOurWorkMiniIcon from "../UpperBar/MiniHomeIcons/MiniUnClickedOurWorkMiniIcon.png"
import UnClickedDepartmentsMiniIcon from "../UpperBar/MiniHomeIcons/UnClickedDepartmentsMiniIcon.png"
import UnClickedContactUsMiniIcon from "../UpperBar/MiniHomeIcons/miniUnClickedContactUsIcon.png"
import { useNavigate } from "react-router-dom";

import FacebookIcon from "../Images/toppng.com-free-icons-png-black-and-white-fb-1932x1932.png"
import InstaIcon from "../Images/pngfind.com-instagram-png-white-2773517.png"
import PhoneCall from "../Images/PngItem_1924152.png"
import Whatsapp from "../UpperBar/SmallMainIcons/WhatsApp Icon Gray.jpg"




export const UpperBar = () => {

    const [showdep, useshowdep] = useState(false)

    const [hiddenshowdep, usehiddenshowdep] = useState(false)

    const [home, usehome] = useState(true)
    const [aboutus, useaboutus] = useState(false)
    const [ourwork, useourwork] = useState(false)
    const [contactus, usecontactus] = useState(false)
    
    const navigate = useNavigate();

    const contextValue: any = useContext(MyContext);
   

    const handleHiddenDepartments = () => {
        usehiddenshowdep(!hiddenshowdep)
        
    }

    const handleHome = () => {
        usehome(true)

        useaboutus(false)
        useourwork(false)
        usecontactus(false)
        navigate("/tntdecoration")
    }

    const handleAboutUs = () => {
        useaboutus(true)

        usehome(false)
        useourwork(false)
        usecontactus(false)
        navigate("/tntdecoration/aboutUs")
    }

    const handleOurWork = () => {
        useourwork(true)

        usecontactus(false)
        usehome(false)
        useaboutus(false)
        navigate("/tntdecoration/OurWork")
    }

    const handleContactUs = () => {
        usecontactus(true)

        usehome(false)
        useaboutus(false)
        useourwork(false)
        navigate("/tntdecoration/ContactUs")
    }

    return (
        <div className="MainDiv-div">

               {/* The Buttons on the left side */}
       <img className="facebookImage-img" src={FacebookIcon}/>
       <img className="instagram-img" src={InstaIcon}/>
       <img className="phoneCall-img" src={Whatsapp}/>

          
            <div style={{margin:"0 auto", display:"flex", justifyContent:"space-between", width:"100%", marginTop:"200px"}}>
            <div className="tnt-LeftWord">
                <p className="tntPara">TNT DECORATION</p>
            </div>

            <div className="myOptions-div">
                <p className="myOptions-para" onClick={handleHome}>{MyData[contextValue.id].homePage}</p>    
                <p className="myOptions-para" onClick={handleAboutUs}>{MyData[contextValue.id].aboutUs}</p>
                <p className="myOptions-para" onClick={handleOurWork}>{MyData[contextValue.id].ourWork}</p>
                <p className="myOptions-para" onMouseEnter={() => useshowdep(!showdep) } >&#11167; {MyData[contextValue.id][`departments`]}</p>
                <p className="myOptions-para" onClick={handleContactUs}>{MyData[contextValue.id].contactUs}</p>
            </div>

          
                <img className="myLogoImage-img" src={myLogo} />
            
            </div>
            
            <div className="myHiddenOptions-div">
                <div onClick={handleHome}>    
                    <p className="myHiddenOptions-para">
                    <img className="myHiddenOptions-img" src={home ? ClickedHomePageMiniIcon : UnClickedHomePageMiniIcon}/>{MyData[contextValue.id].Minihome}</p>   
                </div>

                <div onClick={handleAboutUs}>   
                    <p className="myHiddenOptions-para">
                    <img className="myHiddenOptions-img" src={aboutus ? ClickedAboutUsMiniIcon : UnClickedAboutUsMiniIcon}/>{MyData[contextValue.id].MiniaboutUs}</p>      
                </div>

                <div onClick={handleOurWork}>            
                    <p className="myHiddenOptions-para">
                    <img className="myHiddenOptions-img" src={ourwork ? ClickedOurWorkMiniIcon : UnClickedOurWorkMiniIcon}/>{MyData[contextValue.id].MiniourWork}</p>  
                </div>

                <div onClick={handleHiddenDepartments}>   
                    <p className="myHiddenOptions-para">
                    <img className="myHiddenOptions-img" src={hiddenshowdep ? ClickedDepartmentsMiniIcon : UnClickedDepartmentsMiniIcon}/>
                    {MyData[contextValue.id].Minidepartments}</p>      
                </div>

                <div onClick={handleContactUs}> 
                    <p className="myHiddenOptions-para">
                    <img className="myHiddenOptions-img" src={contactus ? ClickedContactUsMiniIcon : UnClickedContactUsMiniIcon}/>{MyData[contextValue.id].MinicontactUs}</p>   
                </div>
                           
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

            {hiddenshowdep && 
          
            <div className={`myHiddenDepDiv-div${contextValue.id}`} onMouseLeave={handleHiddenDepartments}>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptOne}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptTwo}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptThree}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptFour}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptFive}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptSix}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptSeven}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptEight}</div>
                <div className={`HiddendeptOption${contextValue.id}-opt`}>{MyData[contextValue.id].deptNine}</div>
            </div>
            }
        </div>
    )
}

export const Language = localStorage.getItem("language");

