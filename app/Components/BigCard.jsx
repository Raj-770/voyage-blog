import Link from "next/link";

const BigCard = ({ data }) => {
  const { featuredImage, categories, title, slug, author } = data;

  return (
    <div className="flex flex-col md:min-h-[1000px] h-[450px] md:col-span-2 col-span-1 row-span-2">
      <Link
        href={`/post/${slug}`}
        className="flex h-4/5 justify-center items-start mb-5"
      >
        <img
          src={featuredImage.url}
          alt="image"
          className="w-full md:h-[770px] object-cover"
        />
      </Link>
      <div className="flex flex-col justify-center items-center h-1/5">
        <span>
          <h2 className="font-primary text-sm mb-3 text-gray-500 text-light hover:underline uppercase">
            {categories[0].name}
          </h2>
        </span>
        <div className="flex w-full">
          <Link
            href={`/post/${slug}`}
            className="font-primary text-4xl text-center font-semibold hover:underline capitalize"
          >
            {title}
          </Link>
        </div>
        <div className="w-full flex justify-center text-sm text-gray-500 text-light items-center mt-3">
          <h2 className="font-primary text-m text-center">
            BY {author.name.toUpperCase()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
