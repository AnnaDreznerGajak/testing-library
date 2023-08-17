import { describe, expect } from "vitest";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe(Counter, () => {

    it("counter displays correct initial value", () => {
        const {getByTestId} = render(<Counter initialCount={0}/>);
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(0);
    });

    it("counter should increment by 1 if the increment button is cliked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>);
        const incrementBtn = getByRole("button", {name: "Increment"});
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(0);
        fireEvent.click(incrementBtn);
        const countValue2 = Number(getByTestId("counter").textContent);
        expect(countValue2).toEqual(1);
    })

    it("counter should decrement by 1 if the decrement button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={50}/>);
        const decrementBtn = getByRole("button", {name: "decrement"});
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(50);
        fireEvent.click(decrementBtn);
        const countValue2 = Number(getByTestId("counter").textContent);
        expect(countValue2).toEqual(49);
    })

    it("counter should be set 0 if the reset button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={50}/>);
        const resetBtn = getByRole("button", {name: "reset"});
        const countValue = Number(getByTestId("counter").textContent);
        expect(countValue).toEqual(50);
        fireEvent.click(resetBtn);
        const countValue2 = Number(getByTestId("counter").textContent);
        expect(countValue2).toEqual(0);
    })
})