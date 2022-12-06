import { CoolButton } from "@packages/button";

describe("button.cy.ts", () => {
	it("uses custom text for the button label", () => {
		cy.mount(<CoolButton label={"Cool"} />);
		cy.get("button").should("contains.text", "Click me!");
	});
});
