const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("An application is containerized using Docker and prepared for deployment using Kubernetes/OpenShift resources (Deployment, Service, Route), enabling portability and alignment with cloud-native architectures.");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
