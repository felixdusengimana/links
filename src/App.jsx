import { lazy, Suspense } from 'solid-js';
import styles from './App.module.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
const Content = lazy(()=> import("./component/Content"))

function App() {
  return (
    <div class={styles.App}>
       <div class={styles.container}>
        <Navbar/>
        <Suspense fallback={<div>Loading</div>}>
          <Content/>
          <Footer/>
        </Suspense>
       </div>
    </div>
  );
}

export default App;
