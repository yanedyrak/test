import { useState } from "react";

type Search = {
  text: string;
  type: string;
};

export const CustomForm = ({ setData }: any) => {
  const [params, setParams] = useState<Search>({
    text: "",
    type: "repos",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (params.text !== "") {
          fetch(`https://api.github.com/${params.type}/${params?.text}`)
            .then((response) => response.json())
            .then((data) => setData(data));
        }
      }}
    >
      <label>
        <span>Значение:</span>
        <input
          value={params?.text}
          onChange={(e) => {
            setParams({ ...params, text: e.target.value });
          }}
          type="text"
          name="firstName"
        />
      </label>
      <label>
        Репозитории или пользователи?
        <select
          name="selectedFruit"
          defaultValue="repos"
          onChange={(e) => {
            setParams({ ...params, type: e.target.value });
          }}
        >
          <option value="repos">Repos</option>
          <option value="users">Users</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
