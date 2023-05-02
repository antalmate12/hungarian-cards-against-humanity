import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  runtime: "edge",
  regions: ["fra1"],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // GitHub API token
  const token = process.env.GITHUB_TOKEN;

  // GitHub repo neve és tulajdonosának a neve
  const owner = "antalmate12";
  const repo = "hungarian-cards-against-humanity";

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

  const body = JSON.stringify({
    title: "Test issue",
    body: "This is a test issue",
  });

  fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`,
    },
    body,
  })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
