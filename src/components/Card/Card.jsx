import React from 'react'
import styles from './Card.module.css'
const Card = () => {
  return (
    <>
      
      <div className={styles.card_container}>
        <div className={styles.card_body}>
          <div className={styles.card_img}>
            <img
              src="https://th.bing.com/th/id/OIP.Se6qtSnKfeDlIIUSrtgZ3gHaLs?pid=ImgDet&rs=1"
              alt="naruto image"
            />
          </div>
                  <div className={styles.card_title}>
                      Naruto
          </div>
        </div>
      </div>
    </>
  );
}

export default Card