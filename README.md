## plugins

Code copy https://github.com/znicholasbrown/vuepress-plugin-code-copy

Code to merge the comands pages into one:

```
[
      "vuepress-plugin-merge-pages",
      {
        bundles: [
          {
            path: "/commands/",
            name: "README", // optional
            filter: (pages) => {
              // optional
              return pages.filter(({ path }) => path.includes("/commands/"));
            },
            mergePages: (pages) => {
              // optional
              const pageBreak = '<hr class="page-break" />\n\n';
              const initialValue = `# My Printable Page\n\n[[TOC]]\n${pageBreak}`;
              return pages.reduce((acc, current) => {
                return `${acc}${current.content}\n\n${pageBreak}`;
              }, initialValue);
            },
          },
        ],
      },
    ],
```
