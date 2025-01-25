

export const AdminPage=()=>{
    const members = [
    {
        id: 1,
        fullname: "Mr. Nolan Oberbrunner",
        email: "otilia.grimes@considine.com",
        createdAt: "2022-09-10 16:52:51",
    },
    {
        id: 2,
        fullname: "Wade Abbott",
        email: "vergie51@predovic.biz",
        createdAt: "2022-09-10 16:52:51",
    },
    {
        id: 3,
        fullname: "Erika Yundt",
        email: "emma73@tromp.info",
        createdAt: "2022-09-10 16:52:51",
    },
    ];
    return (
    <div className="flex h-screen bg-gray-100">
        <aside className="w-1/4 bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold mb-4">Cabinet El Shifa</h1>
        <ul className="space-y-4">
            <li className="hover:bg-white hover:text-black p-2 rounded">Utilisateurs</li>
            <li className="hover:bg-white hover:text-black p-2 rounded">Medecins</li>
            <li className="bg-white text-black p-2 rounded">Patients</li>
            <li className="hover:bg-white hover:text-black p-2 rounded">Stock</li>
            <li className="hover:bg-white hover:text-black p-2 rounded">Déconnecter</li>
        </ul>
        </aside>
        <main className="w-3/4 p-6">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Patients</h2>
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
                <th className="p-4 text-left">Username</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Created At</th>
                <th className="p-4 text-left">Action</th>
            </tr>
            </thead>
            <tbody>
            {members.map((member) => (
                <tr key={member.id} className="hover:bg-gray-100">
                    <td className="p-4">{member.id}</td>
                    <td className="p-4">{member.fullname}</td>
                    <td className="p-4">{member.email}</td>
                    <td className="p-4">{member.createdAt}</td>
                    <td className="p-4 text-red-600 cursor-pointer">Supprimer</td>
                </tr>
            ))}
            </tbody>
        </table>
        </main>
    </div>
    );
}
