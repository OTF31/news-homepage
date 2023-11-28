import { Box, Flex, Group, Image, Text } from '@mantine/core'

import imageGamingGrowth from '@/assets/images/image-gaming-growth.jpg'
import imageRetro from '@/assets/images/image-retro-pcs.jpg'
import imageTopLaptops from '@/assets/images/image-top-laptops.jpg'
import classes from './Section3.module.css'

const items = [
  {
    order: '01',
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    image: imageRetro.src,
  },
  {
    order: '02',
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    image: imageTopLaptops.src,
  },
  {
    order: '03',
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    image: imageGamingGrowth.src,
  },
]

const Section3 = () => {
  return (
    <Flex className={classes['container']}>
      {items.map((item, index) => {
        const { order, title, description } = item

        return (
          <Group key={index} className={classes['item__container']}>
            <Image src={item.image} alt={order} />
            <Box>
              <Text className={classes['item__order']}>{order}</Text>
              <Text className={classes['item__title']}>{title}</Text>
              <Text className={classes['item__description']}>{description}</Text>
            </Box>
          </Group>
        )
      })}
    </Flex>
  )
}

export default Section3
