import Button from 'components/Button';
import Container from 'components/Container';
import Label from 'components/Label';
import Median from 'median-js-bridge';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
}

const Home: React.FC<Props> = () => {
  const [listenerId, setListenerId] = useState<string | null>(null);

  const toggleListener = useCallback(() => {
    if (listenerId) {
      Median.appsflyer.conversionData.removeListener(listenerId);
      setListenerId(null);
    } else {
      const newListenerId = Median.appsflyer.conversionData.addListener((data) => {
        window.alert(JSON.stringify(data));
      });
      setListenerId(newListenerId);
    }
  }, [listenerId]);

  return (
    <Container innerClassName={styles.container}>
      <Label size="xl">AppsFlyer Demo</Label>

      <div className={styles.content}>
        <div className={styles.section}>
          <Label size="md">Conversion Data</Label>
          <Button onClick={() => toggleListener()}>
            {listenerId ? 'Remove Listener' : 'Add Listener'}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
