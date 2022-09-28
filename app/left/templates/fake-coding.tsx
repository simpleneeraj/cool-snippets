import css from "styles/templates.module.scss";

const counts = [...(Array(8).keys() as any)];

const FakeCoding = () => {
  return (
    <div className={css["fake-code"]}>
      {counts.map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

export default FakeCoding;
