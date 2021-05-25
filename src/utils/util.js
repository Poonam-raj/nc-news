export const capitaliseSlug = (topic) => {
  const capitalSlug =
    topic['slug'].charAt(0).toUpperCase() + topic['slug'].slice(1);
  topic.slug = capitalSlug;
};
