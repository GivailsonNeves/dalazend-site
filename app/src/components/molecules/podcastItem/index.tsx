import { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button, Card } from "react-bootstrap";

import sound from '../,,/../../../assets/images/sound.svg';
import './styles.scss';

export interface PodcastItemProps {
      title: string;
      image: string;
      duration: string;
      dataLancamento: string;
      url: string;
}

function PodcastItem(props: PodcastItemProps) {

      const playerRef = useRef<any>(null);
      const [playing, setPlaying] = useState(false);

      const hdlClick = () => {
            if (!playing) {
                  playerRef.current.audioEl.current.play();
            } else {
                  playerRef.current.audioEl.current.pause();
            }
            setPlaying(!playing);
      }

      return (
            <Card className="PodcastItem">
                  <Button className="imageButton" onClick={hdlClick}>
                        <i className="fas fas-play" />
                        <img className="avatar" src={props.image} alt={props.title} />
                  </Button>
                  <div>
                        <img src={sound} alt="" />
                        <span>
                              {props.dataLancamento} • {props.duration}
                        </span>
                        <h6>{props.title}</h6>
                        <ReactAudioPlayer
                              ref={playerRef}
                              src={props.url}
                        />
                  </div>
            </Card>
      );
}

export default PodcastItem;