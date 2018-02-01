import navBasic from '../../content/docs/components/nav.yml';
import navAdvanced from '../../content/docs/advanced/nav.yml';
import navTutorial from '../../content/getting-started/nav.yml';

const nav = [...navTutorial, ...navBasic, ...navAdvanced];

const sectionListDocs = nav.map(item => ({
  ...item,
  directory: 'docs',
}));

const sectionListTutorial = nav.map(item => ({
  ...item,
  directory: 'getting-started',
}));

export {sectionListDocs, sectionListTutorial, nav};
