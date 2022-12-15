import { useEffect } from 'react';
import styles from './app.module.css';
import background from './images/parallax/Background.svg'
import layer1 from './images/parallax/Layer 1.svg'
import layer2 from './images/parallax/Layer 2.svg'
import layer3 from './images/parallax/Layer 3.svg'
import layer4 from './images/parallax/Layer 4.svg'
import layer5 from './images/parallax/Layer 5.svg'
import layer6 from './images/parallax/Layer 6.svg'
import layer7 from './images/parallax/Layer 7.svg'
import layer8 from './images/parallax/Layer 8.svg'
import layer9 from './images/parallax/Layer 9.svg'
function App() {
  
  useEffect(()=>{
    let comL1 = document.getElementById("layer1")
    window.addEventListener('scroll',()=>{
      let value = window.scrollY
      console.log(value)
      comL1.style.transform = `translateY(${value*0.05}px)`
    })
  }, [])
  return (  
    <div className={styles.main}>
      <div className={styles.app}>
        <img src={background} className={styles.background} alt={"#1"}/>
        <img src={layer1} id="layer1" className={styles.layer1} alt={"#1"}/>
        <img src={layer2} id={styles["layer2"]} className={styles.layer2} alt={"#1"}/>
        <img src={layer3} id={styles["layer3"]} className={styles.layer3} alt={"#1"}/>
        <img src={layer4} id={styles["layer4"]} className={styles.layer4} alt={"#1"}/>
        <img src={layer5} id={styles["layer5"]} className={styles.layer5} alt={"#1"}/>
        <img src={layer6} id={styles["layer6"]} className={styles.layer6} alt={"#1"}/>
        <img src={layer7} id={styles["layer7"]} className={styles.layer7} alt={"#1"}/>
        <img src={layer8} id={styles["layer8"]} className={styles.layer8} alt={"#1"}/>
        <img src={layer9} id={styles["layer9"]} className={styles.layer9} alt={"#1"}/>
      </div>    
      <div className={styles.page2}/>
    </div>  
  );
}

export default App;
