import { fotos } from "../data/fotos.js";

export const GaleriaFotos = () => {
    return (
        <section className="flex w-full h-60">
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

