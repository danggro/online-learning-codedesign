import Image from "next/image";
import Container from "../Container";
import TextDesc from "../TextDesc";
import { useState } from "react";
import mockNews from "@/utils/News.json";
import Link from "next/link";
export default function SectionNews() {
  const [news, setNews] = useState(mockNews);
  return (
    <Container>
      <section id="News" className="px-[70px] mb-[160px]">
        <div className="w-8/12 mx-auto text-center mb-[100px]">
          <h2 className="text-[36px] font-bold text-dark-blue mb-5">
            Lastest News and Resources
          </h2>
          <TextDesc fs="24">
            See the developments that have occured to Skillines in the world
          </TextDesc>
        </div>
        <div className="flex gap-[120px]">
          <div className="max-w-[640px]">
            {news.map((n) => {
              if (n.id === "1") {
                return (
                  <div key={n.id}>
                    <Link href={`/`}>
                      <Image
                        src={`/news/${n.img}`}
                        width="640"
                        height="340"
                        alt=""
                        className="rounded-[20px]"
                      />
                    </Link>
                    <div className="px-9 py-[2px] bg-[#F4C467] text-[#252641] uppercase rounded-full mt-10 leading-[36px] mb-5 w-fit text-xl font-medium">
                      {n.ctg}
                    </div>
                    <Link href={`/`}>
                      <h2 className="text-[26px] pr-5 text-[#252641] font-medium ">
                        {n.title}
                      </h2>
                    </Link>
                    <div className="mt-5 mb-7">
                      <TextDesc fs="20">{n.desc}</TextDesc>
                    </div>
                    <Link
                      href={`/`}
                      className="text-xl text-secondary hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <div className="w-6/12 flex flex-col gap-y-[50px]">
            {news.map((n) => {
              if (n.id > 1) {
                return (
                  <div key={n.id} className="flex gap-10">
                    <div className="relative">
                      <Link href={`/`}>
                        <Image
                          src={`/news/${n.img}`}
                          width="280"
                          height="200"
                          alt=""
                          className="rounded-[20px] max-w-[280px]"
                        />
                      </Link>
                      <div className="px-3 py-1 bg-[#F4C467] text-[#252641] uppercase rounded-full mt-10 leading-[27px] w-fit text-lg font-medium absolute bottom-5 right-5 z-10">
                        {n.ctg}
                      </div>
                    </div>
                    <div>
                      <Link href={`/`}>
                        <h2 className="text-[22px] text-[#252641] font-medium ">
                          {n.title}
                        </h2>
                      </Link>
                      <div className="mt-5">
                        <TextDesc fs="20">{n.desc}</TextDesc>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
