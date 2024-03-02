import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Link,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import ProfileArray from './ProfileArray';
import * as TbIcons from 'react-icons/tb';

// eslint-disable-next-line no-unused-vars
export default function Nav({ color }) {
  const profile = ProfileArray();
  // eslint-disable-next-line no-unused-vars
  const colors = {
    blue: '#3182CE',
    cyan: '#00B5D8',
    gray: '#718096',
    green: '#38A169',
    orange: '#DD6B20',
    pink: '#D53F8C',
    purple: '#805AD5',
    red: '#E53E3E',
    teal: '#319795',
    yellow: '#D69E2E',
  };
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');

  const scrollToObjById = (objIdName) => {
    const obj = document.querySelector(`#${objIdName}`);
    if (obj) {
      window.scrollTo({ top: obj.offsetTop - 80, behavior: 'smooth' });
    } else {
      throw new Error('Element is not there! Obj id name is ' + objIdName);
    }
  };

  const scrollToHero = () => {
    const heroSection = document.querySelector('#hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  };

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  return (
    <>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        h={16}
        boxShadow={scroll ? 'base' : 'none'}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={'center'}
        justifyContent={'space-between'}
        w="100%">
        <Link onClick={scrollToHero}>
          <Image boxSize="36px" src="../favicon.svg" />
        </Link>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={() => scrollToObjById('about')}>
                  About
                </Button>
                <Button variant="ghost" onClick={() => scrollToObjById('experience')}>
                  Experience
                </Button>
                <Button variant="ghost" onClick={() => scrollToObjById('projects')}>
                  Projects
                </Button>
                <Button variant="ghost" onClick={() => scrollToObjById('contact')}>
                  Contact
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button as={IconButton} icon={<HamburgerIcon />} onClick={onOpen}></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={() => scrollToObjById('about')}>
                        About
                      </Button>
                      <Button variant="ghost" onClick={() => scrollToObjById('experience')}>
                        Experience
                      </Button>
                      <Button variant="ghost" onClick={() => scrollToObjById('projects')}>
                        Projects
                      </Button>
                      <Button variant="ghost" onClick={() => scrollToObjById('contact')}>
                        Contact
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
