
import Cards from "./cards"
function exhibition() {
    return (
        <>
          
            <div className='text-center'><h2 className='px-11 py-5 border-b text-xl font-bold mt-36'>معرض الأعمال</h2></div>

            <div className='mt-10 py-10 px-5  flex gap-9 justify-center flex-wrap '> 
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
               <Cards />
            </div>
        </>
    )
}

export default exhibition