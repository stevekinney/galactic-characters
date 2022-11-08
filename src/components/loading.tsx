const Loading = () => {
  return (
    <div className="flex items-center h-full text-6xl animate-pulse place-content-center text-primary-700">
      Loading…
    </div>
  );
};

export const LoadingRow = ({ loading }: { loading?: boolean }) => {
  if (!loading) return null;

  return (
    <tr>
      <td
        className="p-2 animate-pulse bg-primary-300 text-primary-900"
        colSpan={100}
      >
        Loading…
      </td>
    </tr>
  );
};

export default Loading;
