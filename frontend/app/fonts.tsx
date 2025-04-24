// src/fonts.ts or app/fonts.ts

import { Urbanist, Plus_Jakarta_Sans } from 'next/font/google';

export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'], // for headings
  variable: '--font-urbanist',
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'], // for descriptions
  variable: '--font-plusjakarta',
});
