import { Data } from "./Data";
import { useIncrementNumberInHTMLElementInnerText } from "./useIncrementNumberInHTMLElementInnerText";
import { useFindCounterH1 } from "./useFindCounterH1";

export function thenIncrementCount(data: Data) {
	const h1 = useFindCounterH1(data.counter);
	useIncrementNumberInHTMLElementInnerText(h1);
}
