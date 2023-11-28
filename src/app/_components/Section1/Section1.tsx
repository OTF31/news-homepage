import { Flex, Image, Stack, Text } from '@mantine/core'

import imageWeb3Desktop from '@/assets/images/image-web-3-desktop.jpg'
import imageWeb3Mobile from '@/assets/images/image-web-3-mobile.jpg'
import Button from '@/components/Button'
import classes from './Section1.module.css'

const Section1 = () => {
  return (
    <Stack className={classes['container']}>
      <Image src={imageWeb3Mobile.src} mah={300} alt='img-mobile' hiddenFrom='xl' />
      <Image src={imageWeb3Desktop.src} alt='img-desktop' visibleFrom='xl' />
      <Flex className={classes['container2']}>
        <Text className={classes['title']}>The Bright Future of Web 3.0?</Text>
        <Stack className={classes['container3']}>
          <Text className={classes['text']}>
            We dive into the next evolution of the web that claims to put the power of the
            platforms back into the hands of the people. But is it really fulfilling its
            promise?
          </Text>
          <Button>READ MORE</Button>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default Section1
