"use client";

import { FunctionComponent, useState, useRef, useEffect } from "react";
import Container from "../../components/Container";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { CTA } from "../../sections/CTA";
import Image from "next/image";

const Main: FunctionComponent = () => {
  const [containerItems] = useState([
    {
      largeImage: "/team/BOSSING.jpg",
      name: "JOHN CARL EDCEL MANUEL",
      viceChairperson: "Founder / Head Developer",
      description: "Leads the development team, ensuring all software solutions meet the highest standards of performance, security, and scalability.",
      containerGridColumn: "1" as const,
      containerGridRow: "1" as const,
      containerPadding: undefined,
    },
    {
      largeImage: "/team/acey.jpg",
      name: "ACEY CONCEPTION",
      viceChairperson: "Development Team Lead",
      description: "Manages development teams and ensures project delivery excellence.",
      containerGridColumn: "2" as const,
      containerGridRow: "1" as const,
      containerPadding: undefined,
    },
    {
      largeImage: "/team/chad.jpg",
      name: "RICHARD BENTOR",
      viceChairperson: "Technical Lead",
      description: "Leads technical implementation and guides development teams in delivering high-quality solutions.",
      containerGridColumn: "1" as const,
      containerGridRow: "2" as const,
      containerPadding: undefined,
    },
    {
      largeImage: "/team/dan.jpg",
      name: "DANIEL GARCIA",
      viceChairperson: "Head Designer",
      description: "Oversees UI/UX design, ensuring every product is visually appealing, user-friendly, and functional.",
      containerGridColumn: undefined,
      containerGridRow: "2" as const,
      containerPadding: "0px 0px 20px" as const,
    },
    {
      largeImage: "/team/doc.jpg",
      name: "JOHN EDWIN MANUEL",
      viceChairperson: "Head Engineer",
      description: "Ensures all engineering systems are robust, scalable, and built to perform under real-world demands.",
      containerGridColumn: "1" as const,
      containerGridRow: "3" as const,
      containerPadding: undefined,
    },
  ]);

  const [selectedMember, setSelectedMember] = useState(containerItems[0]);
  const [prevMember, setPrevMember] = useState(containerItems[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightGridRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const rightGrid = rightGridRef.current;
      const leftCol = leftColRef.current;
      if (!section || !rightGrid || !leftCol) return;

      const lastItem = lastItemRef.current;
      if (!lastItem) return;

      const leftColRect = leftCol.getBoundingClientRect();
      const lastItemRect = lastItem.getBoundingClientRect();
      const scrollDistance = Math.max(0, lastItemRect.bottom - leftColRect.bottom);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: leftCol,
            start: 'center center',
            end: () => `+=${scrollDistance}`,
            pin: leftCol,
            pinSpacing: false,
            scrub: 2.5,
            anticipatePin: 1,
            preventOverlaps: true,
            fastScrollEnd: true,
          },
        });

        tl.to(rightGrid, {
          y: -scrollDistance,
          ease: 'none',
        });
      }, section);
    };

    init();
    return () => ctx?.revert();
  }, []);

  const handleSelectMember = (item: typeof containerItems[0]) => {
    setPrevMember(selectedMember);
    setSelectedMember(item);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => {
      setPrevMember(item);
    }, 1100);
  };

  return (
    <>
      <Navbar />
      <div className="w-full relative flex flex-col items-center gap-0 pt-28 leading-[normal] tracking-[normal] text-center text-[14.4px] text-color-white-solid" style={{ fontFamily: 'Ethnocentric' }}>
            <main className="self-stretch flex flex-col items-center pt-0 px-0 pb-0 box-border max-w-full">
        <header className="self-stretch flex items-start py-0 pl-[135px] pr-[134px] text-left text-[48.6px] text-color-white-solid" style={{ fontFamily: 'Ethnocentric' }}>
          <div className="h-[246px] flex flex-col items-start justify-center">
            <div className="w-[1155.8px] flex-1 flex flex-col items-start py-0 pl-[76px] pr-0 box-border gap-[4px] mq1275:pl-[38px] mq1275:box-border">
              <div className="self-stretch flex flex-col items-start">
                <h1 className="m-0 self-stretch relative text-[length:inherit] leading-line-height-75 font-font-weight-400 font-[inherit]" style={{ fontFamily: 'Ethnocentric' }}>
                  PEOPLE BEHIND
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-start pt-[3px] px-0 pb-3.5 text-[45.6px] text-color-black-solid">
                <div className="bg-amber-300 overflow-hidden flex items-start pt-[3px] px-0 pb-0">
                  <h2 className="m-0 relative text-[length:inherit] leading-line-height-55 font-font-weight-400 font-[inherit] text-black" style={{ fontFamily: 'Ethnocentric' }}>
                    THE VISION
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start pt-[95.4px] pb-[40.8px] pl-[3px] pr-0 ml-[-0.7px] relative text-[20.2px]">
            <div className="w-[495.4px] flex flex-col items-start shrink-0">
              <div className="relative text-[14px] leading-relaxed">
                Leaders who build the future, not follow it.
                <br />
                Sharp minds, bold decisions, real results.
                <br />
                This is the team behind MGTech.
              </div>
            </div>
          </div>
        </header>
        <section ref={sectionRef} className="sticky-scroll-section w-[1651.2px] gap-[462.4px] max-w-full text-right text-[32.6px] text-color-white-solid mb-80" style={{ fontFamily: 'Ethnocentric', height: '888px' }}>
          <div ref={leftColRef} className="w-[660.5px] flex flex-col items-start pt-[153.6px] px-0 pb-0 box-border relative isolate max-w-full mq825:pt-[65px] mq825:box-border mq825:min-w-full mq1275:pt-[100px] mq1275:box-border mq1575:flex-1">
            <div className="self-stretch h-[888px] overflow-hidden shrink-0 flex items-start max-w-full">
              <div className="h-[888px] w-[660.5px] flex flex-col items-start shrink-0 max-w-full z-[1]">
                <div className="self-stretch relative" style={{ height: '698.9px' }}>
                  <Image
                    className="absolute inset-0 w-full h-full object-cover border-t-[18px] border-l-[18px] border-r-[18px] border-b-0 border-amber-300"
                    alt={prevMember.name}
                    src={prevMember.largeImage}
                    width={660}
                    height={699}
                  />
                  {selectedMember.largeImage !== prevMember.largeImage && (
                    <Image
                      key={`img-${animationKey}`}
                      className="animate-reveal-from-below absolute inset-0 w-full h-full object-cover border-t-[18px] border-l-[18px] border-r-[18px] border-b-0 border-amber-300"
                      alt={selectedMember.name}
                      src={selectedMember.largeImage}
                      width={660}
                      height={699}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-[594.4px] !!m-[0 important] absolute top-[291.6px] right-[-363.2px] flex flex-col items-start z-[1] shrink-0">
              <div className="self-stretch flex flex-col items-start gap-[14.4px]">
                <div className="self-stretch flex flex-col items-end">
                  <h2 key={`name-${animationKey}`} className="animate-fade-in-below m-0 relative text-[23px] leading-tight uppercase font-font-weight-400 font-[inherit] mq825:text-[20px] mq450:text-[17px]">
                    {selectedMember.name}
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-end pt-0 pb-[0.6px] pl-[152px] pr-0 text-[16px]">
                  <div key={`title-${animationKey}`} className="animate-fade-in-below relative leading-line-height-47-6 mq450:text-[19px] mq450:leading-[38px]">
                    {selectedMember.viceChairperson}
                  </div>
                </div>
                {selectedMember.description && (
                  <div key={`desc-${animationKey}`} className="animate-fade-in-below text-right text-[12.5px] font-bold leading-loose text-white/80 mt-8" style={{ fontFamily: 'var(--font-montserrat), sans-serif', marginLeft: '260px' }}>
                    {selectedMember.description}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-[528.4px] flex flex-col items-start pt-[153.6px] px-0 pb-0 box-border max-w-full mq825:pt-[65px] mq825:box-border mq825:min-w-full mq450:pt-[42px] mq450:box-border mq1275:pt-[100px] mq1275:box-border mq1575:flex-1">
            <div ref={rightGridRef} className="self-stretch h-[1412px] grid box-border grid-cols-[repeat(auto-fit,_minmax(164px,_1fr))] grid-rows-[319.218994140625px_339.2030029296875px_319.218994140625px_319.2030029296875px] gap-[38.4px]">
              {containerItems.map((item, index) => (
                <Container
                  key={index}
                  ref={index === containerItems.length - 1 ? lastItemRef : undefined}
                  largeImage={item.largeImage}
                  name={item.name}
                  viceChairperson={item.viceChairperson}
                  containerGridColumn={item.containerGridColumn}
                  containerGridRow={item.containerGridRow}
                  containerPadding={item.containerPadding}
                  isSelected={selectedMember.largeImage === item.largeImage}
                  onClick={() => handleSelectMember(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      </div>
      <CTA />
      <Footer />
    </>
  );
};

export default Main;
