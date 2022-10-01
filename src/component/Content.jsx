import styles from '../App.module.css'
import { links } from '../data/links';

export default function Content() {
  return (
         <div class={styles.LinkContainer} className={styles.links}>
            {links.map(({id, url, text}) => {
                return (
                    <a target={"_blank"} key={id} href={url}>
                        {text}
                    </a>
                );
            })}
            </div>
  )
}
