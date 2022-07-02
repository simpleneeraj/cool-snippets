import gradient from "lib/gradient";
import ListView from "lib/list-view";
import solidColor from "lib/solidColor";
import css from "styles/photos.module.scss";
import useBackground from "store/hooks/usebackground";
import CheckmarkCircleOutline from "lib/icons/CheckmarkCircleOutline";

const sortedGradients = gradient.sort((a, b) => a.name.localeCompare(b.name));

const sortedArray = [...solidColor, ...sortedGradients];

const ColorsOption = () => {
  const { setBackground, source: gradientValue } = useBackground();

  return (
    <div className={css.container}>
      <div className={css.content}>
        {sortedArray.map((data, index) => {
          const isActive = data.gradient === gradientValue;
          return (
            <ListView
              onClick={() => setBackground(data.gradient)}
              title={data.name}
              key={index}
              className={css.picture}
            >
              <span
                style={{
                  background: data.gradient,
                  height: `100%`,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isActive ? <CheckmarkCircleOutline /> : null}
              </span>
            </ListView>
          );
        })}
      </div>
    </div>
  );
};
export default ColorsOption;

/**
 *
 */

/**
 * const app = ["b", "c", "d", "a", "f", "w"];
  const sortThese = () => {
    let w = app.sort((a, b) =>
      a.localeCompare(b, "en", { sensitivity: "base", numeric: true })
    );
    console.log(w);
  };
  sortThese();
 */
