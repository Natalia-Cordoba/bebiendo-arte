export const Formulario = () => {
    return (
        <article>
            <h3 className="text-lg md:text-xl font-semibold text-center text-custom-pink mb-6">Reserva tu experiencia</h3>
            <form action="#" className="max-w-xs mx-auto bg-custom-pink m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-brown dark:shadow-gray-600 mb-8 rounded-xl">
                <label htmlFor="nombre" className="dark:text-gray-800">Ingresa tu nombre</label>
                <input type="text" placeholder="ingresa tu nombre" className="p-2 rounded-md text-gray-600" />
                <label htmlFor="email" className="dark:text-gray-800">Ingresa tu correo</label>
                <input type="email" placeholder="ingresa tu correo" className="p-2 rounded-md text-gray-600" />
                <label htmlFor="mensaje" className="dark:text-gray-800">Ingresa tu mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10" className="p-2 rounded-md text-gray-600" />
                <button type="submit" className="bg-custom-orange hover:bg-custom-white w-min py-2 px-4 rounded-xl border-custom-brown hover:border-custom-orange border-2 mt-3 mx-auto font-semibold hover:font-bold dark:text-gray-800 hover:text-gray-700 hover:dark:text-gray-700 transition-colors">Reservar</button>
            </form>
        </article>
    )
}