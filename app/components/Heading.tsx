import * as css from './Heading.css';

type HeadingProps = {
  title?: string;
  anchor?: string;
};

export default function Heading({ title = 'Section', anchor }: HeadingProps) {
  return (
    <h2 id={anchor} className={css.root}>
      {title}
    </h2>
  );
}
