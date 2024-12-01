import {gallery} from '../utils/gallery.js'
export const Gallery=()=>{
    return(
    <>
    <div className="gallery flex flex-col pl-20 pr-20 pt-20 bg-gray-200">
        <h1 className="text-3xl font-semibold text-black mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-5 m-0 gap-1 p-3 justify-center">
            {gallery.map((img,index)=>{
                return(<img src={`${img}`} className='w-52' key={index}/>)
            })}
        </div>
        <div className="flex flex-col">
            <h1 className="text-3xl font-semibold text-black mb-8 text-center">Nous resultats</h1>
            <div className="flex flex-col">
                <img src="/src/assets/gallery/5913784618287481817.jpg" alt="" />
                <img src="/src/assets/gallery/5913784618287481818.jpg" alt="" />
                <img src="/src/assets/gallery/5913784618287481819.jpg" alt="" />
                <img src="/src/assets/gallery/5913784618287481820.jpg" alt="" />
            </div>
        </div>
    </div>
    </>)
}