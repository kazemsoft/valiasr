import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

type CustomButtonProps = ButtonProps & {
  children: string | JSX.Element;
};
const CustomButton = ({
  children,
  marginTop = '3rem',
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      {...rest}
      sx={{ '&:hover': { bg: '#0f7e1f' } }}
      colorScheme={'greenButton'}
      color={'white'}
      marginTop={marginTop}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
