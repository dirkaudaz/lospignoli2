import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_dresscode: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "dresscode" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_dresscode.childImageSharp.fluid} />
            </Art>
            <Text>
              <h2>
                Dress Code
              </h2>
              <br />
              <p>
              Lo que te haga muy feliz (nosotros vamos a estar hermosos y cómodos (recuerden que es muy mala educación andar más hermosos y cómodos que los novios).
              </p>
            </Text>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 100%;
    margin-bottom: -15%;
    margin-top: -10%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

export default UsedBy;
