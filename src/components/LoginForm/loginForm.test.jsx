import LoginForm from "./LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect } from "vitest";

describe(LoginForm, () => {

    it("renders login form correctly", () => {
        render(<LoginForm />);
        const username = screen.getByLabelText("Username:");
        const password = screen.getByLabelText("Password:");
        const loginBtn = screen.getByRole("button", { name: "Login" });
        expect(username).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(loginBtn).toBeInTheDocument();
    })

    it("updates username and password on input change", async () => {
        const user = userEvent.setup();
        render(<LoginForm />);

        const username = screen.getByLabelText("Username:");
        const password = screen.getByLabelText("Password:");

        await user.type(username, "Tom");
        await user.type(password, "Pass");
        expect(username).toHaveValue("Tom");
        expect(password).toHaveValue("Pass");
    })

    it("if checkbox is checked", async () => {
        const user = userEvent.setup();
        render(<LoginForm />);

        const checkbox = screen.getByRole("checkbox");
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    })

})