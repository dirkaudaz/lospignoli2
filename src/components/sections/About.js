import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_secreto: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "secreto" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "hi_five" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_lugar: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "lugar" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>¿QUÉ?¿CÓMO?¿CUÁNDO?</h2>
              <p>
              El 25 de julio pasado, nos casamos en el Registro Civil de Providencia, ni siquiera le avisamos a nuestros papás (Muajajajaja).
              </p>
            </div>
            <Art>
              <Img fluid={data.art_secreto.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>PERO, ¿POR QUÉ?</h2>
              <p>
              Por qué qué, ¿por qué nos casamos? ¿Por qué en secreto?<br />
              Nos casamos porque nos amamos (pretends to be shocked).<br />
              Si quieren saber por qué en secreto, tienen que venir a nuestra fiestita.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>¿FIESTA? ¿DÓNDE? ¿CUÁNDO?</h2>
              <p>
              El 26 de octubre de este año a las 13:00 hrs.<br /> 
              En la Casona Don Aníbal, El Olivar 2739, Huertos José Maza, <br />
              <strike>La</strike> Lo Pintana (Paradero 47 de Santa Rosa).
                <br />
              </p>
            </div>
            <Art>
              <Img fluid={data.art_lugar.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
