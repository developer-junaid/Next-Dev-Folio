// Components
import { Layout } from "../components/Layout";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <main className="w-full min-h-full">
        <Services />
        <Testimonials />
      </main>
    </Layout>
  );
}
