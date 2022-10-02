import { GetStaticProps } from "next";

const Docs = () => {
  return <div>Docs</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default Docs;
