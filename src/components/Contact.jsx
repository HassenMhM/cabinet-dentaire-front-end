export const Contact = ()=>{
    return (
        <>
    <div className="bg-gray-200 text-gray-800 pt-20 min-h-screen">
      <header className="bg-blue-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Contactez-nous</h1>
        <p className="text-lg">Nous sommes à votre écoute pour toutes vos questions</p>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Envoyez-nous un message</h2>
            <form onSubmit={onsubmit}>
              <div className="mb-4">
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Envoyer
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>
            <p className="mb-2"><strong>Adresse :</strong> 123 Rue de monpossier, Blida</p>
            <p className="mb-2">
                <strong>Téléphone :</strong>{" "}
                    <a
                        href="tel:+213561037192"
                        className="text-blue-600 underline hover:text-blue-800">
                        +213 5 61 03 71 92
                    </a>
            </p>
            <p className="mb-2">
                <strong>Email :</strong>{" "}
                    <a 
                        href="mailto:mohamedbm7777@gmail.com"
                        className="text-blue-600 underline hover:text-blue-800"> 
                        mohamedbm7777@gmail.com 
                    </a>
             </p>
            <iframe
              className="w-full h-64 rounded-md shadow-md"
              src="https://www.google.dz/maps/place/36%C2%B029'33.8%22N+2%C2%B049'21.9%22E/@36.4927333,2.8201601,17z/data=!3m1!4b1!4m13!1m8!3m7!1s0x128f0c66865a4cd1:0xccfcf9c073646dfe!2sBlida!3b1!8m2!3d36.4735715!4d2.8323153!16zL20vMDRyZG1q!3m3!8m2!3d36.492729!4d2.822735?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      
    </div>
    <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Cabinet Dentaire. Tous droits réservés.</p>
      </footer>
        </>
    )
}