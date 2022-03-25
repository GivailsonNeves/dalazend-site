import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import './styles.scss';

export interface NewsItemProps {
    post_title: string;
    post_content: string;
    excerpt: string;
    imagePath: string;
    post_date: string;
    ID: number;
}

function NewsItem(props: NewsItemProps) {

    const [t] = useTranslation();

    const backToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Card className="NewsItem">
            <div className="image-preview">
                <Card.Img variant="top" src={props.imagePath} />
            </div>
            <Card.Body>
                <small>{props.post_date}</small>
                <Card.Title className="subline-effect">{props.post_title}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />
                <Link onClick={backToTop} className="btn btn-outline-dark" to={`article/${props.ID}`}>{t('news.view-post')}</Link>
            </Card.Body>
        </Card>
    );
}

export default NewsItem;