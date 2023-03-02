import course from '~/server/courseData';
import type { Course, Chapter, Lesson, LessonWithPath } from '~/types/course';

// set imported course as Course type
course as Course;

export default defineEventHandler((event): LessonWithPath => {
  const { chapterSlug, lessonSlug } = event.context.params;

  const chapter: Maybe<Chapter> = course.chapters.find(
    (chapter) => chapter.slug === chapterSlug
  );

  if (!chapter) {
    throw createError({
      statusCode: 404,
      message: 'Chapter not found'
    });
  }

  const lesson: Maybe<Lesson> = chapter.lessons.find(
    (lesson) => lesson.slug === lessonSlug
  );

  if (!lesson) {
    throw createError({
      statusCode: 404,
      message: 'lesson not found'
    });
  }

  return {
    ...lesson,
    path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`
  };
});
