import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Información del servicio, plantilla y usuario de EmailJS
        const serviceId = 'service_tktuz3s';
        const templateId = 'template_cpw479f';
        const userId = 'iDCoySkx3-gWsnO0f';

        emailjs.send(serviceId, templateId,
          {
            from_name: formData.name,
            to_name: "Eliseo",
            message: formData.message + ". Mi correo es: " + formData.email,
          }
          , userId)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Mensaje enviado. Gracias por contactarnos.');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            });
    };

    return (
        <section className="section">
            <h2>Contáctenos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default ContactForm;
