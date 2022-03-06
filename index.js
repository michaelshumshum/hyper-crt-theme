const foregroundColor = '#fff';
const backgroundColor = 'rgba(15,15,30,0.95)';
const selectionColor = 'rgba(255,255,255,0.20)';

const cssVars = {
  'textShadow': '0.15em 0 1px rgba(0, 30, 255, 0.4), -0.15em 0 1px rgba(255, 0, 80, 0.4), 0 0 3px rgba(200, 200, 200, 0.3);',
  'dropShadow': 'drop-shadow(0.15em 0 1px rgba(0, 30, 255, 0.4)) drop-shadow(-0.15em 0 1px rgba(255, 0, 80, 0.4)) drop-shadow(0 0 3px rgba(200, 200, 200, 0.3));',
}

const cssEffects = {
  'screen-door': '.hyper_main::after {content: " "; display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 1000; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.05), rgba(0, 255, 0, 0.05), rgba(0, 0, 255, 0.05)); background-size: 100% 0.4em, 0.4em 100%; pointer-events: none; }',
  'vignette': '.hyper_main::before {content: " "; display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: 1000; z-index: 1001; box-shadow: inset 0px 0px 4em 4em rgba(0, 0, 0, 0.5); pointer-events: none;}',
  'color-separation': `* {text-shadow: ${cssVars.textShadow}} .xterm {filter: ${cssVars.dropShadow}}`,
  'active-tab': 'li.tab_active {font-style: italic; } li.tab_active:after { content: " "; display: block; position: absolute; opacity: 75%; top: 0; left: 6em; bottom: 0; right: 6em; z-index: 2; border-bottom: 0.1em solid white;',
}

exports.decorateConfig = config => {
  let c = Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
  })
  var cssNew = `* {font-family: ${c.fontFamily}} div.tabs_title, span.tab_textInner { font-weight: bold; font-size 10pt; } .splitpane_pane { box-shadow: inset 0 0 0.1em 0 rgba(255, 255, 255, 100) }`
  c.crt.effects.forEach(effect => {
    cssNew += cssEffects[effect]
  })
  c.css = cssNew
  return c
}