const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby(["pages/**/*{.js,.mdx}", "!pages/_*.js"]);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page, index) => {
                  console.log(page, index)
                const path = page
                  .replace("pages", "")
                  .replace("/blog/index", "/blog")
                  .replace("/journey/index", "/journey")
                  .replace("/projects/index", "/projects")
                  .replace("/fyi/index", "/fyi")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;
                return `
                        <url>
                            <loc>${`https://soultan.id${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
	 `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
