import { AppShell, AppShellMain, Group, Image } from '@mantine/core'

import logo from '@/assets/images/logo.svg'
import NavBarButton from './_components/NavBarButton'
import Section1 from './_components/Section1'
import Section2 from './_components/Section2'
import Section3 from './_components/Section3'
import classes from './page.module.css'

const Home = () => {
  return (
    <AppShell>
      <AppShellMain className={classes.main}>
        <Group justify='space-between'>
          <Image src={logo.src} w={45} alt='logo' />
          <NavBarButton />
        </Group>
        <Section1 />
        <Section2 />
        <Section3 />
      </AppShellMain>
    </AppShell>
  )
}

export default Home
