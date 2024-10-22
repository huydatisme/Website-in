import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Sản phẩm in ấn"
            paragraph="In Gia Linh là công ty dịch vụ in ấn đáng tin cậy, chuyên nghiệp, chất lượng cao tại Việt Nam. Website của chúng tôi như một cẩm nang in ấn cung cấp nhiều thông tin hữu ích về công nghệ dịch vụ in ấn hiện đại mới nhất, hướng dẫn cách đặt in đạt hiệu quả cao. Tất tần tật các câu hỏi thường gặp về ngành in ấn "
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
