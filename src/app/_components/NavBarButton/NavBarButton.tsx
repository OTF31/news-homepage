'use client'

import { Burger, Drawer, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'

import classes from './NavBarButton.module.css'

const NavBarButton = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Drawer opened={opened} onClose={close} position='right' classNames={classes}>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>
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
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>

      <Burger className={classes['burger']} opened={opened} onClick={open} />
    </>
  )
}

export default NavBarButton
