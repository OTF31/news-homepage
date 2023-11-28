import { AppShell, AppShellMain, Flex, Group, Image } from '@mantine/core'

import logo from '@/assets/images/logo.svg'
import NavBarDesktop from './_components/NavBarDesktop'
import NavBarMobile from './_components/NavBarMobile'
import Section1 from './_components/Section1'
import Section2 from './_components/Section2'
import Section3 from './_components/Section3'
import classes from './page.module.css'

const Home = () => {
  return (
    <AppShell classNames={{ root: classes.root }}>
      <AppShellMain className={classes.main}>
        <Group className={classes.header}>
          <Image src={logo.src} w={{ base: 45, xl: 64 }} alt='logo' />
          <NavBarMobile />
          <NavBarDesktop />
        </Group>
        <Flex className={classes['section12__container']}>
          <Section1 />
          <Section2 />
        </Flex>
        <Section3 />
      </AppShellMain>
    </AppShell>
  )
}

export default Home
