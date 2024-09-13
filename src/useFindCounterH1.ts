export function useFindCounterH1(counter: Element): HTMLElement {
	const h1 = counter.querySelector("h1");

	if (h1 instanceof HTMLElement) {
		return h1;
	}

	throw new Error("Counter element does not countain an h1");
}
