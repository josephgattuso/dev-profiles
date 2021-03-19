import Head from "../components/Head";

export default function Home() {
  return (
    <>
      <Head title="GitHub Profiles" />
      <main>
        <h1>GitHub Profiles</h1>
      </main>

      <footer>
        Built by{" "}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../static/logo.svg"
            alt="Gattuso Logo"
            width="34"
            height="34"
          />{" "}
        </a>
      </footer>
    </>
  );
}
