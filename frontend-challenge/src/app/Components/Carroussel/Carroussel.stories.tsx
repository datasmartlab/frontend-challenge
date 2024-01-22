import type { Meta, StoryObj } from "@storybook/react";
import IronMan from "../../Assets/Imagens/HomemdeFerro.jpg";
import Hulk from "../../Assets/Imagens/hulk.jpg";
import Captain from "../../Assets/Imagens/CapitaoAmerica.jpg";
import Thor from "../../Assets/Imagens/Thor.jpg";

import { Caroussel } from "./caroussel";
const Images = [
  {
    Image: IronMan,
  },
  {
    Image: Hulk,
  },
  {
    Image: Captain,
  },
  {
    Image: Thor,
  },
];
const meta: Meta<typeof Caroussel> = {
  component: Caroussel,
};
export default meta;

type Story = StoryObj<typeof Caroussel>;

export const Desktop: Story = {
  render: () => <div style={{width: "100%",display: 'flex', justifyContent: "center",alignItems: 'center'}}><Caroussel Images={Images}/></div>,
};
