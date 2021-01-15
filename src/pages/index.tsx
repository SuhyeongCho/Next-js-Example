import axios from "axios";
import { NewsList } from "../components/NewsList";

const HomePage = (props) => {
  const { news } = props;
  return <NewsList news={news} />;
};

export const getServerSideProps = async (context) => {
  const buildUrl = (params?: {
    country?: string;
    category?: string;
    pageSize?: number;
  }) => {
    const { country = "kr", category = "general", pageSize = 10 } =
      params ?? {};
    const apiKey = "acc33556bc7343e1a5bed9eb2542b4f4";
    return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
  };

  const { data } = await axios.get(buildUrl());

  return {
    props: { news: data?.articles ?? [] }, // will be passed to the page component as props
  };
};

export default HomePage;
