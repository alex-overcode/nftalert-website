import { Metadata } from 'next';

import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'NFT alerts',
  description: 'The NFT alerts tool',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        NFT alerts is a service that will help you not to miss important updates
        on the market
      </h1>

      <p>
        The NFT alerts tool will help you to follow the changes in the digital
        market and not to miss the best offers. NFT bot is always with you in
        your phone.{' '}
      </p>

      <p>
        By setting up alerts you will be notified when new NFTs are available in
        the price range you specify. There is no need to monitor all
        marketplaces 24/7, the nft sniper bot will do it.
      </p>

      <p>
        NFT collection alerts monitors all marketplaces and notifies you when
        new NFT collections become available.
      </p>

      <p>NFT alerts allows you to:</p>
      <ul>
        <li>track the best traders on the NFT marketplace</li>
        <li>analyze collection parameters</li>
        <li>
          stay up to date on the minimum price of an image in a collection
        </li>
        <li>customize rules for your own alerts </li>
      </ul>

      <Image src="/nft.jpg" alt="nft price alerts" width={1160} height={500} />
    </main>
  );
}
