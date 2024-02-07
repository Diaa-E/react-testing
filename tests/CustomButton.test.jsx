import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../src/components/CustomButton";

function setup(jsx)
{
    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}

describe("CustomButton", () => {

    it("renders a button with text 'click here", () => {

        render(<CustomButton onClick={() => {}}/>);
        const button = screen.getByRole("button", {name: "click here"});

        expect(button).toBeInTheDocument();
    });

    it("calls onClick function when clicked", async () => {

        const onClick = vi.fn();
        const {user} = setup(<CustomButton onClick={onClick} />)
        const button = screen.getByRole("button", {name: "click here"});
        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("does not call onClick when it is not clicked", async () => {

        const onClick = vi.fn();
        const {user} = setup(<CustomButton onClick={onClick} />)

        expect(onClick).not.toHaveBeenCalled();
    });
});