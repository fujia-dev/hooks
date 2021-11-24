import React, { useState, useMemo, useCallback, ChangeEvent } from "react";

function FilterList({ data }: { data: any[]}) {
  const [searchKey, setSearchKey] = useState("");

  const filtered = useMemo(() => {
    return data.filter((item: any) =>
      item.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }, [searchKey, data]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?key=${e?.target?.value}`
    )
  }, [])

  return (
    <div className="filter-list">
      <h2>Movies</h2>
      <input
        value={searchKey}
        placeholder="Search..."
        onChange={handleSearch}
      />
      <ul style={{ marginTop: 20 }}>
        {filtered.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
