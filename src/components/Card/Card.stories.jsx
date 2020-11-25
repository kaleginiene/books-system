import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";

storiesOf("Card", module).add("Card", () => (
  <Card
    allBooks={[
      { id: 1, title: "Test", author: "Testinis" },
      { id: 2, title: "Test", author: "Testinis" },
      { id: 3, title: "Test", author: "Testinis" },
    ]}
  />
));
