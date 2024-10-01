import './tag.scss';

// Tag component: displays a list of tags as a list, rendering each tag as a list item.

function Tag({ tags }) {
    return (
        <ol className="tag">
            {tags.map((tag, index) => (
                <li className="tag__item" key={index}>
                    {tag}
                </li>
            ))}
        </ol>
    );
}

export default Tag;
