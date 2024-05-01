import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

import styles from './styles.module.css';

function Framework() {
  return (
    <Section>
      <SectionTitle
        title="Get a head start with a framework"
        description={
          <>
            React Native brings the React programming paradigm to platforms like
            Android and iOS. It doesn’t prescribe how to do routing, or how to
            access each of the numerous platform APIs. To build a new app with
            React Native, we recommend a framework like{' '}
            <a href="https://expo.dev">Expo</a>.
          </>
        }
      />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src={'/img/homepage/file-based-routing.png'}
            alt={'alt'}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>File-based routing</h4>
            <p className={styles.cardDescription}>
              Create stack, modal, drawer, and tab screens with minimal
              boilerplate using your filesystem.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={'/img/homepage/libraries.png'}
            alt={'alt'}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>
              Use any library, SDK, or native code
            </h4>
            <p className={styles.cardDescription}>
              Generate native changes or write your own native code. Use over 50
              modules to create your app.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src={'/img/homepage/tools.png'}
            alt={'alt'}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h4 className={styles.cardTitle}>Developer tools</h4>
            <p className={styles.cardDescription}>
              Get started quickly with Expo Go, then continue with
              expo-dev-client: a module that adds Expo’s tools to apps that
              require native changes.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Framework;
