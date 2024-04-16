import { dataOpiniones } from "../data/dataOpiniones.js"

export const Opiniones = () => {
    return (
        <section id="opiniones" className="bg-custom-orange py-8 px-4">
            <h2 className="text-gray-700 font-bold text-2xl pb-5 text-center">Sus opiniones</h2>
            <article>
                {dataOpiniones.map(({ image, name, opinion }) => {
                    return (
                        <div className="flex relative" key={name}>
                            <picture className="absolute -top-2 -right-2">
                                <img src={image} alt="imagen experiencia" className="rounded-full w-16 h-16 border-2 border-custom-pink" />
                            </picture>
                            <div className="flex-col bg-custom-white p-2 mb-5 rounded-xl text-left border-2 border-custom-pink">
                                <h3 className="font-semibold text-custom-brown">{name}</h3>
                                <p className="px-5">{opinion}</p>
                            </div>
                        </div>
                    )
                })
                }
            </article>
        </section>
    )
}