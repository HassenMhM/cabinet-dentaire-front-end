import { useEffect, useState } from "react";
import { User } from "../components/User";

export const Patients = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const fetchUsersByRole = async () => {
        setLoading(true);
        let id=2
        await fetch(`/api/users/role/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setLoading(false);
                setData(result);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error:', error);
            });
    };
    useEffect(() => {
        fetchUsersByRole()
    }, []);
    return (
        <>{data.length>6?<div className="flex h-full bg-gray-100">
            <aside className="w-1/4 bg-blue-600 text-white p-4">
                <h1 className="text-xl font-bold mb-5">Cabinet El Shifa</h1>
                <ul className="space-y-4">
                    <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/users')} >Utilisateurs</li>
                    <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors')}>Medecins</li>
                    <li className="bg-white text-black p-2 rounded">Patients</li>
                    <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/stock')}>Stock</li>
                    <li className="hover:bg-white hover:cursor-pointer hover:text-red p-2 rounded" onClick={()=>window.location.replace('/')}>Déconnecter</li>
                </ul>
            </aside>
            <main className="w-3/4 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Gestion des patients</h2>
                </div>
                <table className="w-full bg-white rounded shadow">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 text-left">Id</th>
                            <th className="p-4 text-left">Nom d&apos;utilisateur</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length>0 && data.map((u, key) => (
                            <User
                                id={u.id}
                                key={key}
                                username={u.username}
                                email={u.email}
                            />
                        ))}
                    </tbody>
                </table>
                {loading && <p className="text-blue-600 p-4 text-center">Chargement des patients...</p>}
            </main>
        </div>:<div className="flex h-screen bg-gray-100">
            <aside className="w-1/4 bg-blue-600 text-white p-4">
                <h1 className="text-xl font-bold mb-5">Cabinet El Shifa</h1>
                <ul className="space-y-4">
                    <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/users')} >Utilisateurs</li>
                    <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors')}>Medecins</li>
                    <li className="bg-white text-black p-2 rounded">Patients</li>
                    <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/stock')}>Stock</li>
                    <li className="hover:bg-white hover:cursor-pointer hover:text-red-600 p-2 rounded" onClick={()=>window.location.replace('/')}>Déconnecter</li>
                </ul>
            </aside>
            <main className="w-3/4 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Gestion des patients</h2>
                </div>
                <table className="w-full bg-white rounded shadow">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 text-left">Id</th>
                            <th className="p-4 text-left">Nom d&apos;utilisateur</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length>0 && data.map((u, key) => (
                            <User
                                id={u.id}
                                key={key}
                                username={u.username}
                                email={u.email}
                            />
                        ))}
                    </tbody>
                </table>
                {loading && <p className="text-blue-600 p-4 text-center">Chargement des patients...</p>}
                {!loading && data.length === 0 && (
                    <p className="text-red-600 p-4 text-center">Aucun patients trouvé</p>
                )}
            </main>
        </div>}</>
    );
};
