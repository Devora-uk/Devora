import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const blogDir = path.join(__dirname, "../content/blog")

const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"))

for (const file of files) {
  const filePath = path.join(blogDir, file)
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)

  if (!data.date) {
    console.warn(`Skipping ${file}: missing date`)
    continue
  }

  if (!data.dateModified) {
    data.dateModified = data.date
  }

  fs.writeFileSync(filePath, matter.stringify(content, data))
}

console.log(`Synced dateModified for ${files.length} guides.`)
