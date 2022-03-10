// app.test.js
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React, { Suspense } from "react";
import { Router } from "react-router-dom";
import "./firebase";

import "@testing-library/jest-dom";

import App from "./App";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Suspense fallback={<h1 data-testid="loading">Loading...</h1>}>
        <Router location={history.location} navigator={history}>
          {component}
        </Router>
      </Suspense>
    ),
  };
};

it("should render the Home Page", async () => {
  const { getByText } = renderWithRouter(<App />);
  await waitFor(() =>
    expect(getByText("Welcome to Checklist Builder")).toBeInTheDocument()
  );
});

it("should render the Checklist Modal", async () => {
  const { getByText } = renderWithRouter(<App />);
  userEvent.click(getByText("Open Checklist"));
  await waitFor(() => expect(getByText("Checklist Modal")).toBeInTheDocument());
});
