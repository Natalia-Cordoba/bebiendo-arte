import { dataExperiencias } from "../data/dataExperiencias.js"

export const Experiencias = () => {
    return (
        <section id="experiencias" className="bg-custom-white dark:bg-gray-800 py-8 px-4">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-gray-600 dark:text-custom-orange font-bold text-3xl md:text-4xl pb-4 text-center">Nuestras Experiencias</h2>
                <article className="mx-4 md:flex md:justify-center">
                    {dataExperiencias.map(({ image, title, icon, subtitle, description }) => {
                        return (
                            <div className="max-w-xs mx-auto md:mx-6 bg-custom-brown border-2 border-custom-pink rounded-md mt-4 mb-6 pb-3 shadow-lg shadow-custom-pink dark:shadow-gray-600" key={title}>
                                <picture>
                                    <img src={image} alt="imagen experiencia" className="h-64 w-full object-cover rounded-t-md" />
                                </picture>
                                <div className="flex gap-2 justify-center">
                                    <h3 className="dark:text-custom-white text-center py-4 text-custom-white font-semibold text-xl">{title}</h3>
                                    <img src={icon} alt="icono bebida" />
                                </div>
                                <p className="text-custom-white px-5 font-semibold">{subtitle}</p>
                                <p className="dark:text-gray-800 px-5">{description}</p>
                                <a
                                    href="/#contacto"
                                    className="dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-600 flex mx-auto bg-custom-white hover:bg-custom-orange border-custom-orange border-2 hover:border-custom-white py-1 px-4 rounded-xl font-semibold hover:font-bold m-4 max-w-fit"
                                >
                                    Reservar
                                </a>
                            </div>
                        )
                    })
                    }
                </article>
            </div>
        </section>
    )
}