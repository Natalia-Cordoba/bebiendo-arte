import instagram from '../assets/icons/instagram.svg'
import email from '../assets/icons/email.svg'
import { Formulario } from './Formulario.jsx'
import { Newsletter } from './Newsletter.jsx'


export const Contacto = () => {
    return (
        <section id="contacto" className="bg-custom-white dark:bg-gray-800 py-8 px-4">
            <h2 className="text-custom-brown dark:text-custom-orange font-bold text-2xl pb-2 text-center">Contacto</h2> 
            <Formulario />
            <aside>
                <Newsletter />
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