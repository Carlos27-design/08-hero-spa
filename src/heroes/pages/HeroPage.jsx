import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';
import { useMemo } from 'react';

const CharacterByHeroe = ({ alter_ego, character }) => {
  if (alter_ego === character) return <></>;

  return (
    <li className='list-group-item'>
      <b>Character: </b> {hero.characters}
    </li>
  );
};

export const HeroPage = () => {
  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Navigate to='/marvel' />;
  }

  const heroeUrl = `/assets/heroes/${id}.jpg`;

  const navigate = useNavigate();

  const onNavegateBack = () => {
    navigate(-1);
  };

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4 '>
        <img className='img-thumbnail' src={heroeUrl} alt={hero.superhero} />
      </div>
      <div className='col-8'>
        <h3 className='mt-3'>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter Ego: </b> {hero.alter_ego}
          </li>
          <CharacterByHeroe
            alter_ego={hero.alter_ego}
            character={hero.characters}
          />
          <li className='list-group-item'>
            <b>First Appearance: </b> {hero.first_appearance}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className='list-group-item'>
            <b>Super Heroe: </b> {hero.superhero}
          </li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-primary' onClick={onNavegateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
