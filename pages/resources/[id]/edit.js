import Layout from "../../../components/Layout";
import ResourceForm from "../../../components/ResourceForm";
import axios from "axios";

const ResourceEdit = ({ resources }) => {
  const updateResource = (formData) => {
    axios
      .patch("/api/resources", formData)
      .then(() => alert("data has been updated"))
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <ResourceForm initialData={resources} onFormSubmit={updateResource} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await dataRes.json();

  return {
    props: { resources: data },
  };
}

export default ResourceEdit;
