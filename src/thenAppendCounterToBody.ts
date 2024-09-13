import { Data } from "./Data";
import { useAppendToDocumentBody } from "./useAppendToDocumentBody";

export function thenAppendCounterToBody(data: Data) {
	useAppendToDocumentBody(data.counter);
}
