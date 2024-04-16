export const Newsletter = () => {
    return (
        <article>
            <h3 className="text-lg font-semibold text-center">Suscríbete a nuestra newsletter</h3>
            <p className='px-4'>Recibe todas las semanas un correo con tips para seguir explorando tu creatividad</p>
            <form action="#" className='bg-custom-orange m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-pink mb-6 rounded-xl'>
                <label htmlFor="email">Ingresa tu correo</label>
                <input type="email" placeholder="ingresa tu correo" className='p-2' />
                <button type="submit" className='bg-custom-pink w-min py-2 px-4 rounded-xl border-custom-brown border-2 mt-3 mx-auto font-semibold'>Suscríbete</button>
            </form>
        </article>
    )
}