import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About Us">
      <p>We are the happiest sticker store.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
