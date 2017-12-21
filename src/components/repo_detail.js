import React from 'react';

const RepoDetail = (props) => {
    return (
        <li>
            <a href={props.repo.html_url}>{props.repo.name}</a>
            <p>{props.repo.description}</p>
        </li>
    );
};

export default RepoDetail;