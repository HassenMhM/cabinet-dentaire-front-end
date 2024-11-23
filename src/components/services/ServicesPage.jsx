import { Service } from "./Service"
import {services} from './data'
export const ServicesPage=()=>{
    return(<>
    <div className="flex text-center bg-gray-200 flex-col" id="services">
        <h3 className="text-3xl font-semibold text-black mb-6">Soins complets selon votre horaire</h3>
        <p className="text-xl font-semibold ">Donner vie à votre sourire</p>
        <div className="grid grid-cols-4 ml-20 mr-20 mt-12">
            {services.map((e)=>{
                return <Service servName={e.name} description={e.description} icon={e.icon} key={e.id}/>
            })}
        </div>
    </div>
    </>)
}
