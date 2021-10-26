import { css } from 'styled-components'

export const customProperties = css`
  :root {
    /* colors */
    --c-dark: 230 35% 7%;
    --c-light: 231 77% 90%;
    --c-white: 0 0% 100%;

    /* font-sizes */
    --fs-1: 9.375rem;
    --fs-2: 6.25rem;
    --fs-3: 3.5rem;
    --fs-4: 2rem;
    --fs-5: 1.75rem;
    --fs-6: 1.125rem;
    --fs-7: 1rem;
    --fs-8: 0.875rem;

    /* font-families */
    --ff-serif: 'Bellefair', serif;
    --ff-sans-cond: 'Barlow Condensed', sans-serif;
    --ff-sans-normal: 'Barlow', sans-serif;
  }

  body {
    font-family: var(--ff-sans-normal);
    font-size: var(--fs-6);
    color: hsl(var(--c-white));
    background-color: hsl(var(--c-dark));
  }
`
