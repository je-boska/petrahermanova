const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchShows() {
  const shows = await client.getEntries({ content_type: 'show' });
  if (shows.items) return shows.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
