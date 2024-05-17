import express from 'express';
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

const app = express()
const PORT = 3000;

app.use(express.json())

app.use("/admin", adminRoutes)
app.use("/user", userRoutes)

app.listen(PORT, () => {
    console.log("Server is running")
})