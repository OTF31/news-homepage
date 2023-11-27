import { Box, Stack, Text } from '@mantine/core'

import classes from './Section2.module.css'

const Section2 = () => {
  return (
    <Stack className={classes['container']}>
      <Text className={classes['text']}>New</Text>
      <Box>
        <Stack className={classes['item__container']}>
          <Text className={classes['item__text1']}>Hydrogen VS Electric Cars</Text>
          <Text className={classes['item__text2']}>
            Will hydrogen-fueled cars ever catch up to EVs?
          </Text>
        </Stack>
        <Box className={classes['item__divider']} />
        <Stack className={classes['item__container']}>
          <Text className={classes['item__text1']}>The Downsides of AI Artistry</Text>
          <Text className={classes['item__text2']}>
            What are the possible adverse effects of on-demand AI image generation?
          </Text>
        </Stack>
        <Box className={classes['item__divider']} />
        <Stack className={classes['item__container']}>
          <Text className={classes['item__text1']}>Is VC Funding Drying Up?</Text>
          <Text className={classes['item__text2']}>
            Private funding by VC firms is down 50% YOY. We take a look at what that
            means.
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Section2
