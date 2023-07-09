import React from 'react';
import { List as ChakraList, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const List = () => {
  return (
    <ChakraList spacing={3} marginTop={'2rem'}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Using the WordPress content management system
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Popular WooCommerce store builder
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        PWA application powered by the popular React.js framework
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Preparation and delivery of Android application (APK)
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        Integrity and non-interference of different parts due to 100% coding by
        our own team.
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        SMS membership and login system
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="green.500" />
        And ...
      </ListItem>
    </ChakraList>
  );
};

export default List;
