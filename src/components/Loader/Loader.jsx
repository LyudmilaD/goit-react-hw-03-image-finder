import { Rings } from 'react-loader-spinner';

import styles from '../App.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <Rings height="100" width="100" color="#7FFFD4" ariaLabel="loading" />
    </div>
  );
};
export default Loader;
