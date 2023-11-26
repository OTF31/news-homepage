'use client'

import { MantineThemeOverride, createTheme } from '@mantine/core'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

const theme: MantineThemeOverride = createTheme({
  breakpoints: { xs: '23.4375em', sm: '48em', md: '62em', lg: '75em', xl: '90em' },
  fontFamily: inter.style.fontFamily,
  colors: {
    yellow_: [
      '#FDF7EE',
      '#FBEEDC',
      '#F8E6CB',
      '#F6DDBA',
      '#F2CC97',
      '#EDBB75',
      '#E9AA52',
      '#BA8842',
      '#8C6631',
      '#5D4421',
    ],
    lightVermillion: [
      '#FEEFEE',
      '#FCDFDC',
      '#FBCECB',
      '#F9BEB9',
      '#F79E97',
      '#F47D74',
      '#F15D51',
      '#C14A41',
      '#913831',
      '#602520',
    ],
    almostWhite: [
      '#FFFFFF',
      '#FFFFFE',
      '#FFFEFE',
      '#FFFEFD',
      '#FFFEFC',
      '#FFFDFB',
      '#FFFDFA',
      '#CCCAC8',
      '#999896',
      '#666564',
    ],
    silver: [
      '#F9F9FA',
      '#F3F4F5',
      '#EEEEF0',
      '#E8E8EB',
      '#DCDDE2',
      '#D1D1D8',
      '#C5C6CE',
      '#9E9EA5',
      '#76777C',
      '#4F4F52',
    ],
    gunmetal: [
      '#EFEFF2',
      '#DFDFE4',
      '#CFCFD7',
      '#BFBFCA',
      '#9EA0AF',
      '#7E8095',
      '#5E607A',
      '#4B4D62',
      '#383A49',
      '#262631',
    ],
    darkSpaceBlue: [
      '#E6E6E8',
      '#CCCCD1',
      '#B3B3BA',
      '#9999A3',
      '#666676',
      '#333348',
      '#00001A',
      '#000015',
      '#000010',
      '#00000A',
    ],
  },
})

export { theme }
