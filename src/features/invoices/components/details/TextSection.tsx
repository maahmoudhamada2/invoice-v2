import clsx from "clsx";
import dateTimeFormatter from "../../utils/dateTimeFormatter";

const gaps = {
  sm: `gap-1`,
  md: `gap-2`,
  lg: `gap-3.25`,
};

type GapKeys = keyof typeof gaps;

const styles = {
  container: `flex flex-col `,
  heading: `text-text-secondary text-body`,
  subHeading: `text-text-primary text-body-bold leading-5`,
};

interface HeadingsContProps {
  heading: string;
  subHeading: string;
  gapSize: GapKeys;
  isDate?: boolean;
  isId?: boolean;
}

const TextSection = ({
  heading,
  subHeading,
  gapSize,
  isDate = false,
  isId = false,
}: HeadingsContProps) => {
  const headingStyle = clsx(isId ? styles.subHeading : styles.heading);
  const subHeadingStyle = clsx(isId ? styles.heading : styles.subHeading);

  return (
    <div className={`${styles.container} ${gaps[gapSize]}`}>
      <h2 className={headingStyle}>
        {isId && <span className="text-[#888EB0]">#</span>}
        {heading}
      </h2>
      {isDate ? (
        <time
          dateTime={dateTimeFormatter(subHeading)}
          className={subHeadingStyle}>
          {subHeading}
        </time>
      ) : (
        <p className={subHeadingStyle}>{subHeading}</p>
      )}
    </div>
  );
};
export default TextSection;
