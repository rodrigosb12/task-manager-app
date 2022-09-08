import Layout from "../../components/Layout";
import ResourceForm from "../../components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then(() => router.push("/"))
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <ResourceForm onFormSubmit={createResource} />
    </Layout>
  );
};

export default ResourceCreate;
