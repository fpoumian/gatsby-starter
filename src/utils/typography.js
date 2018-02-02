import Typography from 'typography'

const textStyles = {
  fontSize: '1rem',
  color: '#515050',
  lineHeight: '1.5rem',
}

const listStyles = {
  listStylePosition: 'inside',
}

const typography = new Typography({
  baseFontSize: '18px',
  // overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  //   '*': {
  //     minHeight: 0,
  //     minWidth: 0,
  //   },
  //   p: Object.assign({}, textStyles),
  //   span: Object.assign({}, textStyles),
  //   ul: {
  //     marginLeft: 0,
  //   },
  //   'ul > li': Object.assign({}, textStyles, listStyles),
  //   'h2,h3': {
  //     marginBottom: '1rem',
  //   },
  // }),
  // See below for the full list of options.
})

export default typography
