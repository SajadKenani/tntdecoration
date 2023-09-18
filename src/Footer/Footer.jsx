import "../Footer/Footer.css"

import { useState, useContext  } from "react";

import "../HomePage/HomePageSection.css";
import "../HomePage/AboutUsSection.css";
import "../HomePage/OurWorkSection.css";
import "../HomePage/DepartmentSection.css";



import HomePageImage from "../Images/Untitled-design-3-2048x1024.jpg";
import { Language } from "../UpperBar/UpperBar";
import { MyData } from "../UpperBar/MyData";
import { MyContext } from "../App";

import FacebookIcon from "../Images/toppng.com-free-icons-png-black-and-white-fb-1932x1932.png"
import InstaIcon from "../Images/pngfind.com-instagram-png-white-2773517.png"
import PhoneCall from "../Images/PngItem_1924152.png"



import myLog1 from "../UpperBar/MyLogo/image3.png"





export const Footer = () => {

  const myUsedContext = useContext(MyContext);



  return(
    <div>
          {/* Footer Section*/}
    <div className="mainFooterDiv-div">
      <div style={{display:"flex", justifyContent:"end"}}>
           <div className={`upRightYellowSquareFooter-div`}></div>
      </div>
      
      <div className="myFooterLine-div"></div>

      <div className="myFooterContent-div">

        <div className="myFooterTNTImage-div" >
             <img className="myFooterImage-img" src={myLog1} />
             <p className="myFooterPara-para">{MyData[myUsedContext.id].underLogoinFooterPara}</p>
        </div>

        <div className="mySiderLine-div"></div>

        <div className="myFooterInnerPara-Div" >
             <p className="myFooterInnerPara-para">{MyData[myUsedContext.id].contactSectionPara}</p>
             <div className="myFooterinBetweenLine-div"></div>

             <p className="myFooterInnerNumber-para">0772 345 6789</p>
             <p className="myFooterInnerNumber-para">0772 345 6789</p>

             <p className="myFooterInnerPara-para" style={{marginTop:40+"px"}}>{MyData[myUsedContext.id].contactUsViaEmail}</p>
             <div className="myFooterinBetweenLine-div"></div>

             <p className="myFooterInnerPara-para" style={{marginTop:5+"px"}}>company@email.com</p>

             <div className="myFooterLogos-div">
                <div className="myFooterLogoOne-div"><img className="myFooterLogoImage-img" src={FacebookIcon}/></div>
                <div className="myFooterLogoOne-div"><img className="myFooterLogoImage-img" src={InstaIcon}/></div>
                <div className="myFooterLogoOne-div"><img className="myFooterLogoImage-img" src={PhoneCall}/></div>
             </div>
        </div>

        <div className="mySiderLine-div"></div>

        <div style={{display:"grid", width:30+"%"}}>
             <div className="myFooterMapDiv-div"></div>
        </div>
        
      </div>

      <div className="myFooterLine-div"></div>

        <div style={{margin: "0 auto", display:"flex", justifyContent:"space-between", width:65+"%"}}>
     
    
        <div className="myOptions-div" style={{marginLeft: "-30px"}}>
                <p className="myHiddenOptions-para" >{MyData[myUsedContext.id].homePage}</p>    
                <p className="myHiddenOptions-para" >{MyData[myUsedContext.id].aboutUs}</p>
                <p className="myHiddenOptions-para" >{MyData[myUsedContext.id].ourWork}</p>
                <p className="myHiddenOptions-para" >{MyData[myUsedContext.id][`departments`]}</p>
                <p className="myHiddenOptions-para" >{MyData[myUsedContext.id].contactUs}</p>
            </div>
            <div>
                <p className="myLocation-para">بغداد - ساحة النصر - شارع تونس</p>
            </div>

        </div>
   
        <div className="myUnderFooterDiv-div"></div>
    </div>
   
  {/* End Section//////// */}

    <div className="mainHiddenFooterDiv-div">
        <div style={{display:"flex", justifyContent:"end"}}>
           <div className={`upRightYellowSquareFooter-div`}></div>
        </div>

        <div className="myHiddenFooterTNTImage-div" >
            <img className="myFooterImage-img" src={myLog1} />
            <p className="myFooterPara-para" style={{width:"120%", marginLeft:"-10%"}}>{MyData[myUsedContext.id].underLogoinFooterPara}</p>
        </div>

        

        <div className="myFooterInnerPara-Div" style={{width:"60%", margin:"0 auto"}} >
             <p className="myFooterInnerPara-para">{MyData[myUsedContext.id].contactSectionPara}</p>
             <div className="myFooterinBetweenLine-div"></div>

             <p className="myFooterInnerNumber-para">0772 345 6789</p>
             <p className="myFooterInnerNumber-para">0772 345 6789</p>

             <p className="myFooterInnerPara-para" style={{marginTop:40+"px"}}>{MyData[myUsedContext.id].contactUsViaEmail}</p>
             <div className="myFooterinBetweenLine-div"></div>

             <p className="myFooterInnerPara-para" style={{marginTop:5+"px"}}>company@email.com</p>

             <div className="myFooterLogos-div">
                <div className="myFooterLogoOne-div"><img className="myFooterLogoImage-img" src={FacebookIcon}/></div>
                <div className="myFooterLogoOne-div"><img className="myFooterLogoImage-img" src={InstaIcon}/></div>
                <div className="myFooterLogoOne-div"><img className="myFooterLogoImage-img" src={PhoneCall}/></div>
             </div>
        </div>
    
      </div>
    </div>
  )
}