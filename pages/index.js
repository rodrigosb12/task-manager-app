import { Fragment } from "react";
import { Newsletter, ResourceHighlight, ResourceList } from "../components/imports";
import Layout from "../components/Layout";

export default function Home({ resources }) {
  return (
    <Fragment>
      <Layout>
        <ResourceHighlight resources={resources} />
        <Newsletter />
        <ResourceList resources={resources} />
      </Layout>
    </Fragment>
  );
}

// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props: { resources: data },
//   };
// }

export async function getServerSideProps({ params }) {
  const resData = await fetch(`${process.env.API_URL}/resources/`);
  const data = await resData.json();

  return {
    props: { resources: data },
  };
}
