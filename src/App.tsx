import * as React from 'react';
import ReactPlyr from './ReactPlyr';

/*
 * eslint-disable-next-line func-style
 *function play() {
 *  console.log('play');
 *}
 * eslint-disable-next-line func-style
 *function pause() {
 *  console.log('pause');
 *}
 */

const App = () => (
  <div>
    {/*
    <Plyr
      // onPause={pause}

      // onPlay={play}
      type="video"
      url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
    />
*/}

    <ReactPlyr
      poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
      settings={['quality', 'captions']}
      sources={
          [{
            size: 576,
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
            type: 'video/mp4',
          },
          {
            size: 720,
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
            type: 'video/mp4',
          },
          {
            size: 1080,
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
            type: 'video/mp4',
          },
          {
            size: 1440,
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
            type: 'video/mp4',
          }]
        }
      title="Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;"
      // eslint-disable-next-line
      // @ts-ignore
      tracks={
          [{
            kind: 'captions',
            label: 'English',
            src: '/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            srcLang: 'en',
          },
          {
            default: true,
            kind: 'captions',
            label: 'French',
            src: '/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
            srcLang: 'fr',
          }]
        }
      type="video"
    />
    {/*
        <Plyr
          type='audio'
          title='Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;'
           sources={
          [{
            src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3'
           type=: 'audio/mp3'
          },
          {
          src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg'
          type: 'audio/ogg'
          }]
        }
        />
       */}
    {/*
    <ReactPlyr
      onPause={pause}
      onPlay={play}
      sources={
        [{
          src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
          type: 'audio/mp3',
        },
        {
          src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg',
          type: 'audio/ogg',
        }]
      }
      title="Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;"
      type="audio"
    />
    */}
  </div>
);
export default App;
