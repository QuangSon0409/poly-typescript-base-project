type Props = {
  data: any;
};

const Product = (props: Props) => {
  const { data } = props;
  return (
    <div className="block">
      <img alt="Art" src={data.image} className=" object-cover " />

      <h3 className="mt-4 text-sm font-semibold text-gray-900 sm:text-xl">
        {data.name}
      </h3>
      <p className="mt-2 text-[12px] flex">
        <p className="text-red-600 font-bold">
          {data.price} ₫
          <span className="text-gray-700 opacity-50 ml-2">
            {data.description} ₫
          </span>
        </p>
      </p>
      <p className="mt-2 text-[12px] flex">
        <p className="flex">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </p>
        <span className="text-gray-700 opacity-50 ml-2">10 đánh giá</span>
      </p>
    </div>
  );
};

export default Product;
