// About.jsx - VERSIÓN CON ROJO MEJORADO Y CENTRADO ARREGLADO
// Reducido de 400+ líneas a ~150 líneas manteniendo 100% funcionalidad

// Importar iconos modularizados
import { 
  HelloIcon,
  TechnicalSkillsIcon, 
  SoftSkillsIcon,
  ExperienceIcon,
  CommunicationIcon,
  QualityIcon,
  FairPricingIcon,
  SupportIcon 
} from '../components/icons';

// Importar componentes de layout modularizados
import { 
  PageLayout, 
  HeroSection, 
  FeatureGrid 
} from '../components/sections';

import { Button, Card, Badge, Section } from '../components/ui';
import { aboutInfo } from '../data/about';

const About = () => {
  // Datos de "¿Por qué elegirme?" - usando datos reales de aboutInfo.whyChooseMe
  const whyChooseMeWithIcons = aboutInfo.whyChooseMe.map((reason, index) => {
    // Lógica original de asignación de iconos basada en palabras clave
    let IconComponent = ExperienceIcon; // default
    
    if (reason.title.toLowerCase().includes('comunicación') || reason.title.toLowerCase().includes('español')) {
      IconComponent = CommunicationIcon;
    } else if (reason.title.toLowerCase().includes('calidad') || reason.title.toLowerCase().includes('tecnología')) {
      IconComponent = QualityIcon;
    } else if (reason.title.toLowerCase().includes('precio') || reason.title.toLowerCase().includes('costo')) {
      IconComponent = FairPricingIcon;
    } else if (reason.title.toLowerCase().includes('soporte') || reason.title.toLowerCase().includes('trato')) {
      IconComponent = SupportIcon;
    }

    return {
      id: `reason-${index}`,
      icon: <IconComponent />,
      title: reason.title,
      description: reason.description
    };
  });

  return (
    <PageLayout>
      {/* Hero Section Modularizado */}
      <HeroSection 
        title="Sobre Mí"
        description={aboutInfo.personal.mission}
      />

      {/* Información personal - Sección específica que se mantiene CON ROJO MEJORADO */}
      <Section background="secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Foto y info básica */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="text-center">
                  <div className="w-48 h-48 rounded-xl mx-auto mb-6 overflow-hidden border border-dark-600 shadow-lg">
                    <img 
                      src="/profile.webp" 
                      alt="Harold Ponce - Desarrollador Web Freelancer" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-background-tertiary flex items-center justify-center"><span class="text-text-muted text-lg">Harold Ponce</span></div>';
                      }}
                    />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    {aboutInfo.personal.name}
                  </h2>
                  <p 
                    className="font-medium mb-4"
                    style={{
                      color: '#f43c3c',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    {aboutInfo.personal.title}
                  </p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-accent-red">📍</span>
                      <span>{aboutInfo.personal.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-accent-red">📧</span>
                      <span>{aboutInfo.personal.email}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-dark-700">
                    <Button to="/contacto" className="w-full">
                      Trabajemos Juntos
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introducción con icono modularizado CON ROJO MEJORADO */}
              <Card>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                    <HelloIcon />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-semibold"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      Hola, soy Harold
                    </h3>
                  </div>
                </div>
                <div className="prose prose-neutral max-w-none">
                  {aboutInfo.personal.introduction.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-text-secondary leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </Card>

              {/* Habilidades técnicas con icono modularizado CON ROJO MEJORADO */}
              <Card>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                    <TechnicalSkillsIcon />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-semibold"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      Habilidades Técnicas
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.skills.technical.map((skill, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 
                          className="font-semibold text-sm"
                          style={{
                            color: '#f43c3c',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                          }}
                        >
                          {skill.category}
                        </h4>
                        <Badge variant="primary">{skill.level}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="technology">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Habilidades blandas con icono modularizado CON ROJO MEJORADO */}
              <Card>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center border-2 border-gray-200 shadow-sm flex-shrink-0">
                    <SoftSkillsIcon />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-semibold"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      Habilidades Profesionales
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aboutInfo.skills.soft.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 text-text-secondary">
                      <span style={{ color: '#ef4444' }}>✓</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* ¿Por qué elegirme? - CENTRADO ARREGLADO y CON ROJO MEJORADO */}
      <Section background="tertiary">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl font-heading font-bold mb-4"
            style={{
              color: '#f43c3c',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
            }}
          >
            ¿Por qué trabajar conmigo?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ventajas reales de elegir mis servicios para tu proyecto
          </p>
        </div>

        {/* GRID MEJORADO PARA CENTRADO AUTOMÁTICO */}
        <div className="max-w-7xl mx-auto">
          {/* Primera fila: 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {whyChooseMeWithIcons.slice(0, 4).map((feature, index) => (
              <Card 
                key={feature.id} 
                hover={true} 
                className="text-center h-full"
              >
                {/* Icono */}
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white rounded-full border-2 border-gray-200 shadow-sm flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Título CON ROJO MEJORADO */}
                <h3 
                  className="text-lg md:text-xl font-semibold mb-3"
                  style={{
                    color: '#f43c3c',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  {feature.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Segunda fila: CENTRADA AUTOMÁTICAMENTE */}
          {whyChooseMeWithIcons.length > 4 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
                {whyChooseMeWithIcons.slice(4).map((feature, index) => (
                  <Card 
                    key={feature.id} 
                    hover={true} 
                    className="text-center h-full"
                  >
                    {/* Icono */}
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 bg-white rounded-full border-2 border-gray-200 shadow-sm flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Título CON ROJO MEJORADO */}
                    <h3 
                      className="text-lg md:text-xl font-semibold mb-3"
                      style={{
                        color: '#f43c3c',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;