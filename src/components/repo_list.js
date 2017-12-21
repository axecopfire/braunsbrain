import React from 'react';
import RepoDetail from './repo_detail';

const RepoList = (props) => {
  const RenderedRepos = props.repos.map(repo =>
    <RepoDetail key={repo.name} repo={repo} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedRepos}
    </ul>
  );
};

export default RepoList;