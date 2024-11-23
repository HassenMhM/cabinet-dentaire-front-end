import photo_1 from '../assets/cabinet-photo-1.jpg'
import photo_2 from '../assets/cabinet-photo-2.jpg'
import photo_3 from '../assets/cabinet-photo-3.jpg'
import photo_4 from '../assets/cabinet-photo-4.jpg'
export const AproposPage=()=>{
    return(
    <>
    <div className="flex justify-between bg-gray-200 mt-48 p-16" id='apropos'>
        <div className="flex flex-col max-w-3xl pr-24 border border-solid ">
            <h1 className="text-3xl font-semibold text-black mb-8 ">Bienvenue dans notre cabinet dentaire</h1>
            <p>
                notre cabinet dentaire a été fondé en 2022 dans Blida , inspiré par la volonté d’apporter des soins dentaires de qualité à la communauté locale. Tout a commencé avec le rêve d’un jeune dentiste algérien, qui, après des années de formation rigoureuse et d`&apos;`expérience dans plusieurs cliniques à travers le pays, a ressenti le besoin de revenir à ses racines pour servir sa communauté.

                Ayant grandi dans une famille où la santé et le bien-être des autres étaient une priorité, le fondateur a vu de près les défis auxquels de nombreuses familles faisaient face pour accéder à des soins dentaires fiables et abordables. Ce vécu a éveillé en lui le désir de créer un espace où les patients, quel que soit leur âge ou leur statut, se sentiraient accueillis et traités avec dignité.

                Dès l’ouverture du cabinet, l’objectif a été d’allier tradition et innovation. Des méthodes de soin modernes ont été introduites, tout en conservant un profond respect pour les valeurs algériennes d`&apos;`hospitalité et de chaleur humaine. Le cabinet s’est rapidement forgé une réputation grâce à une équipe dévouée, composée de professionnels passionnés qui placent l’humain au cœur de chaque intervention.

                Au fil des années, le cabinet est devenu un pilier de la communauté, toujours fidèle à sa mission : offrir des soins dentaires accessibles et de haute qualité, dans un environnement empreint de respect et d’empathie. Avec des innovations constantes et une attention particulière aux besoins de chaque patient, le cabinet continue de travailler avec dévouement pour assurer des sourires sains et radieux à travers toute la région.

            </p>
        </div>
        <div className="grid grid-cols-2 pl-14">
            <img src={photo_1} className='w-72 p-2' alt="photo" />
            <img src={photo_2} className='w-96 pt-2' alt="photo" />
            <img src={photo_3} className='w-72 p-4' alt="photo" />
            <img src={photo_4} className='w-80 pt-4' alt="photo" />
        </div>
    </div>
    </>)
}