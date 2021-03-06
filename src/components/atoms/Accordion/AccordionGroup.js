import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);

  return React.Children.map(children, (child, idx) =>
    React.cloneElement(child, {
      open: idx === index, //index vai conter o indice do elemento clicado
      onChange: () => {
        if (idx === index) {
          setIndex(-1); //Quando seleciona o elemento que esta aberto para fechar, fecha todo mundo
        } else {
          setIndex(idx); //atualiza o state com o index do elemento clicado e re renderiza o componente
        }
      },
    })
  );
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
