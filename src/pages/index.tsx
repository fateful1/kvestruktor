import Head from "next/head";
import { Header } from "@/components/Header";
import { LeftMenu } from "@/components/LeftMenu";
import { MainArea } from "@/components/MainArea";
import { useSelector } from "react-redux";
import { showBg } from "@/features/bgSlice";
import { PropertiesMenu } from "@/components/PropertiesMenu";
import {getObjects} from "@/pages/api/getData";

export default function Home(props: any) {
  const bg = useSelector(showBg);
  console.log(props)

  return (
    <>
      <Head>
        <title>Квеструктор</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div style={{ display: "flex" }}>
          <LeftMenu objects={props.objects.objects} />
          {bg.image !== null ? (
            <MainArea />
          ) : (
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontWeight: 700,
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                color: "#333333",
              }}
            >
              Выберите фон, который хотите использовать
            </div>
          )}
          <PropertiesMenu />
        </div>
      </main>
    </>
  );
}


export async function getServerSideProps() {
    const data = await getObjects();
    return {
        props: { objects: JSON.parse(JSON.stringify(data)) },
    }
}