import { useState, useContext  } from "react";

import "../HomePage/HomePageSection.css";
import "../HomePage/AboutUsSection.css";
import "../HomePage/OurWorkSection.css";
import "../HomePage/DepartmentSection.css";


import HomePageImage from "../Images/Untitled-design-3-2048x1024.jpg";
import { Language } from "../UpperBar/UpperBar";
import { MyData } from "../UpperBar/MyData";
import { MyContext } from "../App";

import { useNavigate } from "react-router-dom";

import AboutUsImage from "../Images/kam-idris-_HqHX3LBN18-unsplash.jpg"

import myLog1 from "../UpperBar/MyLogo/image3.png"
import CompanyOnMap from "../Images/CompanyOnMap.png"
import { Wrapper } from "@googlemaps/react-wrapper";


export const HomePage = () => {

    const navigate = useNavigate()
    const myArr = []

    const myDeptArr:any = []
    const myDeptArrImage:any = []
    const myDeptArrAbout:any = []

    const myUsedContext:any = useContext(MyContext);
    const [counter, usecounter] = useState<{name: Number}>({name: 0})

    const LeftArrowHandleClick = () => {
        if(0 < Number(counter.name)){
            usecounter({name: Number(counter.name) - 1})
        }else if(Object.keys(MyData).length > Number(counter.name) ){
            usecounter({name: (Object.keys(MyData)).length - 2})
        }
    }
    const RightArrowHandleClick = () => {
        if(Object.keys(MyData).length - 3  < Number(counter.name)){
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

    for (let i = 0; i < Object.values(MyData[4]).length / 4; i++){
        myDeptArr.push(MyData[4][`Department${i}`])
        myDeptArrAbout.push(MyData[4][`AboutDepartment${i}`])
        myDeptArrImage.push(MyData[4][`ImageDepartment${i}`])
       
    }

    const handleMiniBallClick = (id:any) =>{
        usecounter({name: Number(id)})
    }

    const handleDepartment = (b: any) => {
        localStorage.setItem("b", `${b}`)
        navigate(`/tntdecoration/MyDepartment${b}`)
        window.scrollTo(0, 0)

    }

    return (
    <div style={{backgroundColor:"rgb(229, 229, 229)"}}>
        {/* Home Page Section */}
       <div></div>
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
        {myDeptArr.map((a:any, b:any) => 
        
                <div className="department-div" onClick={() => handleDepartment(b)}>

                <img className="mydeptImage-img" src={MyData[myUsedContext.myDeptId][`ImageDepartment${b}`]}></img>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDeptPara${myUsedContext.id}-para`}>{MyData[myUsedContext.myDeptId][`Department${b}`]}</p>
                </div>

                <div className="line-div"></div>

                <div className={`allTheDivs${myUsedContext.id}`}>
                <p className={`myDesPara${myUsedContext.id}-para`}>{MyData[myUsedContext.myDeptId][`AboutDepartment${b}`]}</p>
                </div>

            </div>
    
       
        )}
 </div>

        {/* End Section//////// */} 

</div>
)
}