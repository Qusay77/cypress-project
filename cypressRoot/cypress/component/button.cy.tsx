import { CoolButton } from "@packages/button";
describe("button.cy.ts", () => {
	it("uses custom text for the button label", () => {
		cy.mount(<CoolButton size="large" label="cool" />);
		cy.get("button").should("contains.text", "cool");
	});
});
