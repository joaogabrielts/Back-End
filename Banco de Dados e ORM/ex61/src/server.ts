import { app } from "./app";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API sucessfully started at port ${PORT}`);
})