import { Octokit, App } from "octokit";



const ocotokit =new ocotokit();


//route for the issues pull
await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "github",
    repo: "REPO",
      headers: {
    'X-GitHub-Api-Version': '2022-11-28'}
  });


//route for the commits pull
  await ocotokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: 'OWNER',
    repo: 'REPO',
      headers: {
    'X-GitHub-Api-Version': '2022-11-28'}
  })


  ///route for profile pull
  await octokit.request('GET /search/users', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  //route for repo count???