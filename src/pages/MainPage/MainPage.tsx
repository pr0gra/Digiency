import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout/Layout";
import { MainHero } from "../../components/MainHero/MainHero";

export function MainPage() {
  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <MainHero />
      <Layout>
        <AboutUs />
      </Layout>
    </>
  );
}
