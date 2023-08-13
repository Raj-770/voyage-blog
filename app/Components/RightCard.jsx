import Link from "next/link";

const RightCard = ({ data }) => {
  const { featuredImage, excerpt, categories, slug, title, author } = data;
  return (
    <div className="flex lg:flex-row flex-col w-full h-[90vh] items-center ">
      <div className="lg:w-3/6 w-full h-full py-5 pr-2">
        <img
          src={featuredImage.url}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-3/6 w-full h-[70vh]">
        <div className="flex flex-col h-[70vh] mx-20">
          <div className="flex items-end w-full h-1.5 ">
            <p className="font-primary text-md text-gray-500">
              <Link
                href={`/category/${categories[0].slug}`}
                className="hover:underline uppercase"
                role="button"
              >
                {categories[0].name}
              </Link>{" "}
              &nbsp; | &nbsp;{" "}
              <span className="hover:underline uppercase" role="button">
                BY {author.name}
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center w-full h-2/6">
            <h1 className="font-primary text-3xl font-bold text-left">
              {title}
            </h1>
          </div>

          <div className="flex w-full h-4/6">
            <p className="font-primary text-md text-gray-500">{excerpt}</p>
          </div>
          <div className="flex w-full h-1.5 items-baseline  mt-5">
            <Link href={`/post/${slug}`}>
              <span className="font-primary hover:underline hover:text-gray-700">
                READ MORE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
