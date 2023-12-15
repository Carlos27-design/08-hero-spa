import { heroes } from '../data/heroes';

export const getHeroByName = (name = '') => {
  name = name.toLocaleLowerCase();

  if (name.length === 0) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
