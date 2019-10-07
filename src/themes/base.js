// modified from the rebass material preset
// work in progress

export const baseColors = {
    black: '#000',
    white: '#FFF',
    night: '#020322',
    green: '#91B650',
    yellow: '#E7B237',
    orange: '#D37D29',
    red: '#B7363E',
    purple: '#7A4794',
    blue: '#5FA3D9',
    washed: '#FBFBD8',
    gray: '#78909C',
}

export const base = {
    colors: {
        ...baseColors,
        text: baseColors.black,
        background: baseColors.white,
        primary: baseColors.orange,
        secondary: baseColors.blue,
        muted: baseColors.washed,
    },
    fonts: {
        body: '"IA Writer Quattro S", system-ui, sans-serif',
        heading: '"Jost", system-ui, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [
      10, 12, 14, 16, 20, 24, 34, 48, 60, 96
    ],
    fontWeights: {
      body: 400,
      heading: 400,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.2,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: {
      icon: 24,
      avatar: 48,
    },
    radii: {
      default: 0,
      circle: 99999,
    },
    // rebass variants
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
      },
      display: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        fontSize: [ 6, 7 ],
      },
      caps: {
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      },
    },
    forms: {
      label: {
        marginTop: 3,
        marginBottom: 1,
        textTransform: 'lowercase',
        color:'gray'
      },
      input: {
        borderColor:'primary',
        color:'text'
      },
      textarea: {
        borderColor:'primary',
        color:'text'
      },
    },
    variants: {
      link: {
        color: 'primary',
        fontWeight: 'bold',
        textDecoration: 'none',
      },
      nav: {
        fontSize: 2,
        fontWeight: 'bold',
        display: 'inline-block',
        p: 2,
        color: 'inherit',
        textDecoration: 'none',
        ':hover,:focus,.active': {
          color: 'primary',
        }
      },
    },
    buttons: {
      primary: {
        textTransform: 'lowercase',
        fontSize: 2,
        fontWeight: 'body',
        color: 'background',
        bg: 'primary',
        borderRadius: 'default',
      },
      outline: {
        variant: 'buttons.primary',
        color: 'primary',
        bg: 'transparent',
        boxShadow: 'inset 0 0 2px',
      },
      secondary: {
        variant: 'buttons.primary',
        color: 'background',
        bg: 'secondary',
      },
    },
}

export default base