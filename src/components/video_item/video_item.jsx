import React, {memo} from 'react';
import styles from './video_item.module.css';

const Video_item = memo(({video, onVideoClick, display}) => {
  
  const displayType = display === 'list' ? styles.list : styles.grid;
  console.log(`displayType= ${displayType}`);
  return(
    
    <li className={`${displayType} ${display}`} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img className={styles.thumbnail} src={video.snippet.thumbnails.default.url} alt="video thumbnail"/>
        <div className={styles.metadata}>
          <p className={styles.title}>{video.snippet.title}</p>
          <p className={styles.channel}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default Video_item;