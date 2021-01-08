import { Repos } from '../interfaces/repo.interface';
import { LostComponent } from '../modules/home/components/lost/lost.component';
import { ReposListComponent } from '../modules/home/components/repos-list/repos-list.component';

export const TEST_ROUTES = [
  {
    path: '',
    children: [
      {
        path: 'recent-repositories',
        component: ReposListComponent,
      },
      {
        path: '',
        redirectTo: 'recent-repositories',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'lost',
    component: LostComponent,
  },
  {
    path: '**',
    redirectTo: 'lost',
    pathMatch: 'full',
  },
];

export const TEST_REPO: Repos = {
  total_count: 35537472,
  incomplete_results: true,
  items: [
    {
      id: 114817453,
      node_id: 'MDEwOlJlcG9zaXRvcnkxMTQ4MTc0NTM=',
      name: 'swissborg.github.io',
      full_name: 'SwissBorg/swissborg.github.io',
      private: false,
      owner: {
        login: 'SwissBorg',
        id: 28651481,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjI4NjUxNDgx',
        avatar_url: 'https://avatars2.githubusercontent.com/u/28651481?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/SwissBorg',
        html_url: 'https://github.com/SwissBorg',
        followers_url: 'https://api.github.com/users/SwissBorg/followers',
        following_url:
          'https://api.github.com/users/SwissBorg/following{/other_user}',
        gists_url: 'https://api.github.com/users/SwissBorg/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/SwissBorg/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/SwissBorg/subscriptions',
        organizations_url: 'https://api.github.com/users/SwissBorg/orgs',
        repos_url: 'https://api.github.com/users/SwissBorg/repos',
        events_url: 'https://api.github.com/users/SwissBorg/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/SwissBorg/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/SwissBorg/swissborg.github.io',
      description: 'html pages for SwissBorg projects',
      fork: false,
      url: 'https://api.github.com/repos/SwissBorg/swissborg.github.io',
      forks_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/forks',
      keys_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/teams',
      hooks_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/hooks',
      issue_events_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/events',
      assignees_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/tags',
      blobs_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/languages',
      stargazers_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/stargazers',
      contributors_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/contributors',
      subscribers_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/subscribers',
      subscription_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/subscription',
      commits_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/merges',
      archive_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/downloads',
      issues_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/labels{/name}',
      releases_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/SwissBorg/swissborg.github.io/deployments',
      created_at: '2017-12-19T22:30:09Z',
      updated_at: '2019-12-22T15:35:40Z',
      pushed_at: '2017-12-19T22:33:16Z',
      git_url: 'git://github.com/SwissBorg/swissborg.github.io.git',
      ssh_url: 'git@github.com:SwissBorg/swissborg.github.io.git',
      clone_url: 'https://github.com/SwissBorg/swissborg.github.io.git',
      svn_url: 'https://github.com/SwissBorg/swissborg.github.io',
      homepage: null,
      size: 475,
      stargazers_count: 136,
      watchers_count: 136,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 46,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 46,
      open_issues: 0,
      watchers: 136,
      default_branch: 'master',
      score: 1.0,
    },
  ],
};
