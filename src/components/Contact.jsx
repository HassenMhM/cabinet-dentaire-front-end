export const Contact = ()=>{
    return (
        <>
    <div className="bg-gray-200 text-gray-800 pt-20 min-h-screen" id='contact'>
      <header className="text-center py-6">
        <h1 className="text-3xl font-semibold text-black">Contactez-nous</h1>
        <p className="text-lg text-black">Nous sommes à votre écoute pour toutes vos questions</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25664.97445131087!2d2.82779735!3d36.478773999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1734890701616!5m2!1sfr!2sdz" allowfullscreen="" loading="lazy" className="w-full h-64 rounded-md shadow-md" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </main>

      
    </div>
        </>
    )
}