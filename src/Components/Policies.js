import React from "react";
import "./Policies.css";

const Policies = () => {
  return (
    <div className="policies-container">
      <h1>Políticas y Términos</h1>
      
      <section className="policy-section">
        <h2>Información de Contacto</h2>
        <p>
          Si necesitas asistencia, puedes ponerte en contacto con nuestro equipo de soporte a través de:
        </p>
        <ul>
          <li>Correo electrónico: <a href="mailto:isceliseo@gmail.com">isceliseo@gmail.com</a></li>
          <li>Teléfono: +52 453 134 9959</li>
          <li>Formulario de contacto: <a href="/contacto">Ir al formulario</a></li>
        </ul>
      </section>

      {/* <section className="policy-section">
        <h2>Política de Disputas y Reembolsos</h2>
        <p>
          Delifast garantiza la calidad de sus servicios. Si no estás satisfecho con el servicio recibido, contáctanos 
          dentro de los 14 días posteriores a la compra para analizar tu caso y ofrecerte una solución, que podría incluir 
          un reembolso parcial o total. No se otorgan reembolsos después de este período.
        </p>
      </section> */}

      {/* <section className="policy-section">
        <h2>Política de Cancelaciones</h2>
        <p>
          Los servicios de suscripción pueden cancelarse en cualquier momento desde tu cuenta. Si la cancelación ocurre antes 
          del final del ciclo de facturación, podrás seguir usando el servicio hasta el final del período pagado. No se emitirán 
          reembolsos por tiempo no utilizado.
        </p>
      </section> */}

      <section className="policy-section">
        <h2>Términos y Condiciones </h2>
        <p>
        1. Aceptación de términos
        Al descargar, acceder y usar esta aplicación (en adelante, "la App"), aceptas los términos y condiciones aquí descritos. Si no estás de acuerdo con alguno de estos términos, te recomendamos no usar la aplicación.
        <br/><br/>
        2. Uso de la aplicación
        La App está diseñada para facilitar pedidos de comida en línea. Los usuarios se comprometen a utilizar la App de manera legal, responsable y conforme a los términos aquí expuestos. Nos reservamos el derecho de limitar el acceso a cualquier usuario que haga un uso indebido de la App.
        <br/><br/>
        3. Información Personal
        Para brindarte el mejor servicio, solicitamos ciertos datos personales (por ejemplo, nombre, dirección). Estos datos están protegidos conforme a nuestra Política de Privacidad , la cual cumple con las leyes de protección de datos aplicables. Al aceptar estos Términos y Condiciones, aceptas también nuestra Política de Privacidad.
        <br/><br/>
        4. Recopilación y Uso de Datos
        Podemos recopilar, procesar y almacenar información sobre tus actividades dentro de la App con el propósito de mejorar la experiencia del usuario y adaptar el contenido. Esta información es anónima y no se compartirá con terceros sin su consentimiento, salvo en los casos establecidos por la ley.
        <br/><br/>
        5. Responsabilidades del Usuario
        Exactitud de la Información : Eres responsable de la veracidad y exactitud de los datos proporcionados en la App, como direcciones de entrega, métodos de pago, etc.
        Confidencialidad : Es tu responsabilidad mantener la confidencialidad de tu cuenta y contraseña. No nos hacemos responsables de accesos no autorizados resultantes del mal manejo de tu información de acceso.
        <br/><br/>
        6. Responsabilidad Limitada
        No garantizamos la disponibilidad continua de la App ni el funcionamiento ininterrumpido del servicio. En caso de fallas técnicas, no asumimos responsabilidad alguna por pérdidas o daños, ya sean directos o indirectos, ocasionados por interrupciones en el servicio.
        <br/><br/>
        7. Métodos de pago
        Si la App ofrece métodos de pago, el usuario garantiza que los detalles proporcionados para las transacciones son válidos y exactos. La App no ​​guarda los detalles completos de las tarjetas de crédito o débito y se apoya en un procesador de pagos seguro para gestionar las transacciones. No nos hacemos responsables por errores en las transacciones.
        <br/><br/>
        8. Envíos y Devoluciones
        Los tiempos de entrega pueden variar según el restaurante, y no garantizamos un tiempo específico de entrega. No asumimos responsabilidad alguna por retrasos debidos a circunstancias fuera de nuestro control. En caso de cancelación, los usuarios deben gestionar las devoluciones directamente con el restaurante. Las comisiones de uso de la aplicación no son reembolsables.
        <br/><br/>
        9. Propiedad Intelectual
        Todos los elementos de la App (textos, imágenes, logotipos, código) son propiedad de Eliseo Adrian Cardenas Ortiz o están licenciados para su uso. No está permitido reproducir, distribuir ni utilizar estos elementos sin nuestro consentimiento.
        <br/><br/>
        10. Cambios en los Términos y Condiciones
        Nos reservamos el derecho a modificar estos Términos y Condiciones en cualquier momento. Las actualizaciones se publicarán en la App y será responsabilidad del usuario revisar los cambios. El uso continuado de la App después de cualquier modificación implica la aceptación de los nuevos términos.
        <br/><br/>
        11. Cancelación y Terminación de la Cuenta
        Nos reservamos el derecho de cancelar o suspender tu cuenta en cualquier momento si detectamos un incumplimiento de los términos, un uso inadecuado o alguna actividad sospechosa.
        <br/><br/>
        12. Legislación Aplicable y Jurisdicción
        Estos términos se rigen por las leyes de México. Cualquier disputa o reclamación que surja en relación con el uso de la App será resuelta en los tribunales correspondientes.
        <br/><br/>
        13. El uso de los servicios de Eaco Tech/Delifast está sujeto a las leyes y regulaciones de exportación aplicables en tu país. 
        Está prohibido usar nuestros servicios en regiones donde las leyes locales no lo permitan.
        <br/><br/>
        Al utilizar la app, usted acepta estos términos y condiciones en su totalidad.
        </p>
      </section>
    </div>
  );
};

export default Policies;
