export function preventDefault(cb: (e: Event) => void) {
	return (e: Event) => {
		e.preventDefault()
		cb(e)
	}
}
