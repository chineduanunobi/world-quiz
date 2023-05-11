import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "./src/containers/Game/game";

describe("Game Component", () => {
    test("renders the component", () => {
        render(<Game />);

        // Assert that the required elements are rendered
        expect(screen.getByLabelText("Enter country here")).toBeInTheDocument();
        expect(screen.getByText("Your current score is: 0/195")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Start Quiz" })).toBeInTheDocument();
        expect(screen.getByTestId("count")).toBeInTheDocument();
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    // Add more test cases for different component behaviors
});
