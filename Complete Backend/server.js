const app = require("./src/app");
const connectToDB = require("./src/database/db");

connectToDB();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
