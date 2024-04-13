import instagram from '../assets/icons/instagram.svg'
import email from '../assets/icons/email.svg'

export const Contacto = () => {
    return (
        <section id="contacto" className="bg-custom-white py-8 px-4">
            <h2 className="text-custom-brown font-bold text-2xl pb-2 text-center">Contacto</h2>
            <article>
                <h3 className="text-lg font-semibold text-center">Reserva tu experiencia</h3>
                <form action="#" className="bg-custom-pink m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-brown mb-6 rounded-xl">
                    <label htmlFor="nombre">Ingresa tu nombre</label>
                    <input type="text" placeholder="ingresa tu nombre" className="p-2"/>
                    <label htmlFor="email">Ingresa tu correo</label>
                    <input type="email" placeholder="ingresa tu correo" className="p-2"/>
                    <label htmlFor="mensaje">Ingresa tu mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="10" className="p-2 text-gray-400">Deja tu mensaje aquí</textarea>
                    <button type="submit" className="bg-custom-orange w-min py-2 px-4 rounded-xl border-custom-brown border-2 mt-3 mx-auto font-semibold">Reservar</button>
                </form>
            </article>
            <aside>
                <article>
                    <h3 className="text-lg font-semibold text-center">Suscríbete a nuestra newsletter</h3>
                    <p className='px-4'>Recibe todas las semanas un correo con tips para seguir explorando tu creatividad</p>
                    <form action="#" className='bg-custom-orange m-4 p-4 flex flex-col gap-1 shadow-lg shadow-custom-pink mb-6 rounded-xl'>
                        <label htmlFor="email">Ingresa tu correo</label>
                        <input type="email" placeholder="ingresa tu correo" className='p-2'/>
                        <button type="submit" className='bg-custom-pink w-min py-2 px-4 rounded-xl border-custom-brown border-2 mt-3 mx-auto font-semibold'>Suscríbete</button>
                    </form>
                </article>
                <article>
                    <h3 className="text-lg font-semibold text-center">También nos puedes contactar por</h3>
                    <ul>
                    <a 
                        href="https://www.instagram.com/" 
                        target='_blank'
                        className='flex gap-2 pl-5'
                    >
                        <img src={instagram} alt="icono ig" />
                        <p>bebiento_arte</p>
                    </a>
                    <a 
                        href="" 
                        target='_blank'
                        className='flex gap-2 pl-5'
                    >
                        <img src={email} alt="icono correo" />
                        <p>bebientoarte@example.com</p>
                    </a>
                    </ul>
                </article>
            </aside>
        </section>
    )
}