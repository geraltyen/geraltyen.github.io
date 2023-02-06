
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import rglogo from "../assets/rglogo.jpg"
import resume from "../assets/R_Giri_Reddy_Resume.pdf"
import "../css/Navbarsec.css"

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbarto({scrolltosection,home, about, skills, projects, footer,gitStats}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className='secnav' bg={useColorModeValue('#000000.100', '#000000.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            color="red"
            bgColor="orange"
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon color="black" />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <li  className='n-lis'  onClick={()=>scrolltosection(about)}>About me</li>
              <li  className='n-lis' onClick={()=>scrolltosection(skills)}>Skills</li>
               <li  className='n-lis' onClick={()=>scrolltosection(projects)}>Projects</li>
              <li  className='n-lis' onClick={()=>scrolltosection(gitStats)}>GitHub</li>
              <li  className='n-lis' onClick={()=>scrolltosection(footer)}>Contact</li>
              <li className='n-lis' ><a className='n-lis' target="_blank" href="https://drive.google.com/file/d/18Lv83gxFAq4d4EWxGFproS_ju1DTpYey/view?usp=share_link" >Resume</a></li>
              <li className='n-lis' ><a className='n-lis' target="_blank" href={resume}  download >Download CV</a></li>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'lg'}
                  src={
                    rglogo
                  }
                />
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <li className='n-lis' onClick={()=>scrolltosection(about)}>About me</li>
              <li className='n-lis' onClick={()=>scrolltosection(skills)}>Skills</li>
                <li className='n-lis' onClick={()=>scrolltosection(projects)}>Projects</li>
              <li className='n-lis' onClick={()=>scrolltosection(gitStats)}>GitHub Stats</li>
              <li className='n-lis' onClick={()=>scrolltosection(footer)}>Contact me</li>
              <li className='n-lis'><a target="_blank" href={resume}  download >Resume</a></li>
              <li className='n-lis' ><a className='n-lis' target="_blank" href={resume}  download >Download CV</a></li>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}