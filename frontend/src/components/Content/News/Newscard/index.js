import { getRelativeTime } from "../../../../utils/date";
import "./style.css";

const Newscard = ({ article }) => {
  return (
    <article className="newscard">
      <a
        href={article.url}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`View the full article, ${article.headline}`}
      >
        <div className="newscard-inner--wrapper">
          <div className="newscard-img--wrapper">
            <img
              src={article.image}
              alt={`${article.headline}`}
              className="newscard-img"
              onError={(e) =>
                (e.target.src = `${process.env.PUBLIC_URL}/images/unavailable.jpg`)
              }
              loading="lazy"
            />
          </div>

          <div className="newscard-content">
            <h4 key={article.url}>{article.headline || "--"}</h4>
            <p className="content-meta">
              {article.source || "--"} | {getRelativeTime(article.datetime)}
            </p>
            <p className="content-summary">{article.summary || "--"}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Newscard;
