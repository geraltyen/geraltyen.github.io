
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
import resume from "../assets/fw20_1309_R_Giri_Reddy_Resume.pdf"
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
  const handleClick=(link)=>{
    if(isOpen){
      onClose()
    }else{
      onOpen()
    }
    scrolltosection(link)
     
  }

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
              <li  className='n-lis'  onClick={()=>{handleClick(about)} }>Home</li>
              <li  className='n-lis' onClick={()=>scrolltosection(skills)}>Skills</li>
               <li  className='n-lis' onClick={()=>scrolltosection(projects)}>Projects</li>
              <li  className='n-lis' onClick={()=>scrolltosection(gitStats)}>GitHub</li>
              <li  className='n-lis' onClick={()=>scrolltosection(footer)}>Contact</li>
              <li className='n-lis' >
                <Button
                                    onClick={()=>window.open("https://drive.google.com/file/d/18Lv83gxFAq4d4EWxGFproS_ju1DTpYey/view")}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                    _hover={{ bg:"orange" }}
                                    bg="black"
                                    color='white'
                                    textDecoration='none'
                                    padding='2 5'
                                    display={{ base: 'none', md: 'flex' }}
                                    target={"_blank"}
                                    rel="noreferrer"  
                                >
                                          <a href={resume} download={"fw20_1309_R_Giri_Reddy_Resume.pdf"}>RESUME</a>    
                                    </Button>
              </li>
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
                  src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966"
                />
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={2}>
              <li className='n-lis' onClick={()=>scrolltosection(about)}>Home</li>
              <li className='n-lis' onClick={()=>scrolltosection(skills)}>Skills</li>
                <li className='n-lis' onClick={()=>scrolltosection(projects)}>Projects</li>
              <li className='n-lis' onClick={()=>scrolltosection(gitStats)}>GitHub Stats</li>
              <li className='n-lis' onClick={()=>scrolltosection(footer)}>Contact me</li>
              <li className='n-lis' >
                <Button
                                    onClick={()=>window.open("https://drive.google.com/file/d/18Lv83gxFAq4d4EWxGFproS_ju1DTpYey/view")}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                    _hover={{ bg:"black" }}
                                    bg="orange"
                                    color='white'
                                    textDecoration='none'
                                    padding='2 5'
                                    display={{ md: 'flex' }}
                                    target={"_blank"}
                                    rel="noreferrer"  
                                >
                                          <a href={resume} download={"fw20_1309_R_Giri_Reddy_Resume.pdf"}>RESUME</a>    
                                    </Button>
              </li>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}