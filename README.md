# hyper-crt-theme
makes your terminal look old-school

![screenshot1](screenshots/screenshot1.png?raw=true)
![screenshot2](screenshots/screenshot2.png?raw=true)
## what
this is a simple plugin/theme for Hyper (or HyperTerm) that makes your terminal look like a retro CRT screen.

## installation
`npm -i hyper-crt-theme`

next, in your `.hyper.js` file, add the following to the config:
```
crt: {
  effects: [
    'vignette',
    'screen-door',
    'color-separation',
    'active-tab',
  ]
},
```
and in the `plugins` array, add `hyper-crt-them` like this:
```
plugins: [
    ...
    'hyper-crt-theme',
    ...
]
```
without these steps, the theme will not load.

## configuration
you can remove any of the effects by removing it from the array you added above. the order of the effects doesn't matter.
