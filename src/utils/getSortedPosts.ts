import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";

function extractLessonNumber(post: CollectionEntry<"posts">): number | null {
  const titleMatch = post.data.title.match(/#0*(\d+)/i);
  if (titleMatch) return Number(titleMatch[1]);

  const idMatch = post.id.match(/(?:day-|education-series-|lesson-)0*(\d+)/i);
  if (idMatch) return Number(idMatch[1]);

  return null;
}

export const getSortedPosts = (posts: CollectionEntry<"posts">[]) => {
  return posts
    .filter(postFilter)
    .filter(({ data }) => !data.tags?.includes("module-overview"))
    .sort((a, b) => {
      const numA = extractLessonNumber(a);
      const numB = extractLessonNumber(b);

      if (numA !== null && numB !== null && numA !== numB) {
        return numA - numB;
      }

      if (numA !== null && numB === null) return -1;
      if (numA === null && numB !== null) return 1;

      return (
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
      );
    });
};

export default getSortedPosts;
