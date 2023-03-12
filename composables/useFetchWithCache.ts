import { StorageSerializers } from '@vueuse/core';

export default async <T>(url: string) => {
  // Use sessonStorage to cache the data
  const cached = useSessionStorage<T>(url, null, {
    // by passing null as default it can't automatically
    // determene which serializer to use
    serializer: StorageSerializers.object
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, { lazy: true });

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`
      });
    }

    cached.value = data.value as T;
  } else {
    console.log(`Getting value from cache for ${url}`);
  }

  return cached;
};
