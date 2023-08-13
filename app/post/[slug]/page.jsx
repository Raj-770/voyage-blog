import axios from "axios";
import React from "react";
import moment from "moment/moment";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const page = async ({ params }) => {
  const data = await axios({
    url: graphqlAPI,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    data: {
      query: `query GetBlogPostBySlug($slug: String!) {
    post(where: {slug: $slug}) {
      title
      author {
        name
      }
      categories {
        name
        slug
      }
      content {
        raw
      }
      featuredImage{
        url
    }
      createdAt
    }  
}`,
      variables: { slug: params.slug },
    },
  });
  const post = data.data.data.post;

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-one":
        return (
          <h1 key={index} className="text-3xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-justify">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );

      case "block-quote":
        return (
          <div className="flex flex-row bg-gray-50 border-l-4 border-gray-400 mb-8">
            <p key={index} className="text-justify px-4">
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </p>
          </div>
        );

      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="pt-32 w-full flex flex-col items-center gap-3">
      <h2 className="font-primary font-medium text-md text-gray-800 uppercase">
        {post.categories[0].name}
      </h2>
      <h1 className="text-5xl w-2/3 font-medium font-primary text-center">
        {post.title}
      </h1>
      <div className="flex flex-col items-center mt-6">
        <h2 className="font-primary font-medium text-md text-gray-800 uppercase">
          BY {post.author.name}
        </h2>
        <h2 className="font-primary font-medium text-sm text-gray-800 uppercase">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </h2>
      </div>
      <div className="w-2/3  flex items-start mt-10">
        <img
          src={post.featuredImage.url}
          alt="image"
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="flex flex-col w-2/3 mt-10">
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default page;
