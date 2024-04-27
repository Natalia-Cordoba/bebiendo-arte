import { fotos } from "../data/fotos.js";

export const GaleriaFotos = () => {
    return (
        <section className="my-8 flex w-full md:max-w-4xl h-72 border-8 border-gray-700 dark:border-gray-900 shadow-xl shadow-gray-700">
            {fotos.map(({ name, url, description }) => {
                return (
                    <img
                        key={name}
                        src={url}
                        alt={description}
                        className="w-0 grow object-cover opacity-50 transition ease-in duration-500 hover:w-40 hover:opacity-100 hover:filter hover:contrast-120"
                    />
                )
            })
            }
        </section>
    );
};

