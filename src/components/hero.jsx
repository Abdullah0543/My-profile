import imghero from './imgh.png'
function Hero() {
 return (
   <>
    <div className="container flex justify-between items-center gap-5 m-auto pt-28 px-10">
        <div>
            <h1 className="text-3xl font-bold py-3">مرحبًا يكم في صفحتي الشخصية</h1>
            <h2 className="text-3x1 font-bold py-1" >أنا عبدالله، مبرمج الواجهات الأمامية!</h2>
            <p className='w-2/3  '>أنا مبرمج ملهم يركز على تطوير واجهات المستخدم الرائعة والفعّالة. بدأت رحلتي في عالم البرمجة مع التركيز الشديد على جعل تجربة المستخدم سلسة وجذابة.</p>
            <div className="mt-6 flex gap-4">
                <a className="px-8 py-3 bg-slate-950 rounded-full text-white" href="#">معرض الأعمال</a>
                <a className="px-8 py-3 bg-slate-950 rounded-full text-white" href="#">سيرة ذاتية</a>
            </div>
        </div>
        <div><img src={imghero} alt="imghero" width={500} /></div>
    </div>
   </>
 )
} 

export default Hero