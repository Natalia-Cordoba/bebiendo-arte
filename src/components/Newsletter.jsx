export const Newsletter = () => {
    return (
        <article className="md:flex flex-col items-center">
            <h3 className="font-custom-font text-lg md:text-xl font-semibold text-center text-custom-brown mb-4">Suscríbete a nuestra newsletter</h3>
            <p className='px-4 mx-auto max-w-xs md:mt-2'>Recibe todas las semanas un correo con tips para seguir explorando tu creatividad.</p>
            <form action="#" className='max-w-xs mx-auto bg-custom-orange m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-pink dark:shadow-gray-600 mb-8 rounded-xl md:mt-8'>
                <label htmlFor="email" className="dark:text-gray-800">Ingresa tu correo</label>
                <input type="email" placeholder="ingresa tu correo" className='p-2 rounded-md text-gray-600'/>
                <button type="submit" className='font-custom-font bg-custom-pink hover:bg-custom-white w-min py-2 px-4 rounded-xl border-custom-brown hover:border-custom-pink border-2 mt-3 mx-auto font-semibold hover:font-bold dark:text-gray-800 hover:text-gray-600 hover:dark:text-gray-600 transition-colors'>Suscríbete</button>
            </form>
        </article>
    )
}