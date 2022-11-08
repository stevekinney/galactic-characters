type CharacterProps = {
  character: StarWarsCharacter;
};

const Character = ({ character }: CharacterProps) => {
  return (
    <tr>
      <td>{character.name}</td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.eyeColor}</td>
      <td>{character.skinColor}</td>
    </tr>
  );
};

export default Character;
