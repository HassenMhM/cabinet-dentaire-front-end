/* eslint-disable react/prop-types */
export const Service=(props)=>{
    return(<>
    <div className="flex flex-col bg-gray-100 p-6 pt-8 pb-8 m-4 text-center relative">
        <i className={`${props.icon} text-blue-500 text-5xl absolute -top-6 bg-gray-300 rounded-3xl `} style={{left:"105px"}}></i>
        <h4 className="text-2xl text-black mb-4">{props.servName}</h4>
        <p className="">{props.description.slice(0,100)+'...'}</p>
    </div>
    </>)
}