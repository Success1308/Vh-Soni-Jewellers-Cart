import useFetch from "../Util/useFetch";
import CardLayout from "../element/CardLayout ";

const Men = () => {
  const { data, loading, error } = useFetch(
    "https://jewellery-shop-api-one.vercel.app/jewellery"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const title = "Men's Jewelry Collection";
  const menJewelryData = data.filter((item) => item.category === "Men");

  return (
    <div>
      <CardLayout items={menJewelryData} title={title} />
    </div>
  );
};

export default Men;
