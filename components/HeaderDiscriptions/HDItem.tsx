import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const HDItem = () => {
    return (
        <Grid templateColumns={"repeat(2,1fr)"}>
            <GridItem colSpan={1}>
                ANIMATION
            </GridItem>
            <GridItem colSpan={1}>
                <Box>
                    <Text>
                        A programming group with a lot of creative ideas

                        Ready to transform your business

                        To a lucrative startup!
                    </Text>
                    <Button>
                        Contact Us
                    </Button>
                </Box>
            </GridItem>
        </Grid>
    )
}

export default HDItem