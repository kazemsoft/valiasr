import { Box, ChakraProps, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import Button from '../../global/Button/CustomButton'
import { Controls, Player } from '@lottiefiles/react-lottie-player'

type HDItemProps = {
  playerSource: string,
  textArray: { id: number, text: React.ReactElement }[],
  button: boolean,
}
const HDItem = ({ playerSource, textArray, button }: HDItemProps) => {
  return (
    <Grid dir='rtl' templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}>
      <GridItem colSpan={1}>
        <Player
          autoplay
          loop
          src={playerSource}
          style={{ height: '100%', width: '100%' }}
        />
      </GridItem>
      <GridItem lineHeight={'3rem'} fontSize={'xl'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} colSpan={1}>
        {textArray.map((text, index) => <Fragment key={text.id}>{text.text}</Fragment>)}
        {button && <Button>
          Contact Us
        </Button>}
      </GridItem>
    </Grid>
  )
}

export default HDItem
