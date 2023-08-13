import Link from "next/link";

const SmallCard = ({ data }) => {
  const { featuredImage, categories, title, author, slug } = data;

  return (
    <div className="flex flex-col h-[450px]">
      <Link className="flex h-3/5" href={`/post/${slug}`}>
        <img
          src={featuredImage.url}
          alt="image"
          className="w-full h-4/5 object-cover"
        />
      </Link>

      <div className="flex flex-col justify-center gap-4 items-center h-2/5">
        <span className="text-gray-600">
          <Link
            href={`/category/${categories[0].slug}`}
            className="font-primary font-extralight text-sm hover:underline uppercase"
          >
            {categories[0].name}
          </Link>
        </span>
        <div className="flex justify-center items-center">
          <Link
            href={`/post/${slug}`}
            className="font-primary font-semibold text-lg hover:underline text-center"
          >
            {title}
          </Link>
        </div>
        <div className="w-full flex justify-center items-center text-sm text-gray-600 uppercase">
          <h2 className="font-primary text-center">BY {author.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
