import navBasic from '../../content/docs/base-components/nav.yml';
import navList from '../../content/docs/list-components/nav.yml';
import navRange from '../../content/docs/range-components/nav.yml';
import navSearch from '../../content/docs/search-components/nav.yml';
import navResult from '../../content/docs/result-components/nav.yml';
import navAdvanced from '../../content/docs/advanced/nav.yml';
import navMap from '../../content/docs/map-components/nav.yml';
import navTutorial from '../../content/getting-started/nav.yml';

const nav = [...navTutorial, ...navBasic, ...navList, ...navRange, ...navSearch, ...navResult, ...navAdvanced, ...navMap];

const sectionListDocs = nav.map(item => ({
  ...item,
  directory: 'docs',
}));

const sectionListTutorial = nav.map(item => ({
  ...item,
  directory: 'getting-started',
}));

export {sectionListDocs, sectionListTutorial, nav};
