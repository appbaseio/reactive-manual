import navList from '../../content/docs/list-components/nav.yml';
import navBase from '../../content/docs/base-components/nav.yml';
import navRange from '../../content/docs/range-components/nav.yml';
import navSearch from '../../content/docs/search-components/nav.yml';
import navResult from '../../content/docs/result-components/nav.yml';
import navTheming from '../../content/docs/theming/nav.yml';
import navAdvanced from '../../content/docs/advanced/nav.yml';
import navTutorial from '../../content/getting-started/nav.yml';

const nav = [...navTutorial, ...navBase,  ...navList, ...navRange, ...navSearch, ...navResult, ...navTheming, ...navAdvanced];

const sectionListDocs = nav.map(item => ({
  ...item,
  directory: 'docs',
}));

const sectionListTutorial = nav.map(item => ({
  ...item,
  directory: 'getting-started',
}));

export {sectionListDocs, sectionListTutorial, nav};
