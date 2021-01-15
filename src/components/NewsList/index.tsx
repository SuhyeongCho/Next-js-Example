import { NewsItem } from "../NewsItem";

import styles from "./style.module.scss";

export const NewsList = (props) => {
  const { news } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.newsList}>
        <h1>뉴스 리스트</h1>
        <ul>
          {news.map((article) => (
            <li key={article.title}>
              <NewsItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
