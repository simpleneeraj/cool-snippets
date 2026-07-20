export const scrollToTarget = (id: string, scrollY: number = 0) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const offsetTop =
      targetElement.getBoundingClientRect().top + window.scrollY - scrollY;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};
