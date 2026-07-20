/**
 * Public surface of the rich-text editor feature.
 *
 * Other features must import from `@features/editor-rte` only — never from a
 * path inside it. Everything below `editor-rte/` (primitives/, nodes/,
 * extensions/, hooks/, lib/) is vendored Tiptap code and is private to this
 * feature; reaching into it couples callers to that vendoring.
 *
 * This is the one sanctioned cross-feature dependency: studio -> editor-rte.
 */

export { MarkButton } from './ui/mark-button';
export { ListDropdownMenu } from './ui/list-dropdown-menu';
export { TextAlignButton } from './ui/text-align-button';
export { BlockquoteButton } from './ui/blockquote-button';
export { ColorTextPopover } from './ui/color-text-popover';
export { HeadingDropdownMenu } from './ui/heading-dropdown-menu';
export { ColorHighlightPopover } from './ui/color-highlight-popover';
