import { Button } from '@chakra-ui/react'
import React from 'react'

type CustomButtonProps = {
    children: string | JSX.Element
}
const CustomButton = ({ children }: CustomButtonProps) => {
    return (
        <Button sx={{ "&:hover": { bg: "#0f7e1f" } }} colorScheme={'greenButton'} color={'white'} marginTop={'3rem'}>
            {children}
        </Button>
    )
}

export default CustomButton