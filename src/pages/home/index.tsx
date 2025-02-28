import React, { useEffect } from 'react';
import AOS from 'aos';
import BrowserOnly from '@docusaurus/BrowserOnly';

import TopWaveImage from '@site/static/home/wave-top.svg';
import BottomWaveImage from '@site/static/home/wave-buttom.svg';
import BannerTitle from '@site/src/components/BannerTitle';
import GetStartButton from '@site/src/components/Button/GetStart';
import GitHubButton from '@site/src/components/Button/GitHub';
import config from './languages.json';

import TrustedUsers from '@site/src/components/TrustedUsers';
import ShellCommand from '@site/src/components/ShellCommand';
import SectionTitle from '@site/src/components/SectionTitle';
import FeatureCard from '@site/src/components/FeatureCard';
import Development from '@site/src/components/Development';
import AchievementBanner from '@site/src/components/AchievementBanner';
import Browser from '@site/src/components/MacBrowser';
import { useTranslation } from '@site/src/hooks/useTranslation';

import './style.less';
import BannerVideo from '@site/src/components/BannerVideo';
import { featureCardStyle } from './feature.data';

export default function HomePage() {
  const INSTALL_COMMAND = `curl -L https://streampark.apache.org/quickstart.sh | sh`;

  const { t } = useTranslation(config);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-out-quad',
      once: !0,
    });
    window.addEventListener('load', AOS.refresh);

    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);
  return (
    <div className='homepage-wrapper overflow-hidden'>
      <div
        data-aos='fade-down'
        className='absolute top-[60px] right-0 h-[300px] w-[300px] overflow-hidden z-[-1]'
      >
        <TopWaveImage className='absolute bottom-0 right-0  w-[1400px] -rotate-6' />
      </div>

      <section className='banner-section container mt-16 flex flex-col'>
        <BannerTitle subTitle={t.slogan.key} description={t.slogan.description} />
        <div
          className='flex justify-center space-x-6 text-sm'
          data-aos='fade-right'
          data-aos-duration='6000'
          data-aos-offset='100'
        >
          <GetStartButton>{t.action.start}</GetStartButton>
          <GitHubButton>Github</GitHubButton>
        </div>
      </section>

      <Browser className='!h-auto bg-shadow-primary'>
        <BannerVideo />
      </Browser>

      <section data-aos='fade-up' className='flex flex-col items-start my-10'>
        <div className='text-base lg:text-xl text-neutral-600 dark:text-neutral-400 mx-auto mb-4'>
          {t.common.startUsingTitle}
        </div>
        <div className='mx-auto px-2'>
          <ShellCommand
            command={INSTALL_COMMAND}
            className='max-w-[80vw] md:max-w-full'
          />
          <p className='text-xs md:text-sm text-neutral-400 dark:text-neutral-600 mx-auto mt-2 pl-2'>
            <span>{t.common.installOtherVersionDescription}&nbsp;</span>
            <a href='/download' className='text-primary-400'>
              {t.common.downlaodPage}
            </a>
            <span>.</span>
          </p>
        </div>
      </section>

      <div className='flex justify-end' data-aos='slide-left'>
        <BottomWaveImage className='h-[120px] md:h-[250px] w-full shrink-0 mt-[36px] md:mt-[75px]' />
        <BottomWaveImage className='h-[120px] md:h-[250px] w-full shrink-0' />
      </div>

      <section className='lg:pb-20'>
        <BrowserOnly>{() => <TrustedUsers />}</BrowserOnly>
      </section>

      <section className='p-0'>
        <BrowserOnly>{() => <AchievementBanner />}</BrowserOnly>
      </section>

      <section className='lg:py-20 bg-[#f7f9fe] dark:bg-[#1a1b1c]'>
        <div className='w-full overflow-hidden'>
          <SectionTitle title={t.common.coreFeatures}/>
          <div className='flex-center flex-wrap xl:w-[1400px] mx-auto'> 
            {t.feature.map((feature, i) => (
              <FeatureCard
                key={i}
                id={feature.id}
                title={feature.title}
                icon={featureCardStyle[feature.id]?.icon}
                style={featureCardStyle[feature.id]?.style}
                content={feature.details}
                animationDelay={(i % 3) * 100}
                className='hover:-translate-y-[10px] transition-transform ease-in-out duration-300'
              />
            ))}
          </div>
        </div>
      </section>

      <section className='lg:py-20'>
        <div className='w-full overflow-hidden'>
          <SectionTitle
              title={t.common.development}
          />
          <BrowserOnly>{() => <Development />}</BrowserOnly>
        </div>
      </section>

      {/* <section className="p-0">
        <BrowserOnly>{() => <AchievementBanner />}</BrowserOnly>
      </section> */}
    </div>
  );
}
