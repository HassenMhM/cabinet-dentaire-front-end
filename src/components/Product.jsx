/* eslint-disable react/prop-types */
export const Product=(props)=>{
    return(<>
    <tr key={props.id} className="hover:bg-gray-100">
        <td className="p-4">{props.id}</td>
        <td className="p-4">{props.product_name}</td>
        <td className="p-4">{props.quantity}</td>
        <td className="p-4">{props.expiration_date}</td>
        <td className="p-4">{props.supplier_id}</td>
        <td className="p-4">{props.alert_threshold}</td>
        <td className="p-4 text-blue-600">Modifier</td>
        <td className="p-4 text-red-600">Supprimer</td>
    </tr>
    </>)
}