import { dataExperiencias } from "../data/dataExperiencias.js"

export const Experiencias = () => {
    return (
        <section id="experiencias" className="bg-custom-white py-8 px-4">
            <h2 className="text-custom-brown font-bold text-2xl pb-2 text-center">Nuestras Experiencias</h2>
            <article>
                {dataExperiencias.map(({ image, title, description }) => {
                    return (
                        <div className="bg-custom-brown mt-4 mb-6 pb-3" key={title}>
                            <picture>
                                <img src={image} alt="imagen experiencia" />
                            </picture>
                            <h3 className="text-center py-4 text-custom-white font-semibold text-xl">{title}</h3>
                            <p className="px-5">{description}</p>
                            <button className="flex mx-auto bg-custom-white py-1 px-4 rounded-xl border-custom-orange border-2 font-semibold m-4">Reservar</button>
                        </div>
                    )
                })
                }
            </article>
        </section>
    )
}