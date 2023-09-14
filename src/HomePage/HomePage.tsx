import { useState, useContext  } from "react";

import "../HomePage/HomePageSection.css";
import "../HomePage/AboutUsSection.css";
import "../HomePage/OurWorkSection.css";
import "../HomePage/DepartmentSection.css";
import "../HomePage/FooterSection.css";


import HomePageImage from "../Images/Untitled-design-3-2048x1024.jpg";
import { Language } from "../UpperBar/UpperBar";
import { MyData } from "../UpperBar/MyData";
import { MyContext } from "../App";

import FacebookIcon from "../Images/toppng.com-free-icons-png-black-and-white-fb-1932x1932.png"
import InstaIcon from "../Images/pngfind.com-instagram-png-white-2773517.png"
import PhoneCall from "../Images/PngItem_1924152.png"

import AboutUsImage from "../Images/kam-idris-_HqHX3LBN18-unsplash.jpg"

import ArchitecturalDesign from "../Images/3d-architectural-rendering-services-500x500 1.png"
import DoorSliding from "../Images/doors-sliding-carousel-1-365x535_tcm90-15398 1.png"
import GlassesImage from "../Images/Tinted-Glass-Invisible-Aluminum-Frame-Low-e-Doubl 1.png"
import ExtortionImage from "../Images/32416139501.png"
import DecorationImage from "../Images/istockphoto-481628382-612x612 1.png"
import CeilingImage from "../Images/False-Ceiling-Light-31.png"
import PackegingImage from "../Images/belmont-roofing-wall-cladding-warehouse-refurbishment 1.png"
import SuperVisingImage from "../Images/project-management-300x205 1.png"
import AddsImage from "../Images/what_is_the_difference_between_advertisement_and_propaganda_7428_orig 1.png"




import myLog1 from "../UpperBar/MyLogo/image3.png"
import CompanyOnMap from "../Images/CompanyOnMap.png"
import { Wrapper } from "@googlemaps/react-wrapper";

export const HomePage = () => {
    const myArr = []
    const myUsedContext:any = useContext(MyContext);
    const [counter, usecounter] = useState<{name: Number}>({name: 0})

    const LeftArrowHandleClick = () => {
        if(0 < Number(counter.name)){
            usecounter({name: Number(counter.name) - 1})
        }else if(Object.keys(MyData).length > Number(counter.name) ){
            usecounter({name: (Object.keys(MyData)).length })
        }
    }
    const RightArrowHandleClick = () => {
        if(Object.keys(MyData).length - 1  < Number(counter.name)){
            usecounter({name: 0})    
        }else{
            usecounter({name: Number(counter.name) + 1})   
        }
    }
    for (let i = 0; i < Object.keys(MyData[2]).length / 4; i++){
        if(MyData[2][`WorkNum${i}`] === MyData[2][`WorkNum${counter.name}`]){
            myArr.push(1)
        }else{
            myArr.push(0)
        } 
    }
    const handleMiniBallClick = (id:any) =>{
        usecounter({name: Number(id)})
    }

    return (
    <div >
        {/* Home Page Section */}

        {/* Main Image */}
       <img className="myImage-img" src={HomePageImage} />

        {/* The Buttons on the left side */}
       <div className="feceBook-div"><div><p className="myText-para" style={{marginTop:10+"px"}}>@CompanyAcc</p></div><img className="facebookImage-img" src={FacebookIcon}/></div>
       <div className="insta-div"><div><p className="myText-para" style={{marginTop:10+"px"}}>@CompanyAcc</p></div><img className="facebookImage-img" src={InstaIcon}/></div>
       <div className="phoneCall-div"><div><p className="myNumber-para">0772 345 6789</p><p className="myNumber-para">0772 345 6789</p></div><img className="phoneCall-img" src={PhoneCall}/></div>

        {/* Contents inside the main image */}
       <div className={`mainDiv${myUsedContext.id}-div`}>
            <div>
                {/* Main Paragraph */}
            <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`mainPara${myUsedContext.id}-para`} style={{marginBottom: -10 +"px", width:300+"px"}}>{MyData[myUsedContext.id].mainHomePara} </p>
            </div>
                {/* Second main Paragraph */}
            <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`mainPara${myUsedContext.id}-para`} >{MyData[myUsedContext.id].mainHomeParaTwo}</p>
            </div>
                {/* Mini Paragraph */}
            <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].sideHomePara}</p>
            </div>
                {/* Main Button */}
            <div className={`allTheDivs${myUsedContext.id}`}>
                <button className={`myButton${myUsedContext.id}-btn`}>{MyData[myUsedContext.id].myButton}</button>
            </div>

            </div>
       </div>

       {/* Lower Yellow Rectangular shape */}
       <div className="squareDesign-div"><div className="innersquareDesign-div"></div></div>
       <div className="circlemm"></div>

        {/* End Section//////// */}

        {/* About Us Section*/}
       <div className="mainAboutUsDiv-div">
        {/* Main Image */}
        <div className={`mainHiddenWhiteSquare${myUsedContext.id}-div`}>
        <p className={`myMainHiddenAboutUsPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].aboutUsTitle}</p>
            <p className={`mySecondHiddenAboutUsPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].aboutUsPara}</p>
        </div>
        <img className="myAboutUsImage-img" src={AboutUsImage}/>
        
       
        {/* White Space */}
        <div className="mainWhiteSquare-div">
            <div style={{width:100+"%"}}>
                <div className={`myMainWhiteDiv${myUsedContext.id}-div`}>
                    <p className={`myMainWhiteSquarePara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].aboutUsTitle}</p>
                </div>
                <div className="myLongLine-div"></div>
                    <p className={`myWhiteSquarePara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].aboutUsPara}
                </p>
            </div>

            <div className="rigthCorner-div"></div>
            <div style={{height:100+"%", width:12 +"px", backgroundColor:"rgb(249, 187, 0)", borderRadius:5+"px"}}></div>
   
        </div>

        
       </div>
        
        {/* End Section//////// */}
      
        {/* Our Work Section*/} 
        <div className="mainOurWorkDiv-div">

            <div className={`mainInnerWorkDiv${myUsedContext.id}-div`}><div className={`myVeryInnerDiv${myUsedContext.myId}-div`}></div>
           
            <div style={{width: 100+"%", display:"flex", justifyContent:"end", backgroundColor:"rgb(73, 73, 73)"}}>
            
            {myArr.map((a) =><img src={MyData[myUsedContext.myId][`workPic${counter.name}${a}`]} className={`myOurWorkImage${a}-img`} />)}
            <div className={`myHiddenContent-div`}>igy</div>
            
            </div>
            {/* Left and Right Arrows*/}
            <div className="myArrowsLeft-div" onClick={LeftArrowHandleClick}></div>
            <div className="myArrowsRight-div" onClick={RightArrowHandleClick}></div>

            {/* Main Image Paragraph */}
            <p className={`myMainOurWorkPara${myUsedContext.id}-para`}>{MyData[myUsedContext.myId][`WorkName${counter.name}`]}</p>

           

            {/* Description Image Paragraph */}
            <p className={`myMainOurWorkDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.myId][`WorkDes${counter.name}`]}</p>  
        
            {/* The Button On Image */}
            <button className={`myOurWorkButton${myUsedContext.id}-btn`}>{MyData[myUsedContext.id].myButton}</button>
           
            </div> 
        
        </div>
         
        {/* Yellow Rectangular shape */}
        <div style={{display:"flex", justifyContent:"end", marginTop:-730+"px"}}>
           <div className={`upRightYellowSquare-div`}><p className={`myInnerYelloSquarePara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].departmentsTitle}</p></div>
        </div>
       
       {/* Yellow Rectangular shape */}
        <div style={{display:"flex", justifyContent:"start", marginTop:640+"px"}}>
           <div className={`upRightYellowSquare-div`}></div>
        </div>

        {/* Lower Mini circles */}
        <div className="mainMiniDiv-div">{myArr.map((a, b) => <div className={`miniOption${a}-div`} onClick={() => handleMiniBallClick(b)}></div>)}</div>

        {/* End Section//////// */}
      
        {/* Departments Section*/}

        <div className="mainDepts-div">
            <div className="department-div">
                <img className="mydeptImage-img" src={GlassesImage}></img>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptOne}</p>
                </div>

                <div className="line-div"></div>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptOneDes}</p>
                </div>

            </div>
    
            <div className="department-div">
                <img className="mydeptImage-img" src={DoorSliding}></img>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptTwo}</p>
                </div>

                <div className="line-div"></div>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptTwoDes}</p>
                </div>

            </div>
    
            <div className="department-div">
                <img className="mydeptImage-img" src={ArchitecturalDesign}></img>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptThree}</p>
                </div>

                <div className="line-div"></div>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptThreeDes}</p>
                </div>

            </div>
  
      

   

            <div className="department-div">

                <img className="mydeptImage-img" src={CeilingImage}></img>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptFour}</p>
                </div>
            
                <div className="line-div"></div>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptFourDes}</p>
                </div>
            
            </div>
            
            <div className="department-div">

                <img className="mydeptImage-img" src={DecorationImage}></img>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptFive}</p>
                </div>
            
                <div className="line-div"></div>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptFiveDes}</p>
                </div>
            
            </div>
            
            <div className="department-div">

                <img className="mydeptImage-img" src={ExtortionImage}></img>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptSix}</p>
                </div>
            
                <div className="line-div"></div>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptSixDes}</p>
                </div>
            
            
    </div>   

 

            <div className="department-div">

                <img className="mydeptImage-img" src={AddsImage}></img>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptSeven}</p>
                </div>
            
                <div className="line-div"></div>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptSevenDes}</p>
                </div>
            
            </div>
            
            <div className="department-div">

                <img className="mydeptImage-img" src={SuperVisingImage}></img>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptEight}</p>
                </div>
            
                <div className="line-div"></div>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptEightDes}</p>
                </div>
            
            </div>
            
            <div className="department-div">

                <img className="mydeptImage-img" src={PackegingImage}></img>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptNine}</p>
                </div>
            
                <div className="line-div"></div>
            
                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.id].deptNineDes}</p>
                </div>   

            </div>          
        </div>    
        {/* End Section//////// */}

        {/* Footer Section*/}
    <div className="mainFooterDiv-div">
      <div style={{display:"flex", justifyContent:"end", marginTop:-730+"px"}}>
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

        <div style={{display:"flex", justifyContent:"space-between", width:80+"%"}}>
            <div className="myOptions-div" style={{marginTop:10+"px"}}>
                <p className="myOptions-para">{MyData[myUsedContext.id].homePage}</p>
                <p className="myOptions-para">{MyData[myUsedContext.id].aboutUs}</p>
                <p className="myOptions-para">{MyData[myUsedContext.id].ourWork}</p>
                <p className="myOptions-para" >{MyData[myUsedContext.id][`departments`]}</p>
                <p className="myOptions-para">{MyData[myUsedContext.id].contactUs}</p>
            </div>
    
            <div>
                <p className="myLocation-para">بغداد - ساحة النصر - شارع تونس</p>
            </div>
        </div>
   

    </div>
    <div className="myUnderFooterDiv-div"></div>
  {/* End Section//////// */}

    <div className="mainHiddenFooterDiv-div">
        <div style={{display:"flex", justifyContent:"end", marginTop:-730+"px"}}>
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