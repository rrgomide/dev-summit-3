export default function Countries({ children: countries = [] }) {
  return (
    <ul className="mt-4">
      {countries.map(({ id, name, flag }) => {
        return (
          <li
            key={id}
            className="flex flex-row items-center justify-start space-x-2 mb-2"
          >
            <img
              src={flag}
              alt={name}
              width="100"
              height="50"
              className="border"
            />
            <span>{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
