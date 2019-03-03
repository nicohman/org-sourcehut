# org-sourcehut

org-sourcehut is a theme for org mode's HTML export. It is intended to look like
[sourcehut](https://sourcehut.org)'s wiki service. It uses the original CSS file
from the site, but runs a javascript program to change the format of what org
mode outputs into something similar to sourcehut's HTML.

## Usage

You can add this to the top of your org-mode file to use the theme without
downloading anything:

```
#+SETUPFILE: https://demenses.net/org-sourcehut/sourcehut-remote.setup
```

Or, you can clone this repo to your org directory and use this to only use local
files:

```
#+SETUPFILE: org-sourcehut/sourcehut.setup
```

Either way, once you've got one of these in your org file, just export to HTML
as normal, and it should look nice.

## Acknowledgements

Obviously the original CSS belongs to Drew Devault, and the setupfile-based
theme structure is from [org-html-themes](https://github.com/fniessen/org-html-themes).
