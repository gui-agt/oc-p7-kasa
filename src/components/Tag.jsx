import './tag.scss';

function Tag({ tags }) {
  return (
    <ol className="tag">
      {tags.map((tag, index) => (
        <li className="tag__item" key={index}>{tag}</li>
      ))}
    </ol>
  );
}

export default Tag;