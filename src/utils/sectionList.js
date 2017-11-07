import navCommunity from '../../content/community/nav.yml';
import navBasic from '../../content/docs/components/nav.yml';
import navTutorial from '../../content/getting-started/nav.yml';

const nav = [
  ...navTutorial,
  ...navBasic,
];

const sectionListDocs = nav.map(item => ({
  ...item,
  directory: 'docs',
}));

const sectionListCommunity = navCommunity.map(item => ({
  ...item,
  directory: 'community',
}));

const sectionListTutorial = nav.map(item => ({
  ...item,
  directory: 'getting-started',
}));

export {
  sectionListCommunity,
  sectionListDocs,
  sectionListTutorial,
};
