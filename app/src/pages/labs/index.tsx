import { Component } from "@/interfaces/components";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

interface LabsProps {
  data: Component;
}

const Labs = () => {
  return <></>;
};

export const getStaticProps = async () => {
  const data = await supabaseClient.from("components").select("*").single();
  return {
    props: {
      data,
    },
  };
};
export default Labs;
