import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { graphql, PageProps, Link } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, idx) => (
          <article key={idx}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          category
          title
          date(formatString: "YYYY.MM.DD")
          author
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
