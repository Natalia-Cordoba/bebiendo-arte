import { dataOpiniones } from "../data/dataOpiniones.js"

export const Opiniones = () => {
    return (
        <section id="opiniones" className="bg-custom-orange dark:bg-gray-800 pt-6 px-4">
            <div className="mx-auto max-w-5xl">
                <h2 className="font-custom-font text-gray-600 dark:text-custom-orange font-bold text-3xl md:text-4xl pb-6 text-center">Sus opiniones</h2>
                <article className="flex flex-col items-center">
                    {dataOpiniones.map(({ image, name, opinion }) => {
                        return (
                            <article className="flex relative mb-3 mx-4 md:w-2/3" key={name}>
                                <picture className="absolute -top-5 -right-2">
                                    <img src={image} alt="imagen experiencia" className="object-cover rounded-full w-16 h-16 md:w-20 md:h-20 border-2 border-custom-pink" />
                                </picture>
                                <div className="flex-col bg-custom-white p-2 mb-5 rounded-xl text-left border-2 border-custom-pink">
                                    <h3 className="font-custom-font font-semibold text-custom-brown text-lg md:text-xl">{name}</h3>
                                    <p className="px-5 md:px-10 dark:text-gray-800">{opinion}</p>
                                </div>
                            </article>
                        )
                    })
                    }
                </article>
            </div>
        </section>
    )
}