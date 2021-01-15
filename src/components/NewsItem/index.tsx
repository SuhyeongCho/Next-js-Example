import styles from "./style.module.scss";

export const NewsItem = (props) => {
  const { article } = props;

  const { title, urlToImage, url, description } = article;

  return (
    <a target="_blank" href={url} className={styles.newsItem}>
      <div>
        <h2 style={{ color: "green" }}>{title}</h2>
        <p>{description}</p>
      </div>
      {urlToImage && <img src={urlToImage} />}
    </a>
  );
};
