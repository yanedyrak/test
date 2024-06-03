import { CustomForm } from "./CustomForm";
import { useState } from "react";

type User = {
  login: string;
  public_repos: number;
};

type Repo = {
  name: string;
  stargazers_count: number;
};
export const UsersAndRepos = () => {
  const [data, setData] = useState<User | Repo | null>(null);

  return (
    <>
      <CustomForm setData={setData} />
      {data && "login" in data && (
        <p> {`${data.login} has ${data.public_repos} public repos`} </p>
      )}
      {data && "stargazers_count" in data && (
        <p>{`${data.name} has ${data.stargazers_count} stars`}</p>
      )}
    </>
  );
};
