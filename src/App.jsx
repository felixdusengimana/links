import styles from './App.module.css';
import { links } from './data/links';

function App() {

  const handleMode = () => {
    const body = document.querySelector('body');
    // body.style.colorScheme = body.style.colorScheme === 'dark' ? 'light' : 'dark';
    console.log(body.style.colorScheme);
  };

  return (
    <div class={styles.App}>
      {/* <button onClick={handleMode}>Mode</button> */}
       <div class={styles.container}>
       <p class={styles.header}>WELCOME</p>
       <h1 class={styles.intro}>All DUSENGIMANA Felix's links.</h1>
       <p class={styles.occupation}>Full stack developer based in Rwanda.</p>
        <div class={styles.LinkContainer} className={styles.links}>
            {links.map(({id, url, text}) => {
                return (
                    <a target={"_blank"} key={id} href={url}>
                        {text}
                    </a>
                );
            })}
            </div>
       </div>
       <footer class={styles.footer}>
        <div class={styles.footerLinks}>
          <a href="" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.372 0.189994C11.752 -0.0630059 12.247 -0.0630059 12.628 0.189994L23.492 7.39999C23.809 7.60999 24 7.96499 24 8.34599V15.654C24 16.034 23.81 16.39 23.492 16.601L12.628 23.811C12.248 24.063 11.753 24.063 11.372 23.811L0.508 16.6C0.351885 16.4964 0.223807 16.3559 0.135174 16.1908C0.0465408 16.0258 0.000104234 15.8413 0 15.654L0 8.34599C0 7.96599 0.19 7.60999 0.508 7.39899L11.372 0.189994ZM2.272 10.463V13.521L4.56 11.981L2.272 10.463V10.463ZM6.609 13.341L3.18 15.648L10.864 20.748V16.165L6.61 13.341H6.609ZM13.136 16.165V20.747L20.82 15.647L17.39 13.341L13.136 16.165V16.165ZM19.439 11.982L21.729 13.522V10.462L19.439 11.982V11.982ZM20.81 8.34599L17.4 10.609L13.136 7.74099V3.25299L20.81 8.34599ZM10.864 3.25299V7.73999L6.601 10.608L3.19 8.34599L10.864 3.25299V3.25299ZM12 9.71499L8.65 11.969L12 14.192L15.35 11.969L12 9.71499Z" fill="#678398"/>
          </svg>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M23 1.99998C22.0424 2.67546 20.9821 3.19209 19.86 3.52999C19.2577 2.8375 18.4573 2.34668 17.567 2.12391C16.6767 1.90115 15.7395 1.95718 14.8821 2.28444C14.0247 2.6117 13.2884 3.19439 12.773 3.9537C12.2575 4.71302 11.9877 5.61232 12 6.52998V7.52998C10.2426 7.57555 8.50127 7.1858 6.93101 6.39543C5.36074 5.60506 4.01032 4.43862 3 2.99998C3 2.99998 -1 12 8 16C5.94053 17.398 3.48716 18.0989 1 18C10 23 21 18 21 6.49998C20.9991 6.22144 20.9723 5.94358 20.92 5.66999C21.9406 4.66348 22.6608 3.3927 23 1.99998ZM23 1.99998V1.99998Z" stroke="#678398" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_137)">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#678398" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.9997 11.37C16.1231 12.2022 15.981 13.0522 15.5935 13.799C15.206 14.5458 14.5929 15.1514 13.8413 15.5297C13.0898 15.9079 12.2382 16.0396 11.4075 15.9059C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1902 8.22744 13.4229 8.09377 12.5922C7.96011 11.7615 8.09177 10.9099 8.47003 10.1584C8.84829 9.40685 9.45389 8.79374 10.2007 8.40624C10.9475 8.01874 11.7975 7.87658 12.6297 8C13.4786 8.12588 14.2646 8.52146 14.8714 9.1283C15.4782 9.73515 15.8738 10.5211 15.9997 11.37Z" stroke="#678398" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 6.5H17.51" stroke="#678398" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_3_137">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          </a>
        </div>
        <p>© {new Date().getFullYear()} <a target={"_blank"} href="https://www.feldux.com">Felix DUSENGIMANA</a></p>
       </footer>
    </div>
  );
}

export default App;
