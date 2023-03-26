# mime-database
[![Github All Releases][github-all-releases]]() 
[![Github Release Version][github-release-version]]()
[![Make a pull request][prs-badge]][prs]

[![License][license-badge]](LICENSE)
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

## Installation

```bash
npm install mime-database
```

## Usage
```ts
const db = require('mime-database');
const response = db.getType('application/json');

// OR

import { getType } from 'mime-database';
const response = getType('application/json');
```

[github-all-releases]: https://img.shields.io/github/downloads/ShortByte/mime-database/total.svg?style=for-the-badge&logo=appveyor
[github-release-version]: https://img.shields.io/github/v/release/ShortByte/mime-database?style=for-the-badge&logo=appveyor

[license-badge]: https://img.shields.io/github/license/ShortByte/mime-database?style=for-the-badge
[license]: https://github.com/ShortByte/mime-database/blob/main/LICENSE
[prs-badge]: https://img.shields.io/github/issues-pr/ShortByte/mime-database?style=for-the-badge
[prs]: http://makeapullrequest.com

[github-watch-badge]: https://img.shields.io/github/watchers/ShortByte/mime-database?style=for-the-badge
[github-watch]: https://github.com/ShortByte/mime-database/watchers
[github-star-badge]: https://img.shields.io/github/stars/ShortByte/mime-database?style=for-the-badge
[github-star]: https://github.com/ShortByte/mime-database/stargazers


<a href="https://twitter.com/ShortByteYT" title="My Twitter"><img src="https://img.shields.io/twitter/follow/ShortByteYT?style=for-the-badge" alt="My Twitter" /></a>
<a href="https://twitch.tv/ShortByte" title="My Twitch"><img src="https://img.shields.io/twitch/status/ShortByte?style=for-the-badge" alt="My Twitch" /></a>