import { Data } from "./Data";
import { thenIncrementCount } from "./thenIncrementCount";

export function whenIncrementButtonClicked(data: Data): void {
	thenIncrementCount(data);
}
