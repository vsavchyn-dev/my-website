/* eslint-disable prettier/prettier */
import { Divider, Stack, Text, Container, Box, HStack, useColorModeValue } from '@chakra-ui/react';
import ProfileArray from './ProfileArray';

export default function About({ whiteModeColor, blackModeColor }) {
  const profile = ProfileArray();
  const defaultColor = useColorModeValue(`${whiteModeColor}.400`, `${blackModeColor}.400`)
  return (
    <>
      <Container maxW={'3xl'} id="about">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 70, md: 36 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={defaultColor} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text
            color={'gray.500'}
            fontSize={'xl'}
            px={12}
            dangerouslySetInnerHTML={{ __html: profile.about }}></Text>
        </Stack>
      </Container>
    </>
  );
}
