export default function CountryFilter({
  children: countryValue,
  onFilterChange = null,
}) {
  function handleCountryChange({ currentTarget }) {
    if (onFilterChange) {
      onFilterChange(currentTarget.value);
    }
  }

  return (
    <section className="flex flex-col">
      <label htmlFor="inputCountry">Digite o nome do país:</label>
      <input
        id="inputCountry"
        className="border border-black p-1"
        type="text"
        value={countryValue}
        onChange={handleCountryChange}
      />
    </section>
  );
}
