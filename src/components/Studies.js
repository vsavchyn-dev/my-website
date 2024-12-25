import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Fade } from 'react-awesome-reveal';
// import { useState, useEffect } from 'react';
import StudiesArray from './StudiesArray';
// import TagsArray from './TagsArray';

export default function Studies({ whiteModeColor, blackModeColor }) {
  const studies = StudiesArray();
  // const options = TagsArray('StudiesTags');
  // const [selected, setSelected] = useState('');

  // const simpleColor = useColorModeValue(whiteModeColor, blackModeColor);
  const defaultColor = useColorModeValue(`${whiteModeColor}.400`, `${blackModeColor}.400`);
  const hooverColor = useColorModeValue(`${whiteModeColor}.500`, `${blackModeColor}.500`);

  return (
    <>
      <Container maxW={'3xl'} id={'studies'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 70, md: 36 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={defaultColor} fontWeight={800}>
                02
              </Text>

              <Text fontWeight={800}>Studies</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          <Stack px={4} spacing={4}>
            {studies.map((exp) => (
              <Fade key={exp.companyID} bottom triggerOnce>
                <Card key={exp.companyID} size="sm">
                  <CardHeader>
                    <Flex justifyContent="space-between">
                      <HStack>
                        <Image src={exp.image} h={50} />
                        <Box px={2} align="left">
                          <Text fontWeight={600}>{exp.company}</Text>
                          <Text>{exp.position}</Text>
                        </Box>
                      </HStack>
                      <Text px={2}>{exp.duration}</Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Flex>
                      <List align="left" spacing={3}>
                        {exp.listItems.map((item, index) => (
                          <ListItem key={index}>
                            <Stack direction="row">
                              <ListIcon boxSize={6} as={ChevronRightIcon} color={hooverColor} />
                              <Text align="left">{item}</Text>
                            </Stack>
                          </ListItem>
                        ))}
                      </List>
                    </Flex>
                  </CardBody>
                  <CardFooter overflow="auto">
                    <Flex flexWrap={'wrap'} pt={1}>
                      {exp.badges.map((badge) => (
                        <Badge
                          key={badge.name}
                          mt={0.5}
                          mr={2}
                          mb={0.5}
                          colorScheme={badge.colorScheme}>
                          {badge.name}
                        </Badge>
                      ))}
                    </Flex>
                  </CardFooter>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
