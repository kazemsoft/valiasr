import React from 'react';
import Section from '../../global/Section/Section';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import List from './List';
import Image from 'next/image';

const Innovation = () => {
  return (
    <Box marginTop={'100px'}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <Section
            title="Innovation and knowledge of society"
            description="Considering the current conditions of our society (high costs and corona conditions), by using some creativity and taste, we have prepared a creative product that will not only help you dear ones to electronicize your business, but will also significantly save your expenses. became."
          />
          <List />
        </GridItem>
        <GridItem display={{ base: 'none', lg: 'block' }} colSpan={1}>
          <Grid
            h="100%"
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem style={{ position: 'relative' }} rowSpan={1} colSpan={1}>
              <Image
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                fill
                src={'/images/React.jpg'}
                alt="react-image"
              />
            </GridItem>
            <GridItem style={{ position: 'relative' }} rowSpan={3} colSpan={1}>
              <Image
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                fill
                // width={100}
                // height={100}
                src={'/images/724shop.jpg'}
                alt="724shop-image"
              />
            </GridItem>
            <GridItem style={{ position: 'relative' }} rowSpan={3} colSpan={1}>
              <Image
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                fill
                // width={100}
                // height={100}
                src={'/images/woocommerce.jpg'}
                alt="woocommerce-image"
              />
            </GridItem>
            <GridItem style={{ position: 'relative' }} rowSpan={1} colSpan={1}>
              <Image
                style={{ objectFit: 'cover', borderRadius: '1rem' }}
                fill
                // width={100}
                // height={100}
                src={'/images/wordpress.jpg'}
                alt="wordpress-image"
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Innovation;
