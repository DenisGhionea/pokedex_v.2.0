import bug from '../../Media/type_icons/bug.svg';
import dark from '../../Media/type_icons/dark.svg';
import dragon from '../../Media/type_icons/dragon.svg';
import electric from '../../Media/type_icons/electric.svg';
import fairy from '../../Media/type_icons/fairy.svg';
import fighting from '../../Media/type_icons/fighting.svg';
import fire from '../../Media/type_icons/fire.svg';
import flying from '../../Media/type_icons/flying.svg';
import ghost from '../../Media/type_icons/ghost.svg';
import grass from '../../Media/type_icons/grass.svg';
import ground from '../../Media/type_icons/ground.svg';
import ice from '../../Media/type_icons/ice.svg';
import normal from '../../Media/type_icons/normal.svg';
import poison from '../../Media/type_icons/poison.svg';
import psychic from '../../Media/type_icons/psychic.svg';
import rock from '../../Media/type_icons/rock.svg';
import steel from '../../Media/type_icons/steel.svg';
import water from '../../Media/type_icons/water.svg';

const hash = {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
};

export default function useTypeIcon(type) {
  return hash[type];
}