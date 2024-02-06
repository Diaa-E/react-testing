import {describe, it, expect} from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("Somthing truthy and falsy", () => {

    it("true to be true", () => {
        expect(true).toBe(true);
    });

    it("false to be false", () => {
        expect(false).toBe(false);
    });
});

describe("App component", () => {

    it("renders correct headinge", () => {
        render(<App/>);
        expect(screen.getByRole("heading").textContent).toMatch(/default text/i);
    });
});

describe("Text changes after click",() => {
        
    it(`renders "Altered heading" after click`, async () => {
        
        const user = userEvent.setup();
        render(<App/>);
        const button = screen.getByRole("button", {name: "Change Heading"});
        await user.click(button);

        expect(screen.getByRole("heading").textContent).toMatch("Altered heading")
    });
});
