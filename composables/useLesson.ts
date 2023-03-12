import { LessonWithPath } from '@/types/course';
import useFetchWithCache from '@/composables/useFetchWithCache';

export default async (chapterSlug: string, lessonSlug: string) =>
  useFetchWithCache<LessonWithPath>(
    `/api/course/chapter/${chapterSlug}/lesson/${lessonSlug}`
  );
