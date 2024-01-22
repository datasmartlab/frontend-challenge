import type { Meta, StoryObj } from "@storybook/react";
import ButtonCustom from ".";
const meta: Meta<typeof ButtonCustom> = {
    component: ButtonCustom,
  };
  export default meta;
 
  type Story = StoryObj<typeof ButtonCustom>;

  export const Small:Story = {
    args:{
      Title: "Default",
      width: "sm",
      backgroundColor: "#029cfd",
      color: "#fff"
    }
  }
  export const Medium:Story = {
    args:{
      Title: "Default",
      width: "md",
      backgroundColor: "#029cfd",
      color: "#fff"
    }
  }
  export const Large:Story = {
    args:{
      Title: "Default",
      width: "xl",
      backgroundColor: "#029cfd",
      color: "#fff"
    }
  }