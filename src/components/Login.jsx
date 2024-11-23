export const Login=()=>{
    return(
    <>
    <div className="flex justify-between bg-blue-400 pb-16">
        <div className="flex flex-col text-xl justify-start  text-white p-20 pt-36">
            <h1>Nouveau patient</h1>
            <p className="text-xl mt-9 max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium id animi amet cupiditate <br />quae ex, rerum consectetur dolorum ratione sunt ipsa repellat commodi voluptatum rem  laboriosam voluptatibus. Fugiat, minus.</p>
            <div className="text-2xl font-bold mt-8"><p><i className="fa-solid fa-phone mr-3"></i>Besoin d&apos;aide?</p></div>
            <p className="text-2xl font-bold mt-4">+(213)0561037192</p>
        </div>
        <div className=" form w-1/2">
            <form action="" className="flex flex-col  mr-44 ml-24 mt-28 bg-white p-14 pt-7 rounded-2xl">
                <div className="flex  justify-center">
                    <i className="fa-regular fa-user text-6xl text-center mb-5 mt-0 text-blue-400 bg-gray-100 rounded-full p-2"></i>
                </div>
                <input type="text" className='bg-gray-50  p-2 border-solid border-2 border-gray-200  mb-8 text-lg'placeholder="Entrez votre numero de telephone" required/>
                <input type="password" className="bg-gray-50 border-solid border-2 border-gray-200 p-2 mb-8 text-lg " placeholder="Entrez votre mot de passe" required/>
                <button className="bg-blue-400 text-white">Se connecter</button>
                <p className="text-black text-base  mt-7 ml-2">T&apos;as pas un compte ? <a href="#">S&apos;identifier</a></p>
            </form>
        </div>
    </div>
    </>)
}