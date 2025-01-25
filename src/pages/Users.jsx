import { useEffect, useState } from "react";
import { User } from "../components/User";

export const Users = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const getAllUsers = async () => {
        setLoading((prev) => !prev);
        await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((result) => {
                setLoading((prev) => !prev);
                setData(result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    useEffect(() => { getAllUsers() }, []);

    return (
        <>
            {data.length < 6 ? (
                <div className="flex h-screen bg-gray-100">
                    <aside className="w-1/4 bg-blue-600 text-white p-4">
                        <h1 className="text-xl font-bold mb-5">Cabinet El Shifa</h1>
                        <ul className="space-y-4">
                            <li className="bg-white text-black p-2 rounded">Utilisateurs</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors')}>Medecins</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/patients')}>Patients</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/stock')}>Stock</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-red-600 p-2 rounded" onClick={()=>window.location.replace('/')}>Déconnecter</li>
                        </ul>
                    </aside>
                    <main className="w-3/4 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Gestion des Utilisateurs</h2>
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
                                    <th className="p-4 text-left">Nom d&apos;utilisateur</th>
                                    <th className="p-4 text-left">Email</th>
                                    <th className="p-4 text-left">Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading == false && data.map((u, key) => {
                                    return (
                                        <User
                                            id={u.id}
                                            key={key}
                                            username={u.username}
                                            email={u.email}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                        {loading && <p className="text-blue-600 p-4 text-center">Chargement des utilisateurs...</p>}
                        {loading == false && data.length == 0 && <p className="text-red-600 p-4 text-center">Aucun utilisateur trouvé</p>}
                    </main>
                </div>
            ) : (
                <div className="flex h-full bg-gray-100">
                    <aside className="w-1/4 bg-blue-600 text-white p-4">
                        <h1 className="text-xl font-bold mb-4">Cabinet El Shifa</h1>
                        <ul className="space-y-4">
                            <li className="bg-white text-black p-2 rounded">Utilisateurs</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/doctors')}>Medecins</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/patients')}>Patients</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-black p-2 rounded" onClick={()=>window.location.replace('/admin01346220134641354652dlhh211522hutfdty31115cxfcf521310fxfxfxyyyzadmin667528274152/stock')}>Stock</li>
                            <li className="hover:bg-white hover:cursor-pointer hover:text-red-600 p-2 rounded" onClick={()=>window.location.replace('/')}>Déconnecter</li>
                        </ul>
                    </aside>
                    <main className="w-3/4 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Gestion des Utilisateurs</h2>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
                                Ajouter un utilisateur
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
                                    <th className="p-4 text-left">Nom d&apos;utilisateur</th>
                                    <th className="p-4 text-left">Email</th>
                                    <th className="p-4 text-left">Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading == false && data.map((u, key) => {
                                    return (
                                        <User
                                            id={u.id}
                                            key={key}
                                            username={u.username}
                                            email={u.email}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                        {loading && <p className="text-blue-600 p-4 text-center">Chargement des utilisateurs...</p>}
                        {loading == false && data.length == 0 && <p className="text-red-600 p-4 text-center">Aucun utilisateur trouvé</p>}
                    </main>
                </div>
            )}
        </>
    );
};
