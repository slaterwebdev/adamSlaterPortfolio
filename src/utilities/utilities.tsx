export const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

export const generateRandomDegrees = () => {
  const degree = Math.floor(Math.random() * 41) - 20;
  return `${degree}deg`;
};