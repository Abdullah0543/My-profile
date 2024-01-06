import { BiPaperPlane } from "react-icons/bi";
import { BiLogoSnapchat } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.css"

export default function Footer(){
    return(
        <>
         <div className=" bg-slate-100 grid justify-center gap-3 text-center py-9 px-20">


         <div className=" text-slate-500 flex gap-3 justify-center p-4">


          <a className="my-icons hover:text-slate-900"href=""><BiPaperPlane/></a>
          <a className="my-icons hover:text-slate-900" href=""><BiLogoSnapchat /></a>
          <a className="my-icons hover:text-slate-900" href=""><FaGithub /></a>
          <a className="my-icons hover:text-slate-900" href=""><FaXTwitter /></a>
          <a className="my-icons hover:text-slate-900" href=""><BiLogoInstagram /></a>
          <a className="my-icons hover:text-slate-900" href=""><FaWhatsapp /></a>
  
          
            
         </div>



         <ul className=" flex gap-5 max-sm:hidden ">
          <li><a className="text-s max-md:text-sm " href="#">الصفحة الرئسية</a></li>
          <li><a className="text-s max-md:text-sm" href="#">معرض الأعمال</a></li>
          <li><a className="text-s max-md:text-sm" href="#">مقالات ومدونة</a></li>
          <li><a className="text-s max-md:text-sm" href="#">سيرة ذاتية</a></li>
        </ul>
            
        <div className=" grid text-center py-3">&copy; Copyright 2024 </div>
         </div>
        
        </>
    )
}