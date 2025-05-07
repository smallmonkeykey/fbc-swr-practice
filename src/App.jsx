import useSWR from "swr";
import "./App.css";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

function App() {
  const url = "https://httpstat.us/200?sleep=2000";

  const { error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;
  return <p>Status: OK</p>;
}

export default App;
