export const Newsletter = () => {
    return (
        <article className="md:flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-semibold text-center text-custom-pink mb-4">Suscríbete a nuestra newsletter</h3>
            <p className='px-4 mx-auto max-w-xs md:mt-2'>Recibe todas las semanas un correo con tips para seguir explorando tu creatividad.</p>
            <form action="#" className='max-w-xs mx-auto bg-custom-orange m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-pink dark:shadow-gray-600 mb-8 rounded-xl md:mt-8'>
                <label htmlFor="email" className="dark:text-gray-800">Ingresa tu correo</label>
                <input type="email" placeholder="ingresa tu correo" className='p-2 rounded-md' />
                <button type="submit" className='bg-custom-pink w-min py-2 px-4 rounded-xl border-custom-brown border-2 mt-3 mx-auto font-semibold dark:text-gray-800'>Suscríbete</button>
            </form>
        </article>
    )
}