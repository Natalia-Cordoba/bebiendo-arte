import instagram from '../assets/icons/instagram.svg'
import email from '../assets/icons/email.svg'
import { Formulario } from './Formulario.jsx'
import { Newsletter } from './Newsletter.jsx'


export const Contacto = () => {
    return (
        <section id="contacto" className="bg-custom-white dark:bg-gray-800 py-6 px-4">
            <h2 className="font-custom-font text-gray-600 dark:text-custom-orange font-bold text-3xl md:text-4xl pb-3 md:pb-8 text-center">Contacto</h2>
            <div className="mx-auto max-w-5xl md:flex md:justify-center md:gap-10">                
                <Formulario />                
                <aside>
                    <Newsletter />
                    <article className='md:my-6'>
                        <h3 className="font-custom-font text-lg md:text-xl font-semibold text-center text-custom-brown mb-4">Otros métodos de contacto</h3>
                        <ul className='flex flex-col gap-4 items-center'>
                            <a
                                href="https://www.instagram.com/"
                                target='_blank'
                                className='flex gap-2 hover:text-custom-white hover:bg-gray-500 hover:dark:bg-gray-600 hover:px-4 hover:py-1 hover:rounded-3xl transition-colors'
                            >
                                <img src={instagram} alt="icono ig" />
                                <p className='font-custom-font'>bebiento_arte</p>
                            </a>
                            <a
                                href="mailto:bebiendoarte@example.com"
                                target='_blank'
                                className='flex gap-2 hover:text-custom-white hover:bg-gray-500 hover:dark:bg-gray-600 hover:px-4 hover:py-1 hover:rounded-3xl transition-colors'
                            >
                                <img src={email} alt="icono correo" />
                                <p className='font-custom-font'>bebientoarte@example.com</p>
                            </a>
                        </ul>
                    </article>
                </aside>
            </div>
        </section>
    )
}