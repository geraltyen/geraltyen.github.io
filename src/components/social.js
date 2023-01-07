import { Box, Button, Center, Stack, Text } from '@chakra-ui/react';
import "../css/footer.css"
export default function Socialmedia() {
  return (
    <div className='foot'>
    <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'300px'}>
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'}>
          <Center>
            <a href='https://www.facebook.com/greystarktony/'><Text className='s-text'>Check out my Facebook</Text></a>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'}  >
          <Center >
            <a href='https://www.linkedin.com/in/giri-reddy-geralt/'><Text className='s-text'>Get in touch LinkedIn</Text></a>
          </Center>
        </Button>
        <Text >No You have to Click on the text not the buttons</Text>
      </Stack>
    </Center>
    </div>
  );
}
