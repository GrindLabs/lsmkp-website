import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from 'react-grid-gallery';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#fff',
  },
  gallery: {
    paddingTop: theme.spacing(6),
    minHeight: 300,
  },
}));

const Studio = () => {
  const classes = useStyles();
  const imgStudioList = useStaticQuery(graphql`
    query StudioImagesQuery {
      thumbs: allFile(
        filter: { relativeDirectory: { eq: "studio/thumbs" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }

      original: allFile(
        filter: { relativeDirectory: { eq: "studio" } }
        sort: { fields: [name], order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  var images;
  images = imgStudioList.thumbs.edges.map(thumb => {
    return {
      thumbnail: thumb.node.childImageSharp.fixed.src,
      thumbnailWidth: 300,
      thumbnailHeight: 300,
      alt: 'Imagens tiradas do LS Make Up Studio',
    };
  });
  images = imgStudioList.original.edges.map((image, index) => {
    images[index].src = image.node.childImageSharp.fluid.src;
    images[index].srcSet = image.node.childImageSharp.fluid.srcSet;
    images[index].nano = image.node.childImageSharp.fluid.base64;
    return images[index];
  });

  return (
    <section className={classes.section}>
      <Container fixed>
        <Typography
          align="center"
          variant="h4"
          component="h2"
          color="secondary"
        >
          Todo conforto para você
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          component="h2"
          color="secondary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
          tortor eget diam euismod eleifend. Pellentesque sollicitudin non lorem
          at.
        </Typography>
        <div className={classes.gallery}>
          <Gallery
            images={images}
            enableImageSelection={false}
            showImageCount={false}
            backdropClosesModal={true}
            rowHeight={300}
          />
        </div>
      </Container>
    </section>
  );
};

export default Studio;
