import { Button, Section } from '../components/ui';

const NotFound = () => {
  return (
    <Section background="secondary" className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Página no encontrada
        </h2>
        <p className="text-text-secondary mb-8">
          La página que buscas no existe o ha sido movida
        </p>
        <Button to="/">Volver al Inicio</Button>
      </div>
    </Section>
  );
};

export default NotFound;