import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import Page from '../../components/Page';

const SponsorPage = ({ data }) => (
  <Layout>
    <Page title={`Sponsors`} headTitle="Sponsors">
      <p>Orbit FM is sponsored by:</p>
      <a
        href="https://www.stickermule.com/supports/orbit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={data.stickerMule.childImageSharp.fluid}
          style={{ maxWidth: 500 }}
        />
      </a>
    </Page>
  </Layout>
);

export default SponsorPage;

export const query = graphql`
  query SponsorsQuery {
    stickerMule: file(relativePath: { eq: "pages/sponsors/sticker-mule.png" }) {
      childImageSharp {
        fluid(maxWidth: 940, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
