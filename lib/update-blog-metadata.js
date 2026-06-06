import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Update all blog post metadata
 */
async function updateBlogMetadata() {
  try {
    const blogDir = path.join(__dirname, '../content/blog');
    const publicBlogDir = path.join(__dirname, '../public/blog');

    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
    console.log(`Found ${files.length} blog posts to update...\n`);

    for (const file of files) {
      const filePath = path.join(blogDir, file);
      const slug = file.replace('.md', '');
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: markdownContent } = matter(content);

      console.log(`Processing: ${data.title}`);

      // Update author to 'Devora team'
      data.author = 'Devora team';

      // Ensure cover image is set correctly
      const imageFileName = `${slug.substring(0, 50)}.jpg`;
      const imagePath = path.join(publicBlogDir, imageFileName);

      if (fs.existsSync(imagePath)) {
        data.coverImage = `/blog/${imageFileName}`;
        console.log(`  ✅ Author updated & cover image set`);
      } else {
        console.log(`  ⚠️ Image not found for: ${imageFileName}`);
      }

      // Keep modified date in sync when metadata is refreshed
      if (!data.dateModified && data.date) {
        data.dateModified = data.date
      }

      // Rebuild and write the file
      const updatedContent = matter.stringify(markdownContent, data);
      fs.writeFileSync(filePath, updatedContent);
    }

    console.log('\n✅ Blog metadata update completed!');
  } catch (error) {
    console.error('Error updating blog metadata:', error);
    process.exit(1);
  }
}

// Run
updateBlogMetadata().catch(console.error);

export { updateBlogMetadata };

