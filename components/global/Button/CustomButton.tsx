import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

type CustomButtonProps = ButtonProps & {
  children: string | JSX.Element;
};
const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <Button
      {...rest}
      sx={{ '&:hover': { bg: '#0f7e1f' } }}
      colorScheme={'greenButton'}
      color={'white'}
      marginTop={'3rem'}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
