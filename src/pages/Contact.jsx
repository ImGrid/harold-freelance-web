import { useState } from 'react';

import { 
  EmailIcon, 
  LocationIcon, 
  ScheduleIcon, 
  QuoteFormIcon,
  StarIcon,
  ProcessIcon,
} from '../components/icons';

import { 
  PageLayout, 
  HeroSection 
} from '../components/sections';

import { Button, Card, Section } from '../components/ui';

import { sendQuoteEmail, validateEmailConfig } from '../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    projectType: '',
    budget: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    const required = ['name', 'email', 'businessType', 'projectType'];
    const missing = required.filter(field => !formData[field].trim());
    
    if (missing.length > 0) {
      setErrorMessage('Por favor completa todos los campos requeridos');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Por favor ingresa un email válido');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmailConfig()) {
      setErrorMessage('El servicio de email no está configurado. Contacta al administrador.');
      setSubmitStatus('error');
      return;
    }

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const result = await sendQuoteEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          projectType: '',
          budget: '',
          description: ''
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
        
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Error al enviar la cotización');
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      setSubmitStatus('error');
      setErrorMessage('Error inesperado. Por favor intenta más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <HeroSection 
        title="Contacto"
        description="¿Listo para empezar tu proyecto? Conversemos sobre tu página web"
        maxWidth="max-w-3xl"
      />

      <Section background="secondary">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <Card hover={true} className="flex items-center space-x-4 p-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                <EmailIcon />
              </div>
              <div>
                <h3 
                  className="font-semibold text-sm mb-1"
                  style={{
                    color: '#f43c3c',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Email
                </h3>
                <p className="text-text-secondary text-sm">poncehar0331@gmail.com</p>
              </div>
            </Card>

            <Card hover={true} className="flex items-center space-x-4 p-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                <LocationIcon />
              </div>
              <div>
                <h3 
                  className="font-semibold text-sm mb-1"
                  style={{
                    color: '#f43c3c',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Ubicación
                </h3>
                <p className="text-text-secondary text-sm">Bolivia - Trabajo remoto</p>
              </div>
            </Card>

            <Card hover={true} className="flex items-center space-x-4 p-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                <ScheduleIcon />
              </div>
              <div>
                <h3 
                  className="font-semibold text-sm mb-1"
                  style={{
                    color: '#f43c3c',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Horarios
                </h3>
                <p className="text-text-secondary text-sm">Lun-Vie: 9:00-18:00</p>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-1 space-y-6">
              
              <Card>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border-2 border-gray-200 shadow-sm">
                    <StarIcon />
                  </div>
                  <h3 
                    className="text-lg font-semibold"
                    style={{
                      color: '#f43c3c',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    ¿Por qué elegirme?
                  </h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <span style={{ color: '#ef4444' }} className="mt-1">✓</span>
                    <span className="text-text-secondary">Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span style={{ color: '#ef4444' }} className="mt-1">✓</span>
                    <span className="text-text-secondary">Hosting y dominio incluido 1 año</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span style={{ color: '#ef4444' }} className="mt-1">✓</span>
                    <span className="text-text-secondary">Soporte técnico incluido</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span style={{ color: '#ef4444' }} className="mt-1">✓</span>
                    <span className="text-text-secondary">Trato especial con el cliente</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 border-2 border-gray-200 shadow-sm">
                    <ProcessIcon />
                  </div>
                  <h3 
                    className="text-lg font-semibold"
                    style={{
                      color: '#f43c3c',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Proceso Simple
                  </h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: '#ef4444' }}
                    >
                      1
                    </span>
                    <span className="text-text-secondary">Envías el formulario</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: '#ef4444' }}
                    >
                      2
                    </span>
                    <span className="text-text-secondary">Te contacto en 24h</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: '#ef4444' }}
                    >
                      3
                    </span>
                    <span className="text-text-secondary">Definimos detalles</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: '#ef4444' }}
                    >
                      4
                    </span>
                    <span className="text-text-secondary">¡Empezamos!</span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-gray-200 shadow-sm">
                    <QuoteFormIcon />
                  </div>
                  <h2 
                    className="text-2xl font-semibold mb-2"
                    style={{
                      color: '#f43c3c',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    Solicitar Cotización
                  </h2>
                  <p className="text-text-secondary">Completa el formulario y te contacto en menos de 24 horas</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                    <p className="text-green-200 text-sm">
                      ✅ ¡Cotización enviada exitosamente! Te contactaré pronto.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                    <p className="text-red-200 text-sm">
                      ❌ {errorMessage}
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: '#f43c3c',
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: '#f43c3c',
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+591 XXXX XXXX"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: '#f43c3c',
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        Tipo de negocio *
                      </label>
                      <select 
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecciona tu negocio</option>
                        <option value="Restaurante/Heladería">Restaurante/Heladería</option>
                        <option value="Ferretería/Comercio">Ferretería/Comercio</option>
                        <option value="Gimnasio/Centro deportivo">Gimnasio/Centro deportivo</option>
                        <option value="Clínica/Consultorio">Clínica/Consultorio</option>
                        <option value="Tienda de ropa">Tienda de ropa</option>
                        <option value="Servicios profesionales">Servicios profesionales</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: '#f43c3c',
                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        ¿Qué necesitas? *
                      </label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Tipo de página</option>
                        <option value="Página básica (información)">Página básica (información)</option>
                        <option value="Página comercial (servicios)">Página comercial (servicios)</option>
                        <option value="Tienda online">Tienda online</option>
                        <option value="Sistema personalizado">Sistema personalizado</option>
                        <option value="No estoy seguro">No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      Presupuesto aproximado (opcional)
                    </label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Selecciona tu presupuesto</option>
                      <option value="1,000 - 3,000 Bs">1,000 - 3,000 Bs</option>
                      <option value="3,000 - 5,000 Bs">3,000 - 5,000 Bs</option>
                      <option value="5,000 - 10,000 Bs">5,000 - 10,000 Bs</option>
                      <option value="Quiero cotizar el precio">Quiero cotizar el precio</option>
                    </select>
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      Cuéntame sobre tu proyecto (opcional)
                    </label>
                    <textarea 
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-input" 
                      rows="4"
                      placeholder="Describe tu negocio y qué necesitas en tu página web..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                  </Button>
                  
                  <p className="text-xs text-text-muted text-center">
                    * Campos requeridos. Tu información se enviará directamente a mi email.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;