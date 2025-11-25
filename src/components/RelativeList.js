import React from 'react'

export default function RelativeList() {
  const relatives = ["Mama", "Mami", "Kaka", "Fuwa", "Cousin Brother"];

  return (
    <ol key="relativeList">
      {relatives.map((name, index) => (
        <li key={`relativeListItem${index + 1}`}>{name}</li>
      ))}
    </ol>
  );
}
