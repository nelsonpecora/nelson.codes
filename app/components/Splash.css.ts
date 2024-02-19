import { style } from '@vanilla-extract/css';

const glowingLink = style({
  color: 'var(--bg-color)',
  transition: 'text-shadow 250ms ease-out',
  ':hover': {
    textShadow: '0 0 8px var(--glow)',
  },
});

export const root = style({
  background: 'url(/nebula.png)',
  alignItems: 'center',
  display: 'flex',
  height: '100vh',
  width: '100vw',
  justifyContent: 'center',
  position: 'relative',
});

export const nav = style({
  maxWidth: '800px',
  padding: '20px 0',
  width: '100%',
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  fontFamily: 'var(--heading-font)',
  color: 'var(--bg-color)',
  '@media': {
    'screen and (min-width: 768px)': {
      flexFlow: 'row nowrap',
    },
  },
});

export const link = style([
  glowingLink,
  {
    margin: '20px',
  },
]);

export const logo = style({
  display: 'block',
  width: '250px',
  order: -1,
  '@media': {
    'screen and (min-width: 768px)': {
      order: 0,
    },
  },
});

export const cta = style([
  glowingLink,
  {
    bottom: '70px',
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontFamily: 'var(--heading-font)',
  },
]);

export const ctaArrow = style({
  display: 'inline-block',
  height: '24px',
  width: '24px',
  marginLeft: '7px',
});
