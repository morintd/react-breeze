/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Title } from 'react-breeze';

import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Made with React & Tailwind',
    description: (
      <>
        You also love working with React and Tailwind CSS ? Creating basic components is painful and time-consuming, without
        really brining any value ? Do not waste any more time, and try out <strong>react-breeze</strong>.
      </>
    ),
  },
  {
    title: 'Wide range of components',
    description: (
      <>
        Use and customize the wide range of available components now! Working with prototypes ? You will find everything you
        need,{' '}
        <a className="underline" href="/docs/components/alert">
          have a look
        </a>
        .
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <Title as="h3">{title}</Title>
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
