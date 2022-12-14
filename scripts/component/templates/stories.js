const storiesTemplate  = (name) =>  `import ${name} from './${name}';

//π This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: '${name}',
    component: ${name},
  };
  

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <${name} {...args} />;

export const Normal = {
  args: {
    //π The args you need here will depend on your component
    
  },
  argTypes : {
    //π The argTypes you need here will depend on your component
    
  }
};`;

module.exports = storiesTemplate;
