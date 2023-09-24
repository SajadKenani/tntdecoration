import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { MyData } from "../UpperBar/MyData";
import "../MyDepartment/MyDepartment.css"

export const MyDepartment = () => {


  const myUsedContext:any = useContext(MyContext);

  const [setmyimage, usesetmyimage] = useState(MyData[myUsedContext.myDeptId][`ImageDepartmentPage${(localStorage.getItem("b")) }`])
  const [counter, usecounter] = useState<{name: Boolean}>({name: false})

  if (MyData[myUsedContext.myDeptId][`ImageDepartmentPage${(localStorage.getItem("b")) }`] !== setmyimage){
    usecounter({name: !counter.name})
    usesetmyimage(MyData[myUsedContext.myDeptId][`ImageDepartmentPage${(localStorage.getItem("b")) }`])
  }
  

  const myArr = [0]




  return (
    <div>
        <div className="mainDiv" >
        <div className={'myMainParaDiv-div'}>
          <p className={`myMainDepartmentPara-para${myUsedContext.id}`}>{MyData[myUsedContext.myDeptId][`Department${localStorage.getItem("b")}`]}</p>
          <p className={`mySecoandaryDepartmentPara-para${myUsedContext.id}`}>{MyData[myUsedContext.myDeptId][`AboutDepartment${localStorage.getItem("b")}`]}</p>
          </div>
          <img className={`myMainDepartmentImage${counter.name}`} src={MyData[myUsedContext.myDeptId][`ImageDepartmentPage${(localStorage.getItem("b"))}`]}/>
       
         </div>

         <div className="LowerWhiteSquareOfDepartment-div"></div>
         <div className="circlemm" style={{marginTop:"4px", marginLeft:"10px", width:"32px", height:"43px"}}></div>

    </div>
  )

}