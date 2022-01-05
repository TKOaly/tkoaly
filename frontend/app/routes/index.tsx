import mainStyles from "~/styles/main.css";


export const links = () => {
  return [{ rel: "stylesheet", href: mainStyles }];
};

export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>TKO-aly</h1>
    </div>
  );
}

