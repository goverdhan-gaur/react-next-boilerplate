
import Homepage from './Homepage';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
  title: 'Homepage',
  component: Homepage,
};
  

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <Homepage {...args} />;

export const Normal = Template.bind();

Normal.args = {
  args: {
    //π The args you need here will depend on your component
    
  },
  argTypes : {
    //π The argTypes you need here will depend on your component
    
  }
};