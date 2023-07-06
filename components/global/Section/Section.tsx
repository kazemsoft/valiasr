import { Box, Heading, Text } from '@chakra-ui/react';
import Title from './Title';

export type SectionProps = {
  title: string;
  description?: string;
  boldText?: string | React.ReactNode;
};

const Section = ({ title, description, boldText }: SectionProps) => {
  return <Title title={title} description={description} boldText={boldText} />;
};

export default Section;
