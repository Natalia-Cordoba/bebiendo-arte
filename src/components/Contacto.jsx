export const Contacto = () => {
    return (
        <section id="contacto">
            <h2>Contacto</h2>
            <form action="#">
                <h3>Reserva tu experiencia</h3>
                <label htmlFor="nombre">Ingresa tu nombre</label>
                <input type="text" placeholder="ingresa tu nombre" />
                <label htmlFor="email">Ingresa tu correo</label>
                <input type="email" placeholder="ingresa tu correo" />
                <label htmlFor="mensaje">Ingresa tu mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="50" rows="10"></textarea>
                <button type="submit">Reservar</button>
            </form>
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
                        <img src="#" alt="ig" />
                        <p>bebiento_arte</p>
                    </div>
                    <div>
                        <img src="#" alt="correo" />
                        <p>bebientoarte@example.com</p>
                    </div>
                </article>
            </aside>
        </section>
    )
}