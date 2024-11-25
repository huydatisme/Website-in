import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Liên hệ"
        description="Hãy liên hệ ngay với chúng tôi để có thể nhận được tư vấn và mức giá ưu đãi tốt nhất."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
