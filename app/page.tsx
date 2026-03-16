import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Novedades from '@/components/Novedades';
import Institucional from '@/components/Institucional';
import Servicios from '@/components/Servicios';
import Miembros from '@/components/Miembros';
import Normativa from '@/components/Normativa';
import Contacto from '@/components/Contacto';

export default function Page() {
  return (
    <main id="main-content">
      <Hero />
      <StatsBar />
      <Novedades />
      <Institucional />
      <Servicios />
      <Miembros />
      <Normativa />
      <Contacto />
    </main>
  );
}
