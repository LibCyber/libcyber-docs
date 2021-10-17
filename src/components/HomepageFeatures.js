import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '轻易上手',
    Svg: require('../../static/img/undraw_easy_to_use.svg').default,
    description: (
      <>
        LibCyber从一开始就被设计成易于安装和
        用于使您的可以快速访问海外资源。
      </>
    ),
  },
  {
    title: '高速稳定',
    Svg: require('../../static/img/undraw_high_speed.svg').default,
    description: (
      <>
        LibCyber专注于速度和稳定性，做好您最稳定流畅的上网工具，让您可以一心于自己从事的学习、工作、娱乐活动，不必再为上网体验担忧。
      </>
    ),
  },
  {
    title: '大厂加持',
    Svg: require('../../static/img/undraw_professional.svg').default,
    description: (
      <>
        LibCyber团队成员均来自于Shopee、阿里、微软等国际知名企业，供应商均为国内外大厂，BGP主干机房。采用了多层负载均衡，智能路由，云原生等技术。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
