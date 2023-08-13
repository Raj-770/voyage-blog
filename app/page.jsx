import axios from "axios";
import BigCard from "./Components/BigCard";
import SmallCard from "./Components/SmallCard";
import RightCard from "./Components/RightCard";
import { getAllPosts, getTopStories } from "../libs/index";
import LeftCard from "./Components/LeftCard";

const Home = async () => {
  const topStoriesPosts = getTopStories.data.data.posts;
  const allPosts = getAllPosts.data.data.posts;

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <div className="flex flex-col justify-center items-center my-10">
        <div className="border-t border-gray-300 w-full my-1"></div>
        <h1 className="font-primary font-medium text-4xl italic my-1">
          TOP STORIES.
        </h1>
        <div className="border-t border-gray-300 w-full my-1"></div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
        {topStoriesPosts.map((post, index) => {
          return index === 1 ? (
            <BigCard key={index} data={post} />
          ) : (
            <SmallCard key={index} data={post} />
          );
        })}
      </div>

      <div className="flex flex-col mt-14 gap-6">
        {allPosts.map((post, index) => {
          if (index % 2 == 0) {
            return <RightCard data={post} />;
          }
          return <LeftCard data={post} />;
        })}
      </div>
    </div>
  );
};

export default Home;
