import { useEffect, useState } from "react";
import { Product } from "../components/Product";
export const Stock=()=> {
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const getAllProducts=async ()=>{
        setLoading((prev)=>!prev)
        await fetch('/api/stock',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            },
            })
            .then((response) => response.json()) 
            .then((result) => {
                setLoading((prev)=>!prev)
                setData(result)
            })
            .catch((error) => {
                console.error('Error:', error);
        });
    }
    useEffect(()=>{getAllProducts()},[])
    return (
    <>{data.length<6?<div className="flex h-screen bg-gray-100">
        <aside className="w-1/4 bg-blue-600 text-white p-4 ">
            <h1 className="text-xl font-bold mb-5">Cabinet El Shifa</h1>
            <ul className="space-y-4">
                <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/users')} >Utilisateurs</li>
                <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors')}>Medecins</li>
                <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/patients')}>Patients</li>
                <li className="bg-white text-black p-2 rounded">Stock</li>
                <li className="hover:bg-white hover:cursor-pointer hover:text-red-600 p-2 rounded" onClick={()=>window.location.replace('/')}>Déconnecter</li>
            </ul>
        </aside>
        <main className="w-3/4 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Gestion de Stock</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                    Ajouter un produit
                </button>
            </div>
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-4 text-left">Id</th>
                        <th className="p-4 text-left">Nom du Produit</th>
                        <th className="p-4 text-left">Quantité</th>
                        <th className="p-4 text-left">Date d&apos;expiration</th>
                        <th className="p-4 text-left">Fournisseur ID</th>
                        <th className="p-4 text-left">Seuil d&apos;Alerte</th>
                        <th className="p-4 text-left">Modifier</th>
                        <th className="p-4 text-left">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {loading==false&&data.map((p,key)=>{
                        return(<Product id={p.id} key={key} product_name={p.product_name} quantity={p.quantity}
                            expiration_date={p.expiration_date.substring(0,10)}
                            supplier_id={p.supplier_id}
                            alert_threshold={p.alert_threshold} />)
                    })}
                </tbody>
            </table>
            {loading&&<p className="text-blue-600 p-4 text-center">Chargements des produits...</p>}
            {loading==false&&data.length==0&&<p className="text-red-600 p-4 text-center">Aucun produits dans le stock</p>}
        </main>
    </div>:<div className="flex h-full bg-gray-100">
        <aside className="w-1/4 bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold mb-4">Cabinet El Shifa</h1>
            <ul className="space-y-4">
                <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/users')} >Utilisateurs</li>
                <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors')}>Medecins</li>
                <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/patients')}>Patients</li>
                <li className="bg-white text-black p-2 rounded">Stock</li>
                <li className="hover:bg-white hover:cursor-pointer hover:text-red-600 p-2 rounded" onClick={()=>window.location.replace('/')}>Déconnecter</li>
            </ul>
        </aside>
        <main className="w-3/4 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Gestion de Stock</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                    Ajouter un produit
                </button>
            </div>
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <table className="w-full bg-white rounded shadow">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="p-4 text-left">Id</th>
                        <th className="p-4 text-left">Nom du Produit</th>
                        <th className="p-4 text-left">Quantité</th>
                        <th className="p-4 text-left">Date d&apos;expiration</th>
                        <th className="p-4 text-left">Fournisseur ID</th>
                        <th className="p-4 text-left">Seuil d&apos;Alerte</th>
                        <th className="p-4 text-left">Modifier</th>
                        <th className="p-4 text-left">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    {loading==false&&data.map((p,key)=>{
                        return(<Product id={p.id} key={key} product_name={p.product_name} quantity={p.quantity}
                            expiration_date={p.expiration_date.substring(0,10)}
                            supplier_id={p.supplier_id}
                            alert_threshold={p.alert_threshold} />)
                    })}
                </tbody>
            </table>
            {loading&&<p className="text-blue-600 p-4 text-center">Chargements des produits...</p>}
            {loading==false&&data.length==0&&<p className="text-red-600 p-4 text-center">Aucun produits dans le stock</p>}
        </main>
    </div>}</>
    );
}
