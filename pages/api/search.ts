import fs from "fs"
import path from "path"
import type { NextApiRequest, NextApiResponse } from "next"

type Post = {
  id: string
  title: string
  date: string
  text: string
}

const listOfPosts = () => {
  const postsDirectory = path.join(process.cwd(), "_posts")
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")

    const content = fs.readFileSync(path.join(postsDirectory, fileName), "utf8")
    const lines = content.split("\n")
    const title = lines[2]
      .split(":")[1]
      .trim()
      .replace(/'/g, "")
      .toLocaleLowerCase()
    const [, ...date] = lines[3].split(":")
    const text = content.split("---")[2]

    return {
      id,
      title,
      date: date.join(":").replace(/'/g, "").trim(),
      text: text.replace(/\n/g, "").toLocaleLowerCase(),
    }
  })
}

type Query = {
  query: string
}

const isMethodGet = (req: NextApiRequest) => req.method === "GET"

const hasPost = (post: Post[] | []) => post.length > 0

const searchText = (query: string) =>
  listOfPosts().filter(
    (post) => post.text.includes(query) || post.title.includes(query)
  )

const search = (req: NextApiRequest, res: NextApiResponse) => {
  if (isMethodGet(req)) {
    const { query } = req.query as Query

    const post = searchText(query.toLocaleLowerCase())

    if (hasPost(post)) {
      return res.status(200).json({ posts: post, numberOfPosts: post.length })
    }

    return res.status(404).json({ message: "Not found" })
  }

  return res.status(400).json({ error: "Bad Request" })
}

export default search
