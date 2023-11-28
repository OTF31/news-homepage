'use client'

import { Burger, CloseButton, Drawer, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

import classes from './NavBarMobile.module.css'

const NavBarMobile = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position='right'
        classNames={classes}
        withCloseButton={false}
      >
        <Stack align='flex-end'>
          <CloseButton c='darkSpaceBlue' onClick={close} size={48} iconSize={48} />
        </Stack>
        <Stack className={classes['link__container']}>
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
        </Stack>
      </Drawer>

      <Burger className={classes['burger']} opened={opened} onClick={open} />
    </>
  )
}

export default NavBarMobile
