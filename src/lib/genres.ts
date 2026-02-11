export const genreMap: Record<string, string> = {
  fantasy: 'ファンタジー',
  science: '科学・テクノロジー',
  essay: 'エッセイ',
};

export const genreLabel = (slug: string) => genreMap[slug] ?? slug;

export const normalizeGenreSlug = (value: string) => {
  const lowered = value.trim().toLowerCase();
  if (genreMap[lowered]) return lowered;

  const mapped = Object.entries(genreMap).find(([, label]) => label === value.trim());
  return mapped?.[0] ?? lowered;
};
