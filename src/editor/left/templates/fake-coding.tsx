import css from '@/styles/templates.module.scss';

const FakeCoding = () => {
  return (
    <div className={css['fake-code']}>
      {fakeCodeData.map(({ color, width }, i) => (
        <span
          key={i}
          style={{
            background: color,
            width: `${width}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FakeCoding;

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
