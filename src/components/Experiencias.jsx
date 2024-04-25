import { dataExperiencias } from "../data/dataExperiencias.js"

export const Experiencias = () => {
    return (
        <section id="experiencias" className="bg-custom-white dark:bg-gray-800 py-8 px-4">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-custom-brown dark:text-custom-orange font-bold text-2xl pb-2 text-center">Nuestras Experiencias</h2>
                <article className="mx-4">
                    {dataExperiencias.map(({ image, title, description }) => {
                        return (
                            <div className="bg-custom-brown mt-4 mb-6 pb-3 shadow-lg shadow-custom-pink dark:shadow-gray-600" key={title}>
                                <picture>
                                    <img src={image} alt="imagen experiencia" className="h-80"/>
                                </picture>
                                <h3 className="dark:text-custum-white text-center py-4 text-custom-white font-semibold text-xl">{title}</h3>
                                <p className="dark:text-gray-800 px-5">{description}</p>
                                <button className="dark:text-gray-700 flex mx-auto bg-custom-white py-1 px-4 rounded-xl border-custom-orange border-2 font-semibold m-4">Reservar</button>
                            </div>
                        )
                    })
                    }
                </article>
            </div>
        </section>
    )
}