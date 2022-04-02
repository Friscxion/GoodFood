import { Component } from 'react';
import { Box, Button, Container, Flex, Grid, GridItem, Input, Text } from '@chakra-ui/react';
import {BsFacebook} from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

export default class Login extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container textAlign={"center"}w={'80%'}>
        <Input placeholder="Email, Nom d'utilisateur" bg={'goodfood.white'} mt={10} />
        <Input placeholder='Mot de passe' bg={'goodfood.white'} type={"password"} mt={3}/>
        <Text align={'left'} mt={3} color={"goodfood.red"} fontSize={'sm'}>Mot de passe oublié?</Text>
        <Button bg={"goodfood.red"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} mt={50}>
          Se connecter
        </Button>
        <Text fontWeight={"bold"} my={8}>Ou</Text>
        <Button bg={"goodfood.facebook"} color={"goodfood.white"} w={"100%"} borderRadius={"100"} >
          <Grid width={"100%"} templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem></GridItem>
            <GridItem  d={'flex'} alignItems={"center"}><BsFacebook/></GridItem>
            <GridItem d={'flex'} alignItems={"center"}>Se connecter avec Facebook</GridItem>
          </Grid>

        </Button>
        <Button bg={"goodfood.white"} color={"goodfood.blue"} w={"100%"} borderRadius={"100"} mt={3}>
          <Grid width={"100%"} templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem></GridItem>
            <GridItem  d={'flex'} alignItems={"center"}><FcGoogle/></GridItem>
            <GridItem d={'flex'} alignItems={"center"}>Se connecter avec Google</GridItem>
          </Grid>
        </Button>
      </Container>
    );
  }
}
