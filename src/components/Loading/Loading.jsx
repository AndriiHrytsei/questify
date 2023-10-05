import { TailSpin } from "react-loader-spinner";
import css from './Loading.module.css'

const Loading = () => {
  return (
    <div className={css.loadingBox}>
      <TailSpin
        height="80"
        width="80"
        color="#00d7ff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Please do not reload the page during content load</p>
    </div>
  );
};

export default Loading;
