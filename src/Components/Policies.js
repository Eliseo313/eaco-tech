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
          <li>Correo electrónico: <a href="mailto:soporte@eacotech.com">soporte@eacotech.com</a></li>
          <li>Teléfono: +52 453 134 9959</li>
          <li>Formulario de contacto: <a href="/contacto">Ir al formulario</a></li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Política de Disputas y Reembolsos</h2>
        <p>
          Delifast garantiza la calidad de sus servicios. Si no estás satisfecho con el servicio recibido, contáctanos 
          dentro de los 14 días posteriores a la compra para analizar tu caso y ofrecerte una solución, que podría incluir 
          un reembolso parcial o total. No se otorgan reembolsos después de este período.
        </p>
      </section>

      <section className="policy-section">
        <h2>Política de Cancelaciones</h2>
        <p>
          Los servicios de suscripción pueden cancelarse en cualquier momento desde tu cuenta. Si la cancelación ocurre antes 
          del final del ciclo de facturación, podrás seguir usando el servicio hasta el final del período pagado. No se emitirán 
          reembolsos por tiempo no utilizado.
        </p>
      </section>

      <section className="policy-section">
        <h2>Restricciones Legales o de Exportación</h2>
        <p>
          El uso de los servicios de Eaco Tech está sujeto a las leyes y regulaciones de exportación aplicables en tu país. 
          Está prohibido usar nuestros servicios en regiones donde las leyes locales no lo permitan.
        </p>
      </section>

      <section className="policy-section">
        <h2>Términos y Condiciones de Promociones</h2>
        <p>
          Todas las promociones ofrecidas por Eaco Tech están sujetas a términos específicos, los cuales serán comunicados en 
          el momento de la promoción. Las promociones no son transferibles, no tienen valor en efectivo y están sujetas a 
          disponibilidad.
        </p>
      </section>
    </div>
  );
};

export default Policies;
