import type { Meta, StoryObj } from "@storybook/react";
import { HeroCard } from ".";
const meta: Meta<typeof HeroCard> = {
    component: HeroCard,
  };
  export default meta;

  type Story = StoryObj<typeof HeroCard>;

 
 
  export const Card: Story = {
    args:{
     props:{
      id: 1,
      thumbnail:{
        path :'https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil',
        extension: '.jpg'
      },
     
      name: "Nome do Personagem",
      description: 'descrição do personagem'
  
    }
     } 
  }
  