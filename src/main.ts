import { Data } from "./Data";
import "./style.css";
import { useCreateCounter } from "./useCreateCounter";
import { whenAppStarts } from "./whenAppStarts";
import { whenIncrementButtonClicked } from "./whenIncrementButtonClicked";

function main() {
	const data: Data = {
		counter: useCreateCounter(() => whenIncrementButtonClicked(data)),
	};

	whenAppStarts(data);
}

main();
