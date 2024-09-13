import { useParseNumberFromHTMLElementInnerText } from "./useParseNumberFromHTMLElementInnerText";

export function useIncrementNumberInHTMLElementInnerText(
	element: HTMLElement
): void {
	if (element instanceof HTMLElement) {
		let count = useParseNumberFromHTMLElementInnerText(element);
		count++;
		element.innerText = count.toString();
	}
}
