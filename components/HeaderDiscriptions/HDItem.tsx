import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import Button from '../Button/CustomButton'
import { Controls, Player } from '@lottiefiles/react-lottie-player'

const HDItem = () => {
    return (
        <Grid templateColumns={"repeat(2,1fr)"}>
            <GridItem colSpan={1}>
                <Player
                    autoplay
                    loop
                    src="/animations/109118-programming-effects.json"
                    style={{ height: '100%', width: '100%' }}
                />
            </GridItem>
            <GridItem lineHeight={'3rem'} fontSize={'xl'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} colSpan={1}>
                <Text>
                    A programming group with a lot of creative ideas
                </Text>
                <Text>
                    Ready to transform your business
                </Text>
                <Text>
                    To a lucrative startup!
                </Text>
                <Button>
                    Contact Us
                </Button>
            </GridItem>
        </Grid>
    )
}

export default HDItem