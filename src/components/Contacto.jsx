import instagram from '../assets/icons/instagram.svg'
import email from '../assets/icons/email.svg'

export const Contacto = () => {
    return (
        <section id="contacto" className="bg-custom-white p-3">
            <h2 className="text-custom-brown font-bold text-2xl pb-2 text-center">Contacto</h2>
            <article>
                <h3 className="text-lg font-semibold text-center">Reserva tu experiencia</h3>
                <form action="#" className="bg-custom-pink m-4 p-4 flex flex-col gap-1">
                    <label htmlFor="nombre">Ingresa tu nombre</label>
                    <input type="text" placeholder="ingresa tu nombre" className="p-2"/>
                    <label htmlFor="email">Ingresa tu correo</label>
                    <input type="email" placeholder="ingresa tu correo" className="p-2"/>
                    <label htmlFor="mensaje">Ingresa tu mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="10" className="p-2 text-gray-400">Deja tu mensaje aquí</textarea>
                    <button type="submit" className="bg-custom-orange w-min py-2 px-4 rounded-xl border-custom-brown border-2 mt-3 mx-auto">Reservar</button>
                </form>
            </article>
            <aside>
                <article>
                    <h3>Suscríbete a nuestra newsletter</h3>
                    <p>Recibe todas las semanas un correo con tips para seguir explorando tu creatividad</p>
                    <form action="#">
                        <label htmlFor="email">Ingresa tu corre</label>
                        <input type="email" placeholder="ingresa tu correo" />
                        <button type="submit">Suscríbete</button>
                    </form>
                </article>
                <article>
                    <h3>También nos puedes contactar por</h3>
                    <div>
                        <img src={instagram} alt="ig" />
                        <p>bebiento_arte</p>
                    </div>
                    <div>
                        <img src={email} alt="correo" />
                        <p>bebientoarte@example.com</p>
                    </div>
                </article>
            </aside>
        </section>
    )
}