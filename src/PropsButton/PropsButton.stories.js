import React from "react";
import { PropsButton } from "./PropsButton";

export default {
  title: "React Props Button",
  component: PropsButton,
};

export const main = () => <PropsButton>some text</PropsButton>;

export const color = () => (
  <PropsButton color="darkgrey" backgroundColor="grey">
    contrast issue
  </PropsButton>
);
