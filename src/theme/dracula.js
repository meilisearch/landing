import get from 'utils/get'

const dracula = {
  'code[class*="language-"]': {
    color: '#f8f8f2',
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#f8f8f2',
    background: '#282a36',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#282a36',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  'comment': {
    color: '#6272a4',
  },
  'prolog': {
    color: '#6272a4',
  },
  'doctype': {
    color: '#6272a4',
  },
  'cdata': {
    color: '#6272a4',
  },
  'punctuation': {
    color: '#f8f8f2',
  },
  '.namespace': {
    Opacity: '.7',
  },
  'property': {
    color: get('colors.hotPink'),
  },
  'tag': {
    color: get('colors.hotPink'),
  },
  'constant': {
    color: get('colors.hotPink'),
  },
  'symbol': {
    color: get('colors.hotPink'),
  },
  'deleted': {
    color: get('colors.hotPink'),
  },
  'boolean': {
    color: '#bd93f9',
  },
  'number': {
    color: '#bd93f9',
  },
  'selector': {
    color: get('colors.lila.400'),
  },
  'attr-name': {
    color: get('colors.lila.400'),
  },
  'string': {
    color: get('colors.lila.400'),
  },
  'char': {
    color: get('colors.lila.400'),
  },
  'builtin': {
    color: get('colors.lila.400'),
  },
  'inserted': {
    color: get('colors.lila.400'),
  },
  'operator': {
    color: '#f8f8f2',
  },
  'entity': {
    color: '#f8f8f2',
    cursor: 'help',
  },
  'url': {
    color: '#f8f8f2',
  },
  '.language-css .token.string': {
    color: '#f8f8f2',
  },
  '.style .token.string': {
    color: '#f8f8f2',
  },
  'variable': {
    color: '#f8f8f2',
  },
  'atrule': {
    color: get('colors.candleLight.400'),
  },
  'attr-value': {
    color: get('colors.candleLight.400'),
  },
  'function': {
    color: get('colors.candleLight.400'),
  },
  'class-name': {
    color: get('colors.candleLight.400'),
  },
  'keyword': {
    color: get('colors.tertiary'),
  },
  'regex': {
    color: '#ffb86c',
  },
  'important': {
    color: '#ffb86c',
    fontWeight: 'bold',
  },
  'bold': {
    fontWeight: 'bold',
  },
  'italic': {
    fontStyle: 'italic',
  },
}

export default dracula
