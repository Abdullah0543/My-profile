import imghero from './imgh-01.png'
function Hero() {
 return (
   <>
    <div className="flex justify-between items-center py-36 px-24 bg-gradient-to-r from-purple-950 to-purple-900">
        <div>
            <h1 className=" text-white text-4xl font-bold py-5">مرحبا بكم في صفحتي الشخصية</h1>
            <h2 className=" text-white text-2xl font-bold py-3" >أنا عبدالله، مبرمج الواجهات الأمامية!</h2>
            <p className=' text-slate-100 w-2/3  '>أنا مبرمج ملهم يركز على تطوير واجهات المستخدم الرائعة والفعّالة. بدأت رحلتي في عالم البرمجة مع التركيز الشديد على جعل تجربة المستخدم سلسة وجذابة.</p>
            <div className="mt-6 flex gap-4">
                <a className="px-10 py-3  bg-fuchsia-500 text-white rounded-full transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500" href="#">معرض الأعمال</a>
                <a className="px-9 py-3 bg-slate-800 rounded-full text-white transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500" href="#">سيرة ذاتية</a>
            </div>
        </div>
        <div className="">< img src={imghero} alt="imghero" width={500} /></div>
    </div>
   </>
 )
} 

export default Hero