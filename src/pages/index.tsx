import Head from 'next/head'
import {Header} from "@/components/Header";
import {LeftMenu} from "@/components/LeftMenu";
import {MainStage} from "@/components/MainStage";
import {useSelector} from "react-redux";
import {showBg} from "@/features/bgSlice";

export default function Home() {
    const bg = useSelector(showBg);
    return (
        <>
          <Head>
            <title>Квеструктор</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
              <Header/>
              <div style={{display: 'flex'}}>
                  <LeftMenu/>
                  {bg.image !== null ? <MainStage/> : <div style={{
                      marginLeft: 'auto', marginRight: 'auto', fontWeight: 700, fontSize: '24px',
                      display: 'flex', alignItems: 'center', color: '#333333'
                  }}>Выберите фон, который хотите использовать</div>}
              </div>
          </main>
        </>
    )
}
