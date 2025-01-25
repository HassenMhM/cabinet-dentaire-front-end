/* eslint-disable react/prop-types */
export const User=(props)=>{
    return(<>
    <tr key={props.id} className="hover:bg-gray-100">
        <td className="p-4">{props.id}</td>
        <td className="p-4">{props.username}</td>
        <td className="p-4">{props.email}</td>
        <td className="p-4 text-red-600">Supprimer</td>
    </tr>
    </>)
}