import { useCreateElement } from "./useCreateElement";

export function useCreateCounter(onButtonClick: () => void): Element {
	const counter = useCreateElement(`
		<div style="max-width: calc(100% - 2rem); width: 150px; margin: auto; margin-top: 5rem;">
			<div>
				<h1>0</h1>
			</div>

			<div>
				<button>+</button>
			</div>
		</div>
	`);

	const button = counter.querySelector("button");

	if (button instanceof HTMLButtonElement) {
		button.onclick = () => {
			onButtonClick();
		};
	}

	return counter;
}
