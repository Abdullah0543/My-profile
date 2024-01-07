import "./nav.css"
export default function Nav() {
  return (
    <>
      <nav className="px-11 py-5 absolute top-3 ">


        <div className="hidden max-sm:block">
          <input className="label-check" id="label-check" type="checkbox" />
            <label htmlFor ="label-check" className="hamburger-label">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              <label></label></label></div>





        <ul className="flex gap-4 max-sm:hidden">
          <li><a className=" texts text-s max-md:text-sm " href="#">الصفحة الرئسية</a></li>
          <li><a className=" texts text-s max-md:text-sm " href="#">مهاراتي</a></li>
          <li><a className=" texts text-s max-md:text-sm " href="#">معرض الأعمال</a></li>
          <li><a className=" texts text-s max-md:text-sm " href="#">مقالات ومدونة</a></li>
          <li><a className=" texts text-s max-md:text-sm " href="#">سيرة ذاتية</a></li>
          <li><a className=" texts text-s max-md:text-sm " href="#">تواصل معي</a></li>
        </ul>
      </nav>
    </>
  )
}


