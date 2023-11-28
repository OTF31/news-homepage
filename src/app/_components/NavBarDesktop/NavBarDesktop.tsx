import { Box, Group, Text } from '@mantine/core'
import Link from 'next/link'

import classes from './NavBarDesktop.module.css'

const NavBarDesktop = () => {
  return (
    <Box visibleFrom='xl'>
      <Group className={classes['link__container']}>
        <Text component={Link} href='#' className={classes['link__item']}>
          Home
        </Text>
        <Text component={Link} href='#' className={classes['link__item']}>
          New
        </Text>
        <Text component={Link} href='#' className={classes['link__item']}>
          Popular
        </Text>
        <Text component={Link} href='#' className={classes['link__item']}>
          Trending
        </Text>
        <Text component={Link} href='#' className={classes['link__item']}>
          Categories
        </Text>
      </Group>
    </Box>
  )
}

export default NavBarDesktop
