import { useState, useContext  } from "react";

import "../HomePage/HomePageSection.css";
import "../HomePage/AboutUsSection.css";
import "../HomePage/OurWorkSection.css";
import "../HomePage/DepartmentSection.css";



import HomePageImage from "../Images/Untitled-design-3-2048x1024.jpg";
import { Language } from "../UpperBar/UpperBar";
import { MyData } from "../UpperBar/MyData";
import { MyContext } from "../App";


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
    <div style={{backgroundColor:"rgb(229, 229, 229)"}}>
        {/* Home Page Section */}
       <div style={{boxShadow:"0px 20px 100px 50px black", width:"100%", position:"fixed", height:"2px", marginTop:"-85px", zIndex:"19"}}></div>
        {/* Main Image */}
       <img className="myImage-img" src={HomePageImage} />

     
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
            <div className={`myHiddenContent-div`}></div>
            
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

    
</div>
)
}