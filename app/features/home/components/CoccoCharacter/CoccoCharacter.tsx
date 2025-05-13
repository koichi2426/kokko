'use client';
import Image from 'next/image';
import styles from './CoccoCharacter.module.css';

export default function CoccoCharacter() {
  return (
    <div className={styles.character}>
      <Image
        src="/images/cocco.png" // ✅ public/images/cocco.png に置く
        alt="こっこちゃん"
        width={300}
        height={300}
      />
    </div>
  );
}
