import "reflect-metadata"
import "express-async-errors"
import express, {Express} from "express"
import cors from "cors"
import { connectDb, disconnectDB, loadEnv } from "@/config"

loadEnv()

const app = express()

app
   .use(cors())
   .get("/health", (_req, res) => res.send("OK!"))


export function init(): Promise<Express> {
    connectDb()
    return Promise.resolve(app)
}

export async function close(): Promise<void> {
    await disconnectDB()
}

export default app