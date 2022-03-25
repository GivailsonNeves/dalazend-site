import { Button, Card, Image } from "react-bootstrap";

// import sound from '../,,/../../../assets/images/sound.svg';
import './styles.scss';
import ReactAudioPlayer from 'react-audio-player';

export interface playerPodcastProps {
      title: string;
      image: string;
      duration: string;
      dataLancamento: string;
      url: string;
}

function PlayerPodcast(props: playerPodcastProps) {

      return (
            <Card className="player">

                  <Image className="avatar" src={props.image} alt={props.title} />

                  {/* <div className="contentPlayer">
                        <img src={sound} alt="" />
                        <span>
                              {props.dataLancamento} • {props.duration}
                        </span>
                        <h3>{props.title}</h3>
                        <ReactAudioPlayer
                              src={props.url}
                              controls
                        />
                  </div> */}

            </Card>
      );
}

export default PlayerPodcast;