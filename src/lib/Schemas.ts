// A distinct mode, defaulting to 'default'.
export type Mode = {
	name: string
}

const KEYS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'Enter',
	'Escape',
	'Backspace',
	'Tab',
	'Space',
	'ArrowUp',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'F1',
	'F2',
	'F3',
	'F4',
	'F5',
	'F6',
	'F7',
	'F8',
	'F9',
	'F10',
	'F11',
	'F12',
	'Insert',
	'Delete',
	'Home',
	'End',
	'PageUp',
	'PageDown',
	'CapsLock',
	'NumLock',
	'ScrollLock',
	'Pause',
	'PrintScreen',
	'ContextMenu',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'-',
	'_',
	'=',
	'+',
	'[',
	']',
	'{',
	'}',
	'\\',
	'|',
	';',
	':',
	"'",
	'"',
	',',
	'<',
	'.',
	'>',
	'/',
	'?',
	'`',
	'~',
] as const

type Key = (typeof KEYS)[number]

export type KeyEvent = {
	press: Key[]
	shift?: true
	ctrl?: true
	opt?: true
	cmd?: true
}

export type Shortcut = {
	sequences: KeyEvent[]
	action: string
	mode?: Mode
	entersMode?: Mode
	exitsMode?: Mode
}
