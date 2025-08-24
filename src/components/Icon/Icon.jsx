const Icon = ({ id, size = 24, className }) => (
  <svg className={className} width={size} height={size}>
    <use href={`/public/icon.svg#${id}`} />
  </svg>
);

export default Icon;
