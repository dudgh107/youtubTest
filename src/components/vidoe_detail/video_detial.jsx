import React from 'react';
import styles from './video_detial.module.css';


const Video_detial = ({video}) => {
  
  return(

    <section className={styles.detial}>
    <iframe 
      className={styles.video}  
      type="text/html" 
      title="youtuve video player"
      width="100%" 
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullScreen>
    </iframe>
    <h2>{video.snippet.title}</h2>
    <h3>{video.snippet.channelTitle}</h3>
    <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );
};

export default Video_detial;