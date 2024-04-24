import { Provider } from "react-redux";
import store from "../redux/store";
interface props {
  children: React.ReactNode;
}
export const ReduxProvider: React.FC<props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
