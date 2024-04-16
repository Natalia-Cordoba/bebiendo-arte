export const Formulario = () => {
    return (
        <article>
            <h3 className="text-lg font-semibold text-center">Reserva tu experiencia</h3>
            <form action="#" className="bg-custom-pink m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-brown mb-6 rounded-xl">
                <label htmlFor="nombre">Ingresa tu nombre</label>
                <input type="text" placeholder="ingresa tu nombre" className="p-2" />
                <label htmlFor="email">Ingresa tu correo</label>
                <input type="email" placeholder="ingresa tu correo" className="p-2" />
                <label htmlFor="mensaje">Ingresa tu mensaje</label>
                <textarea name="mensaje" defaultValue={"ingresa tu mensaje"} id="mensaje" cols="30" rows="10" className="p-2 text-gray-400" />
                <button type="submit" className="bg-custom-orange w-min py-2 px-4 rounded-xl border-custom-brown border-2 mt-3 mx-auto font-semibold">Reservar</button>
            </form>
        </article>
    )
}