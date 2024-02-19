import { style } from '@vanilla-extract/css';

export const root = style({
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

export const link = style({
  margin: '20px',
});

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

export const cta = style({
  bottom: '70px',
  position: 'absolute',
  textAlign: 'center',
  color: 'var(--bg-color)',
  width: '100%',
});

export const ctaArrow = style({
  height: '24px',
  marginLeft: '7px',
});
