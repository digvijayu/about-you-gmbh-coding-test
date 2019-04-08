export const formattedCost = (cost: number, currency: string = '€'): string => {
  return currency + ' ' + (cost / 100).toString();
};

export const getImageUrl = (hash: string): string => {
  return `//cdn.aboutstatic.com/file/${hash}?quality=90&progressive=1&bg=f2f2f2&width=600&height=600&trim=1`;
};
