import { Fragment } from "react";
import { Newsletter, ResourceHighlight, ResourceList } from "../components/imports";

export default function Home({ resources }) {
  return (
    <Fragment>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(0, 2)} />
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

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: { resources: data },
  };
}
