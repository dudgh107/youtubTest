import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchBox from './components/search_box/search_box';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube.search(query).then(videos => setVideos(videos))
  };
  /*
   * 2번째 인자
   * [] 빈값일경우 한번만
   * [videos] videos가 변경되었을때
   */
  useEffect(()=>{
    youtube.mostPopular().then(videos => setVideos(videos))
  }, []);

  return (
    <div className={styles.app}>
      <SearchBox onSearch={search}></SearchBox>
      <VideoList videos={videos}/>
    </div>
    
  ); 
}

export default App;
