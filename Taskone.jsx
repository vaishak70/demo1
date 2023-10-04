import React from 'react'
import './Taskone.css';

import { Link } from 'react-router-dom';
import { AiOutlineCloudUpload, AiOutlineMail, AiOutlineUser, IconName } from "react-icons/ai";
import { HiArrowLongRight, HiMiniArrowLongRight, HiOutlinePlay, HiPlay} from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";

function Taskone() {
    const carditems=[{
        head:"Basic",
        prize1:"$ 88/mo",
        prize2:"$ 9.99/mo",number:"25",
        gb:"25gb",
        support:"Email Support ",
        icons:<AiOutlineCloudUpload/>,
        icons2:<AiOutlineUser/>,
        icons3:<AiOutlineMail/>,
        icon4:<HiOutlinePlay style={{color:"yellow"}}/>,
        color:"lightyellow"




    },
{
head:"Standard",
prize1:"$ 188/mo",
prize2:"$ 99.99/mo",number:"50",
gb:"60gb",
support:"Email support + chat Support",
icons:<AiOutlineCloudUpload/>,
icons2:<AiOutlineUser/>,
icons3:<AiOutlineMail/>,
icon4:<HiOutlinePlay style={{color:"red"}}/>,
color:"red"





},
{
    head:"Premium",
    prize1:"$ 388/mo",
    prize2:"$ 199.99/mo", number:"75",
    gb:"100gb",
    support:"Email + chat + whatsapp Support ",
    icons:<AiOutlineCloudUpload/>,
    icons2:<AiOutlineUser/>,
    icons3:<AiOutlineMail/>,
    icon4:<HiOutlinePlay style={{color:"violet"}}/>,
    color:"violet"


}]

const sidebasrmenu=[{
    name:"Dashbord",
    icons:<LuLayoutDashboard style={{}}/>
},
{
    name:"Perks"
},
{
    name:"Addons"
},
{
    name:"FAQ"
},
{
    name:"Support"
}]
  return (
    <div className='top' style={{ minHeight: "100vh", height: "100%", display: "flex", flexDirection: "column"}}>

        <div className='nav1'>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} >            
           <img src='https://th.bing.com/th/id/R.572e4f51d0a4d67669784df53026b5a7?rik=lv9i04y8yl33Dg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f3%2f33%2fVanamo_Logo.png&ehk=Ix3NOUWRAegY6L3gmUWwTNm0Gee%2faq3jB0ZwGhiKFRk%3d&risl=&pid=ImgRaw&r=0'
           style={{width:"100px",background:"white"}}/>           
           <div style={{width:"100px",background:"white",height:"30px",marginTop:"auto",marginBottom:"auto",marginRight:"40px"}}>
            mm
           </div>
        </div>
        </div>

                <div className='box' style={{ height: '100vh',display:"flex",flexDirection:"row",background:'white',marginRight:"40px",gap:"50px", boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)'}}>
      <div className='sidebar' style={{ height: '100vh', background: 'white',width:"200px",justifyContent:"space-between",display:"flex" ,flexDirection:'column', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'}}>
        <div className='bartopmid'>
        <div className='bartop' style={{height:"200px" , boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <div className='pic' style={{  borderRadius: "50%",width:"100px",background:"red",height:'100px'}}>gg</div>
            <h6 style={{fontSize:"15px",fontWeight:"bolder"}}>Ram mohan</h6>
            <h6 style={{fontSize:"12px",fontWeight:"10px"}}>rammohan2@gmail.com</h6>

        </div>
        <div className='barmid' >
            {
                sidebasrmenu.map((a)=>{
                    return(
                        <div style={{ marginRight:"30px",background:"lightblue",maxWidth:"100%",marginTop:"30px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>
                        <div style={{display:"flex",gap:"20px",alignItems:'center',margin:"auto"}}> <div style={{fontSize:"25px"}}>{a.icons}</div> <h6 style={{fontWeight:"50px"}}>{a.name}</h6></div>
                        </div>
                    )
                })
            }
        
        </div>
        </div>
        <div className='barend' style={{background:'lightblue'}}>logout</div>
      </div>   
       <div className='cardss' style={{display:"flex",justifyContent:"center"}}>
        <div style={{marginTop:"50px"}}>
            <h2   style={{fontWeight:"180px",textAlign:"left",position:"relative"}}>choose a plan that's just right for you !</h2>
            <div  style={{display:"flex",flexDirection:"row",gap:"70px",marginTop:"40px",}}>
                {
                    carditems.map((a)=>{
                        return(
                            <div style={{width:"330px",  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',}} >
                                <div style={{textAlign:"left",margin:"20px",borderBottom:"1px solid grey",marginTop:"30px"}}> <h3 style={{fontWeight:"10px"}}>{a.head}</h3> <h6 style={{fontSize:"10px",textDecoration:"line-through"}}>{a.prize1}</h6> <h4 style={{fontWeight:"inherit",marginTop:"-10px"}}>{a.prize2}</h4>
                                <div style={{width:"50%",background:`${a.color}`,marginBottom:"20px"}}> <div style={{display:"flex",justifyContent:"center",marginLeft:"20px",}}>Get started<HiArrowLongRight style={{marginLeft:"10px",margin:"auto"}}/></div> </div>
                                </div>
                                <div style={{marginLeft:"20px",marginTop:"10px",textAlign:"left"}}>
                                    <h6 style={{fontSize:"10px",textAlign:"left",fontFamily:"initial"}}>what will you get :</h6>
                                   <div style={{display:"flex",gap:"10px"}}><div style={{fontSize:"10px"}}>{a.icons2}</div> <h6 style={{fontSize:"13px",fontWeight:"10px"}}>up to {a.number} usrs</h6></div>
                                   <div style={{display:"flex",gap:"10px"}}><div style={{fontSize:"10px"}}>{a.icons}</div><h6 style={{fontSize:"13px",fontWeight:"10px"}}>up to {a.gb} storage</h6></div>
                                   <div style={{display:"flex",gap:"10px"}}><div style={{fontSize:"10px"}}>{a.icons3}</div><h6 style={{fontSize:"13px",fontWeight:"10px"}}>{a.support}</h6></div>

                                   <h6 style={{fontSize:"13px",fontWeight:"10px"}}> </h6>
                                </div>
                                <h6 style={{textDecoration:"underline",marginBottom:"30px",marginTop:"20px"}}>EXPLORE FEATURES {a.icon4} </h6>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"40px"}}>
                <div style={{width:"47%",display:"flex",flexDirection:"row",gap:"40px",boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)'}}>
                    <div style={{textAlign:"left",marginLeft:"30px",marginTop:"20px"}}>
                    <h6 style={{fontSize:'8px'}}>free for ever</h6>
                    <h4>free starter</h4>
                    <h6 style={{fontSize:'10px'}}>the quickest and easiest way to try protocols <br/>
                    twith basic functionality</h6>
                    <div style={{width:"150px",border:"1px solid grey",display:"flex",justifyContent:'center',marginBottom:'30px'}}> get started</div>
                    </div>
                    <div>mm</div>

                </div>
                <div style={{width:"47%",display:"flex",flexDirection:"row",gap:"40px",boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)'}}>
                    <div style={{textAlign:"left",marginLeft:"30px",marginTop:"20px"}}>
                    <h6 style={{fontSize:'8px'}}>free for ever</h6>
                    <h4>Enterprise plan</h4>
                    <h6 style={{fontSize:'10px'}}>Effortlessly customize and fine-tune service as your <br/>
                    needs shift,ensuring the perfect tools for success</h6>
                    <div style={{width:"150px",border:"1px solid grey",display:"flex",justifyContent:'center',marginBottom:'30px'}}> contact us</div>
                    </div>
                    <div>mm</div>

                </div>
            </div>
            </div>
            </div>   
    </div>
   


        </div>
  )
}

export default Taskone