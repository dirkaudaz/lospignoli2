import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: '¿Es seguro el barrio?',
    content: () => (
      <>
        Sobornamos a todos los delincuentes para que ese día se queden en sus casas, así que tranqui.
      </>
    ),
  },
  {
    title: '¿Cómo llego si no tengo auto?',
    content: () => (
      <>
        Toma el metro hasta la Plaza de Puente Alto (L4) y toma taxi, di que vas a las parcelas de la pintana, pasado “La vuelta de Cachencho” (tenemos puntos de geolocalización más precisos que un GPS en estos pueblos).
Toma el metrotren hasta San Bernardo y toma un taxi. Dile que vaya por Camino El Mariscal hasta las parcelas de La Pintana.
      </>
    ),
  },
  {
    title: 'Voy en auto, ¿hay estacionamiento?',
    content: () => (
      <>
        Sí, hay estacionamiento cerrado con cuidador.
      </>
    ),
  },
  {
    title: '¿Qué les regalamos?',
    content: () => (
      <>
        Aceptamos bienes raíces, piedras preciosas, arcas perdidas de gran poder destructivo, condensadores de flujo… Pero, si no tienen nada de eso, no hay problema, pueden hacernos un regalo en forma de platita para nuestra luna de miel a:<br /> 
        Maritza Piña Bustamante<br />
        15642075-1<br />
        Cta. Cte. 1575512-1<br />
        Banco BICE<br />
        lospignoli@gmail.com
      </>
    ),
  },
  {
    title: 'Soy vegetariano, vegano, alérgico/ intolerante a algún alimento, ¿voy a poder comer algo?',
    content: () => (
      <>
        Envíanos un correo con tus restricciones a lospignoli@gmail.com y nos encargaremos de que quedes con la guatita llena y el corazón contento.
      </>
    ),
  },
  {
    title: 'Ustedes son raros, no fuman, no toman, ¿nos vamos a poder divertir?',
    content: () => (
      <>
        No va a haber mesas designadas, ¡LIBERTAD! Todo va a funcionar como un buffet con cositas ricas escogidas con mucho amor.<br />
Volviendo a la pregunta, vamos a tener copete pero no infinito. Si quieres tomar mucho o algún trago que ames en particular, puedes traerlo, ¡no hay problema!<br />
Hay jardines y puedes fumar solo al aire libre, habrá recipientes para dejar las colillas, en eso queremos ser enfáticos, porfa, las colillas a los recipientes, no a la tierra o plantas.
      </>
    ),
  },
  {
    title: '¿Va a haber buena música?',
    content: () => (
      <>
        Por supuesto :) Queremos contarles que esta será una fiesta libre de reggaeton y trap. Tendremos nuestra lista especial de Spotify para bailar y pasarlo bacán. 
      </>
    ),
  },
  {
    title: '¿Por qué Pignoli?',
    content: () => (
      <>
        Piña + Brugnoli = Pignoli. Simples matemáticas. 
      </>
    ),
  },
  {
    title: 'La fiesta es durante el día y tengo hijos, ¿que hago?',
    content: () => (
      <>
        ¡Trae a tus brocacochis! Tendremos la mejor selección de Fruna y un gran patio para que corran.  
      </>
    ),
  },
  {
    title: '¿Hay algun programa o ceremonia?',
    content: () => (
      <>
        Alrededor de las 15:00 hrs descenderá de la nave nodriza el <a href="https://en.wikipedia.org/wiki/Flying_Spaghetti_Monster">Flying Spaghetti Monster</a> a bendecirnos. Después de eso sexo, drogas y rock'n rol (intencionalmente falta una L). 
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>FAQ</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
