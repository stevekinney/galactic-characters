import Character from './table-row';
import Loading, { LoadingRow } from './loading';
import TableHeading from './table-heading';

type CharactersProps = {
  characters: StarWarsCharacter[];
  loading?: boolean;
};

const Table = ({ characters, loading }: CharactersProps) => {
  if (!characters.length && loading) return <Loading />;

  return (
    <table className="w-full">
      <TableHeading />
      <LoadingRow loading={loading} />
      <tbody>
        {characters.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
