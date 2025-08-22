const Icon = ({ id, size = 24, className }) => (
  <svg className={className} width={size} height={size}>
    <use href={`/src/assets/icon/icon.svg#${id}`} />
  </svg>
);

export default Icon;
