import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchBox from './components/search_box/search_box';
import VideoList from './components/video_list/video_list';
import Video_detial from './components/vidoe_detail/video_detial';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = query => {
    setSelectedVideo(null);
    youtube.search(query).then(videos => {
      setVideos(videos);
      
    })
    
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
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Video_detial video={selectedVideo}/>
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo?'list':'grid'}/>
        </div>
      </section>
      
    </div>
    
  ); 
}

export default App;
