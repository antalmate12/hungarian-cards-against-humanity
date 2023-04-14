import createGitHubIssue from "@/utils/createGitHubIssue";
import { Switch } from "@headlessui/react";
import { useRef, useState } from "react";

const SuggestCard = () => {
  const [enabled, setEnabled] = useState(false);
  const titleInput = useRef<HTMLInputElement>(null);
  const bodyInput = useRef<HTMLInputElement>(null);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");

    createGitHubIssue({
      title: titleInput.current?.value ?? "",
      body: bodyInput.current?.value ?? "",
    });
  };

  return (
    <form onSubmit={formSubmit} className="container flex flex-col gap-4">
      <h2>Suggest a Card</h2>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-400"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>

      <input className="text-black" ref={titleInput} type="text" id="title" />
      <input className="text-black" ref={bodyInput} type="text" id="body" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default SuggestCard;
