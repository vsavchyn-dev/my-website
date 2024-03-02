import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
  Flex,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import ProjectsArray from './ProjectsArray';
import OtherProjectsArray from './OtherProjectsArray';
import TagsArray from './TagsArray';

export default function Projects({ color }) {
  const projects = ProjectsArray();
  const others = OtherProjectsArray();
  const options = TagsArray('ProjectsTags');

  const [selected, setSelected] = useState('All');

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={'3xl'} id="projects">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}>
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade key={project.projectID} bottom triggerOnce>
                <Card
                  key={project.name}
                  direction={{
                    base: 'column',
                  }}
                  overflow="hidden">
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <Link key={button.text} href={button.href} isExternal>
                            <Button color={`${color}.400`}>{button.text}</Button>
                          </Link>
                        ))}
                      </HStack>
                      <Flex flexWrap="wrap" pt={4}>
                        {project.badges.map((badge) => (
                          <Badge
                            mt={0.5}
                            mr={2}
                            mb={0.5}
                            key={badge.text}
                            colorScheme={badge.colorScheme}>
                            {badge.text}
                          </Badge>
                        ))}
                      </Flex>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          <Text color={'gray.600'} fontSize={'xl'} px={4}>
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline" flexWrap="wrap" justifyContent="center">
              <Button
                mt={0.5}
                mb={0.5}
                colorScheme={selected === 'All' ? `${color}` : 'gray'}
                onClick={() => handleSelected('All')}>
                All
              </Button>
              {options.map((option) => (
                <Button
                  mt={0.5}
                  mb={0.5}
                  colorScheme={selected === option.value ? `${color}` : 'gray'}
                  onClick={() => handleSelected(option.value)}
                  key={option.value}>
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === 'All') {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other) => (
                <Fade bottom key={other.name} triggerOnce>
                  <Card key={other.name}>
                    <CardBody align="left" h={[null, '40vh']}>
                      <Stack>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <Flex flexWrap="wrap">
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              isExternal
                              mr={2}
                              mb={0.5}
                              color={`${color}.400`}>
                              {button.text}
                            </Link>
                          ))}
                        </Flex>
                        <Flex flexWrap="wrap">
                          {other.badges.map((badge) => (
                            <Badge
                              mt={0.5}
                              mr={2}
                              mb={0.5}
                              key={badge.text}
                              colorScheme={badge.colorScheme}>
                              {badge.text}
                            </Badge>
                          ))}
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
