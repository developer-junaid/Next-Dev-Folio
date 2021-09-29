// Components
import { Layout } from "../components/Layout";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <Layout>
      <main className="w-full min-h-full">
        <Services />
      </main>
    </Layout>
  );
}
