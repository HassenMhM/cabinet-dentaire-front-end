import {gallery_1} from '../utils/gallery.js'
import {gallery_2} from '../utils/gallery.js'
export const Gallery=()=>{
    return(
    <>
    <div className="gallery flex flex-col pl-20 pr-20 pt-20 bg-gray-200" id='gallery'>
        <h1 className="text-3xl font-semibold text-black mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-5 m-0 gap-4 p-6 justify-center">
            {gallery_1.map((img,index)=>{
                return(<div key={index} className='p-2 hover:scale-110 transition-all duration-300' style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}}><img src={`${img}`} className='w-52' key={index}/></div>)
            })}
        </div>
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-black mb-8 mt-4 text-center">Nous resultats</h1>
            <div className="grid grid-cols-5 m-0 gap-4 p-6 justify-center">
                {gallery_2.map((img,index)=>{
                    return(<div className='p-2 hover:scale-110 transition-all duration-300' style={{boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}} key={index}><img src={`${img}`} key={index}  alt="" /></div>)
                })}
            </div>
        </div>
    </div>
    </>)
}