import axios from "axios";

import RightCard from "@/app/Components/RightCard";
import LeftCard from "@/app/Components/LeftCard";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const CategoryPage = async ({ params }) => {
  const data = await axios({
    url: graphqlAPI,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: {
      query: `query GetBlogPostsBySlug($slug: String!) {
        posts(where: {categories_some: {slug: $slug}}) {
          title
          author {
            name
          }
          categories {
            name
            slug
          }
          featuredImage {
            url
          }
          createdAt
          excerpt
          slug
        }
      }`,
      variables: { slug: params.slug },
    },
  });
  const posts = data.data.data.posts;

  return (
    <div className="flex flex-col pt-32 w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="border-t border-gray-300 w-full my-1"></div>
        <h1 className="font-primary font-medium text-4xl italic my-1 capitalize">
          {params.slug}
        </h1>
        <div className="border-t border-gray-300 w-full my-1"></div>
      </div>
      <div className="flex flex-col mt-14 h-full gap-6">
        {posts.map((post, index) => {
          if (index % 2 == 0) {
            return <RightCard data={post} />;
          }
          return <LeftCard data={post} />;
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
