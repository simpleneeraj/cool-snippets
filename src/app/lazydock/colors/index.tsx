import Alt from "lib/icons/Alt";
import gradient from "lib/gradient";
import ListView from "lib/list-view";
import solidColor from "lib/solidColor";
import css from "styles/photos.module.scss";
import useBackground from "store/hooks/usebackground";

const ColorsOption = () => {
  const { setBackground, source: gradientValue } = useBackground();

  return (
    <div className={css.container}>
      <div className={css.content}>
        {[...solidColor, ...gradient].map((data, index) => {
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
                {isActive && <Alt />}
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
