/**
 * @name dracula
 * @author dracula
 * Michael Kaminsky (http://github.com/mkaminsky11)
 * Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)
 */
import { tags } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';


const dracula = (alpha: string | number = 1) => createTheme({
  theme: 'dark',
  settings: {
    background: `rgba(40, 42, 54 ,${alpha})`,
    foreground: '#f8f8f2',
    caret: '#f8f8f0',
    selection: 'rgba(255, 255, 255, 0.1)',
    selectionMatch: 'rgba(255, 255, 255, 0.2)',
    gutterBackground: `rgb(40, 42, 54 ,${alpha})`,
    gutterForeground: '#6D8A88',
    lineHighlight: 'rgba(255, 255, 255, 0.1)',
  },
  styles: [
    { tag: tags.comment, color: '#6272a4' },
    { tag: tags.string, color: '#f1fa8c' },
    { tag: tags.atom, color: '#bd93f9' },
    { tag: tags.meta, color: '#f8f8f2' },
    { tag: [tags.keyword, tags.operator, tags.tagName], color: '#ff79c6' },
    { tag: [tags.function(tags.propertyName), tags.propertyName], color: '#66d9ef' },
    { tag: [tags.definition(tags.variableName), tags.function(tags.variableName), tags.className, tags.attributeName], color: '#50fa7b' },
    { tag: tags.atom, color: '#bd93f9' },
  ],
});




export default dracula;