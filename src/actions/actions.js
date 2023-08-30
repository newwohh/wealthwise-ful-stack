export const titleHandler = (newTitle) => {
  if (typeof window !== "undefined") {
    document.title = `Wealthwise | ${newTitle}`;
  }
};
