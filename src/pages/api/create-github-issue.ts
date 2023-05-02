import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // GitHub API token
  const token = process.env.GITHUB_TOKEN;

  // GitHub repo neve és tulajdonosának a neve
  const owner = "antalmate12";
  const repo = "hungarian-cards-against-humanity";

  // const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

  // use octokit to create an issue
  const octokit = new Octokit({
    auth: "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",
  });

  // get the issue title and body from the request body
  const { title, body } = req.body;

  // create an issue
  octokit
    .request("POST /repos/{owner}/{repo}/issues", {
      owner,
      repo,
      title,
      body,
      assignees: ["antalmate12"],
      labels: ["suggestion"],
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((response) => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
}
