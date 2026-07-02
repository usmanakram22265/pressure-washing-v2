import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const ANALYTICS_SCRIPT = `<!-- Vercel Web Analytics -->
<script defer src="https://cdn.vercel-insights.com/v1/script.js"></script>
`;

async function addAnalytics() {
  const files = await readdir('.');
  const htmlFiles = files.filter(f => f.endsWith('.html'));
  
  console.log(`Found ${htmlFiles.length} HTML files`);
  
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const file of htmlFiles) {
    try {
      const content = await readFile(file, 'utf-8');
      
      // Skip if analytics already added
      if (content.includes('cdn.vercel-insights.com')) {
        console.log(`⏭️  Skipped ${file} (analytics already present)`);
        skippedCount++;
        continue;
      }
      
      // Add analytics script before </head>
      const updatedContent = content.replace('</head>', `${ANALYTICS_SCRIPT}</head>`);
      
      if (updatedContent !== content) {
        await writeFile(file, updatedContent, 'utf-8');
        console.log(`✅ Updated ${file}`);
        updatedCount++;
      } else {
        console.log(`⚠️  Could not update ${file} (no </head> tag found)`);
        skippedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${updatedCount} files`);
  console.log(`   Skipped: ${skippedCount} files`);
  console.log(`   Total: ${htmlFiles.length} files`);
}

addAnalytics().catch(console.error);
