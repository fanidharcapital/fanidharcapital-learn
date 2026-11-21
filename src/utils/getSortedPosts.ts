import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";

const getLessonNumber = (title: string, id: string): number => {
  const match =
    title.match(/#(\d+)/) ||
    title.match(/Lesson\s*(\d+)/i) ||
    id.match(/series-(\d+)/i) ||
    id.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
};

export const getSortedPosts = (posts: CollectionEntry<"posts">[]) => {
  return posts
    .filter(postFilter)
    .sort((a, b) => {
      const numA = getLessonNumber(a.data.title, a.id);
      const numB = getLessonNumber(b.data.title, b.id);

      if (numA !== numB) {
        return numA - numB;
      }

      return (
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        )
      );
    });
};

export default getSortedPosts;
