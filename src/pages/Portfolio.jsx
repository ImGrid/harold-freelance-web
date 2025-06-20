import { 
  PageLayout, 
  HeroSection 
} from '../components/sections';

import { Button, Card, Badge, Section } from '../components/ui';

const Portfolio = () => {
  return (
    <PageLayout>
      <HeroSection 
        title="Portfolio de Proyectos"
        description="Ejemplos de páginas web que he desarrollado para diferentes tipos de negocios"
      />

      <Section background="secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            <Card hover={true} className="flex flex-col h-full">
              <div className="h-64 rounded-lg mb-4 overflow-hidden border border-dark-600 shadow-lg">
                <img 
                  src="/Serp_system.webp" 
                  alt="Sistema de Evaluación por Rúbricas - EMI" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-background-tertiary flex items-center justify-center border border-dark-600"><span class="text-text-muted">Sistema SERP - EMI</span></div>';
                  }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{
                  color: '#f43c3c',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                }}
              >
                Sistema SERP - EMI
              </h3>
              <p className="text-text-secondary mb-4 flex-grow">
                Sistema de Evaluación por Rúbricas para Proyectos Finales desarrollado para la Escuela Militar de Ingeniería. 
                Actualmente en uso por múltiples carreras para evaluar proyectos de examenes finales.
                (por tema de confidencialidad no puedo mostrar la pagina)
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="primary">React</Badge>
                <Badge variant="primary">Node.js</Badge>
                <Badge variant="primary">PostgreSQL</Badge>
                <Badge variant="primary">Sistema Web</Badge>
              </div>
            </Card>

            <Card 
              hover={true} 
              className="flex flex-col h-full cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => window.open('https://molemath.netlify.app/', '_blank')}
            >
              <div className="h-64 rounded-lg mb-4 overflow-hidden border border-dark-600 shadow-lg">
                <img 
                  src="/Molemath.webp" 
                  alt="MoleMath - Calculadora Química" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-background-tertiary flex items-center justify-center border border-dark-600"><span class="text-text-muted">MoleMath - Calculadora</span></div>';
                  }}
                />
              </div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{
                  color: '#f43c3c',
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                }}
              >
                MoleMath - Calculadora Química
              </h3>
              <p className="text-text-secondary mb-4 flex-grow">
                Sistema desarrollado por encargo para estudiante de colegio. 
                Automatiza cálculos complejos de masa molar, concentraciones y balance de ecuaciones con explicaciones detalladas.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="primary">React</Badge>
                <Badge variant="primary">TypeScript</Badge>
                <Badge variant="primary">Vite</Badge>
                <Badge variant="primary">Calculadora</Badge>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mb-12">
            <div className="w-full md:w-1/2">
              <Card 
                hover={true} 
                className="flex flex-col h-full cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => window.open('https://deliverylapaz.netlify.app/', '_blank')}
              >
                <div className="h-64 rounded-lg mb-4 overflow-hidden border border-dark-600 shadow-lg">
                  <img 
                    src="/deliverylanding.webp" 
                    alt="Delivery La Paz - Landing Page Demo" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-background-tertiary flex items-center justify-center border border-dark-600"><span class="text-text-muted">🍕 Delivery La Paz</span></div>';
                    }}
                  />
                </div>
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{
                    color: '#f43c3c',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
                  }}
                >
                  Delivery La Paz - Demo
                </h3>
                <p className="text-text-secondary mb-4 flex-grow">
                  Landing page moderna para plataforma de delivery de comida. Demo completa, 
                  animaciones suaves, diseño responsive y formulario de contacto funcional. 
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <Badge variant="primary">React</Badge>
                  <Badge variant="primary">Vite</Badge>
                  <Badge variant="primary">Tailwind CSS</Badge>
                  <Badge variant="primary">Landing Page</Badge>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <p className="text-text-primary mb-6">
              ¿Te gustaría tener una solución similar para tu proyecto o negocio?
            </p>
            <Button to="/contacto">Solicitar Cotización</Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Portfolio;