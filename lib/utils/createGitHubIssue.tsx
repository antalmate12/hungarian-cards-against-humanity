export default async function createGitHubIssue({
  title,
  body,
  labels,
}: {
  title: string;
  body: string;
  labels?: string[];
}) {
  // GitHub API token
  const token = process.env.GITHUB_TOKEN;

  // GitHub repo neve és tulajdonosának a neve
  const owner = "antalmate12";
  const repo = "hungarian-cards-against-humanity";

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      labels,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    debugger;
    throw new Error(data.message);
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error: Error | any) {
    throw new Error(error?.message ?? "Hiba");
  }
}
