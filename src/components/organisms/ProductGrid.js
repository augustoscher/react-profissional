import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../atoms/Grid';
import Card, { CardBody, CardMedia } from '../atoms/Card';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const ProductGrid = ({ products }) => (
  <Grid md={3}>
    {products.map(product => (
      <Card key={product.id}>
        <CardMedia image={product.image} />
        <CardBody>
          <Heading>
            <h6>{product.title}</h6>
          </Heading>
          <p>{product.summary}</p>
          <div>
            <Button variant="linked" color="primary">
              Saiba mais
            </Button>
          </div>
        </CardBody>
      </Card>
    ))}
  </Grid>
);

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
