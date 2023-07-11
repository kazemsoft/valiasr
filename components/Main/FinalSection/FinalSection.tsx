import { Box, Grid, GridItem } from '@chakra-ui/react';
import Section from '../../global/Section/Section';
import CommentCard from '../../global/CommentCard/CommentCard';

// A friend's words are better than anything... 😉
const FinalSection = () => {
  return (
    <Box marginTop={'100px'}>
      <Section title="A friend's words are better than anything... 😉" />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop={'50px'}>
        <GridItem colSpan={1}>
          <CommentCard
            src={'/images/izadyar.jpg'}
            alt="user-logo"
            comment={`"With their advice and guidance, our order was prepared very quickly and on time."`}
            userInfo={`Mr. Izdiyar - Manager of Mr. Namak`}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <CommentCard
            src={'/images/talaee.jpg'}
            alt="user-logo"
            comment={`"I can say in one word that their work was excellent. They implemented exactly what we wanted with complete compassion."`}
            userInfo={`Mr. Talai - Co-programmer`}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FinalSection;
