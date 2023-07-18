import {
  Box,
  Button,
  FormControl,
  Grid,
  GridItem,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import CustomButton from '../global/Button/CustomButton';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns={'repeat(1, 1fr)'} gap={2}>
        <GridItem colSpan={1}>
          <Input
            placeholder="Your name"
            name="name"
            {...register('name', { required: true })}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Input
            placeholder="Your email"
            name="email"
            type="email"
            {...register('email', { required: true })}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Textarea
            placeholder="Your message"
            name="message"
            {...register('message', { required: true })}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <CustomButton width={'full'} marginTop={0} type="submit">
            submit
          </CustomButton>
        </GridItem>
      </Grid>
    </form>
  );
};

export default Form;
