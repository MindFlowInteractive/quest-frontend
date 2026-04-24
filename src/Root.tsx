import App from './App';
import { useApplyTheme } from './theme/useApplyTheme';

export default function Root() {
  useApplyTheme();
  return <App />;
}
