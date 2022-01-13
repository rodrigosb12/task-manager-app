const resources = async (req, res) => {
  const dataRes = await fetch("http://localhost:3001/api/resources");
  const data = await dataRes.json();

  res.send(data);
};

export default resources;
