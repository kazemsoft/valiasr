import React from 'react';
import Section from '../../global/Section/Section';
import { Box } from '@chakra-ui/react';
import List from './List';

const Innovation = () => {
  return (
    <Box marginTop={'100px'}>
      <Section
        title="Innovation and knowledge of society"
        description="Considering the current conditions of our society (high costs and corona conditions), by using some creativity and taste, we have prepared a creative product that will not only help you dear ones to electronicize your business, but will also significantly save your expenses. became."
      />
      <List />
    </Box>
  );
};

export default Innovation;
