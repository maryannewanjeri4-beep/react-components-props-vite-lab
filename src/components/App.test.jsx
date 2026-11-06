import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("Check if our blog displays the correct text from props", () => {
  render(<App />);

  const blogTitle = screen.getByText("Underreacted");
  expect(blogTitle).toBeInTheDocument();

  const blogBio = screen.getByText("A blog about learning React");
  expect(blogBio).toBeInTheDocument();

  const blogLogo = screen.getByAltText("blog logo");
  expect(blogLogo).toBeInTheDocument();

  const articleTitle = screen.getByText("Components 101");
  expect(articleTitle).toBeInTheDocument();
});
