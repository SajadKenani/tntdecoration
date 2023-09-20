import "../Footer/Footer.css"

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../HomePage/HomePageSection.css";
import "../HomePage/AboutUsSection.css";
import "../HomePage/OurWorkSection.css";
import "../HomePage/DepartmentSection.css";

import myLogo from "../UpperBar/MyLogo/image2.png"


import HomePageImage from "../Images/Untitled-design-3-2048x1024.jpg";
import { Language } from "../UpperBar/UpperBar";
import { MyData } from "../UpperBar/MyData";
import { MyContext } from "../App";

import FacebookIcon from "../Images/toppng.com-free-icons-png-black-and-white-fb-1932x1932.png"
import InstaIcon from "../Images/pngfind.com-instagram-png-white-2773517.png"
import PhoneCall from "../Images/PngItem_1924152.png"



import myLog1 from "../UpperBar/MyLogo/image3.png"





export const Footer = () => {

  const [home, usehome] = useState(false)
  const [aboutus, useaboutus] = useState(false)
  const [ourwork, useourwork] = useState(false)
  const [contactus, usecontactus] = useState(false)
  
  const navigate = useNavigate();


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

  const myUsedContext = useContext(MyContext);



  return(
    <div className="mainFooterDiv-div">

      <div style={{display:"flex", justifyContent:"end"}}><div className="footerUpRightSquare-div"></div></div>
    
      
   

    <div className="myHiddenMap-div" style={{width:"90%", margin:"0 auto", marginTop:"60px"}} >
        <div className={`myFooterMap-Div`} style={{width:"100%"}}></div>
      <div style={{display:"grid", margin:"0 auto"}}>
        <div style={{display:"flex", margin:"0 auto"}}>
      <div className={`veryMiniMapFacekook`}></div>
      <div className={`veryMiniMapInstagram`}></div>
      <div className={`veryMiniMapWhatsapp`}></div>
      </div>
      <p className="locationPara-para">بغداد- ساحة النصر - ساحة تونس</p>
      </div>

      </div>
      <div className={`myOuterMainFooterPages-para${[myUsedContext.id]}`} >
    <div>
     
    
        <div className="myHiddenSecondayDiv-div">
      <div>
        <p className={`myMainFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].FooterPages}</p>

        <div className={`myFooterPages-Div${[myUsedContext.id]}`}>
        <p className={`myFooterPages-para${[myUsedContext.id]}`}onClick={handleHome}>{MyData[myUsedContext.id].homePage}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`}onClick={handleAboutUs}>{MyData[myUsedContext.id].aboutUs}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].ourWork}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`}onClick={handleOurWork}>{MyData[myUsedContext.id].departments}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`}onClick={handleContactUs}>{MyData[myUsedContext.id].contactUs}</p>
        </div>
      </div>

      <div>
        <p className={`myMainFooterPages-para${[myUsedContext.id]}`} style={{marginLeft:"10px"}}>{MyData[myUsedContext.id].FooterDepartments}</p>
      
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptOne}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptTwo}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptThree}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptFour}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptFive}</li>

        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptSix}</li>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptSeven}</li>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptEight}</li>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptNine}</li>   
    
      </div>
        </div>
        
          
        <div className="mySecondayDiv-div" style={{marginTop:"50px"}}>
      <div style={{zIndex:"214"}}>
        <p className={`myMainFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].FooterPages}</p>

        <p className={`myFooterPages-para${[myUsedContext.id]}`} onClick={handleHome}>{MyData[myUsedContext.id].homePage}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`} onClick={handleAboutUs}>{MyData[myUsedContext.id].aboutUs}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`} onClick={handleOurWork}>{MyData[myUsedContext.id].ourWork}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].departments}</p>
        <p className={`myFooterPages-para${[myUsedContext.id]}`} onClick={handleContactUs}>{MyData[myUsedContext.id].contactUs}</p>
      
      </div>

      

      <div>
        <p className={`myMainFooterPages-para${[myUsedContext.id]}`} style={{marginLeft:"10px"}}>{MyData[myUsedContext.id].FooterDepartments}</p>
        <ul className={`myFooterPages-Div${[myUsedContext.id]}`} style={{marginLeft:"-120px"}}>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptOne}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptTwo}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptThree}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptFour}</li>
          <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptFive}</li>
        </ul>
      </div>

      <ul className={`myFooterPages-Div${[myUsedContext.id]}`} style={{marginLeft:"-150px", marginTop:"50px"}}>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptSix}</li>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptSeven}</li>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptEight}</li>
        <li className={`myFooterPages-para${[myUsedContext.id]}`}>{MyData[myUsedContext.id].deptNine}</li>   
      </ul>

        </div>


        <div className="myInnerFooterLine-div"></div>

        <div className="veryLowPara-div">
          <p className="veryLowPara-para">07743 456 7890</p>
          <p className="veryLowPara-para">07743 456 7890</p>
          <p className="veryLowPara-para">company@gmail.com</p>
        </div>

        </div>

      
      <div className="myUnHiddenMap-div" style={{marginRight:"120px", marginTop:"50px"}} >
        <div className={`myFooterMap-Div`}></div>
      <div style={{display:"flex"}}>
      <div className={`veryMiniMapFacekook`}></div>
      <div className={`veryMiniMapInstagram`}></div>
      <div className={`veryMiniMapWhatsapp`}></div>
      
      <p className="locationPara-para">بغداد- ساحة النصر - ساحة تونس</p>
      </div>

      </div>

      </div>

      <div className="myInnerFooterEndLine-div" >
        <p className="creditPara-para">{MyData[myUsedContext.id].Credits}</p>
      </div>
   
   
    </div>
  )
}