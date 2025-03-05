import styles from "./WelcomeMessage.module.css";
import { GiGlassCelebration } from "react-icons/gi";


const WelcomeMessage = () =>{
  return(
    <>
    <p className={styles.welcome}><GiGlassCelebration />Enjoy your day<GiGlassCelebration />
    </p>
    </>
  )
}

export default WelcomeMessage;