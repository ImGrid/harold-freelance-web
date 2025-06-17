import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  userID: import.meta.env.VITE_EMAILJS_USER_ID,
  serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID, 
  templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
};


export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.userID);
};

/**
 * Validar configuración de EmailJS
 * @returns {boolean} - Si la configuración es válida
 */
export const validateEmailConfig = () => {
  const isValid = !!(EMAILJS_CONFIG.userID && 
                    EMAILJS_CONFIG.serviceID && 
                    EMAILJS_CONFIG.templateID);
  
  return isValid;
};

/**
 * Enviar email de cotización
 * @param {Object} formData - Datos del formulario
 * @returns {Promise} - Promesa del envío
 */
export const sendQuoteEmail = async (formData) => {
  try {

    if (!formData.businessType || !formData.projectType || !formData.name || !formData.email) {
      throw new Error('Faltan campos requeridos');
    }

    const templateParams = {
      client_name: formData.name,
      client_email: formData.email,
      client_phone: formData.phone || 'No proporcionado',
      
      business_type: formData.businessType,
      project_type: formData.projectType,
      budget_range: formData.budget || 'No especificado',
      project_description: formData.description || 'Sin descripción adicional',
      
      submission_date: new Date().toLocaleDateString('es-BO'),
      submission_time: new Date().toLocaleTimeString('es-BO'),
      
      to_email: 'poncehar0331@gmail.com',
      
      subject: `Nueva Cotización: ${formData.businessType} - ${formData.projectType}`
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams
    );
    return {
      success: true,
      message: 'Cotización enviada exitosamente',
      data: response
    };

  } catch (error) {
    
    let errorMessage = 'Error al enviar la cotización';
    
    if (error.message.includes('Faltan campos')) {
      errorMessage = 'Por favor completa todos los campos requeridos';
    } else if (error.status === 400) {
      errorMessage = 'Error en los datos del formulario';
    } else if (error.status === 401) {
      errorMessage = 'Error de configuración del servicio de email';
    } else if (error.status === 402) {
      errorMessage = 'Límite de emails alcanzado';
    } else if (error.status >= 500) {
      errorMessage = 'Error del servidor. Intenta más tarde';
    }

    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
};

/**
 * Enviar email de contacto simple (para futuro uso)
 * @param {Object} contactData - Datos de contacto simple
 */
export const sendContactEmail = async (contactData) => {
  try {
    const templateParams = {
      client_name: contactData.name,
      client_email: contactData.email,
      message: contactData.message,
      to_email: 'poncehar0331@gmail.com',
      subject: 'Nuevo Mensaje de Contacto',
      submission_date: new Date().toLocaleDateString('es-BO')
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams
    );

    return {
      success: true,
      message: 'Mensaje enviado exitosamente',
      data: response
    };

  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    return {
      success: false,
      message: 'Error al enviar el mensaje',
      error: error
    };
  }
};

initEmailJS();