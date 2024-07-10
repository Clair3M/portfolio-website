import {Header} from './components/common/component_index.js'
import {Home, About, Projects} from './components/home_page/page_index.js'

export default function Main() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
    </>
  );
}
