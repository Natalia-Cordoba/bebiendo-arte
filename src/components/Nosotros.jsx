export const Nosotros = () => {
    return (
        <section id="nosotros" className="bg-custom-pink dark:bg-gray-800 pt-10 pb-6 px-4">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-gray-600 dark:text-custom-orange font-bold text-3xl md:text-4xl pb-2 text-center">¿Qué es bebiendo arte?</h2>
                <article className="mx-auto md:max-w-4xl">
                    <p>¡Bienvenido/a a Bebiendo Arte! Sumérgete en un mundo de creatividad y expresión, donde pintar se convierte en una experiencia única que estimula todos tus sentidos. Nuestro espacio está diseñado para inspirarte y ayudarte a conectar con tu lado artístico de una manera relajada y divertida.</p>
                    <picture>
                        <img src="https://images.unsplash.com/photo-1709011619678-bd105a9abb4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen personas pintanto" className="w-36" />
                    </picture>
                </article>
                <article className="mx-auto md:max-w-4xl">
                    <ul className="list-disc">¿Qué ofrecemos?
                        <li>Experiencias de pintura por la tarde acompañadas de delicioso café recién hecho.</li>
                        <li>Sesiones nocturnas de pintura con una selección cuidadosamente elegida de vinos.</li>
                        <li>Instructores expertos que te guiarán paso a paso en la creación de tu propia obra maestra.</li>
                        <li>Materiales de alta calidad incluidos en cada sesión.</li>
                    </ul>
                    <picture>
                        <img src="https://images.unsplash.com/photo-1709011697696-376450d99981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fHw%3D" alt="Imagen personas pintando" className="w-1/2" />
                    </picture>
                </article>
            </div>
        </section>
    )
}