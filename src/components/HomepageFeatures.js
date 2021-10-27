import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (<Translate id="feature.title.easy">
      轻易上手
    </Translate>),
    Svg: require('../../static/img/undraw_easy_to_use.svg').default,
    description: (
      <>
        <Translate
          id="feature.easy">
          LibCyber从一开始就被设计成易于安装和用于使您的可以快速访问海外资源，并支持在Windows、macOS、移动设备、路由器等全平台下使用。
        </Translate>
      </>
    ),
  },
  {
    title: (<Translate id="feature.title.speed">
      高速稳定
    </Translate>),
    Svg: require('../../static/img/undraw_high_speed.svg').default,
    description: (
      <>
        <Translate
          id="feature.speed">
          LibCyber专注于速度和稳定性，做好您最稳定流畅的上网工具，让您可以一心于自己从事的学习、工作、娱乐活动，不必再为上网体验担忧。
        </Translate>
      </>
    ),
  },
  {
    title: (<Translate id="feature.title.expert">
      大厂加持
    </Translate>),
    Svg: require('../../static/img/undraw_professional.svg').default,
    description: (
      <>
        <Translate
          id="feature.expert">
          LibCyber成员来自Shopee、微软等知名企业，供应商均为BGP骨干机房。采用多层负载均衡，智能路由等技术。
        </Translate>

      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
