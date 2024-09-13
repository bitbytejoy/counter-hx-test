export function useParseNumberFromHTMLElementInnerText(
	element: HTMLElement
): number {
	const number = parseInt(element.innerText);

	if (Number.isFinite(number)) {
		return number;
	}

	return 0;
}
