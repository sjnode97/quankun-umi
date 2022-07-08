import styles from './index.less';
import { Link } from 'umi';
import { MicroApp } from 'umi';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>我是主应用</h1>
      <Link to={{ pathname: '/app-1' }}>赶紧跳</Link>
      {/*<MicroApp name='app-1' />*/}
    </div>
  );
}
