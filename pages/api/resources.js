import data from "./data.json";

const resources = (req, res) => {
  res.send(data);
};

export default resources;
