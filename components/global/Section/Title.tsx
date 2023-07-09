import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { SectionProps } from './Section';

type TitleProps = SectionProps;
const Title = ({ title, description, boldText }: TitleProps) => {
  return (
    <Box>
      <Box
        sx={{
          width: '78px',
          height: '4px',
          marginBottom: '1rem',
          backgroundColor: 'main.secondaryColor',
        }}
      ></Box>
      <Heading  as={'h2'} color={'main.lightBlueColor'}>
        {title}:
      </Heading>
      <Text marginTop={'1rem'}>{description}</Text>
      {boldText && (
        <Heading
          fontWeight={'light'}
          marginTop={'1.75rem'}
          marginBottom={'4rem'}
          as={'h4'}
          size="md"
        >
          {boldText}
        </Heading>
      )}
    </Box>
  );
};

export default Title;
