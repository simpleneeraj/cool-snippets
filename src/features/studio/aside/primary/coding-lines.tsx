const CodingLines = () => {
  return (
    <div className={'flex flex-col flex-1 gap-1 p-2'}>
      {fakeCodeData.map(({ color, width }, i) => (
        <span
          key={i}
          style={{
            height: '5px',
            background: color,
            width: `${width}%`,
            borderRadius: '10px',
          }}
        />
      ))}
    </div>
  );
};

export default CodingLines;

const fakeCodeData = [
  {
    color: '#50fa7b',
    width: 70,
  },
  {
    color: '#ff79c6',
    width: 40,
  },
  {
    color: '#fda331',
    width: 60,
  },
  {
    color: '#8abeb7',
    width: 65,
  },
  {
    color: '#ff79c6',
    width: 54,
  },
  {
    color: '#b8bb26',
    width: 90,
  },
  {
    color: '#a2a9b5',
    width: 40,
  },
  {
    color: '#ff79c6',
    width: 90,
  },
];
