import { loader, loading } from "../../assets";

const Loader = () => (
    <div className="flex-center w-full">
      <img
        src={loading}
        alt="loader"
        width={24}
        height={24}
        className="animate-spin"
      />
    </div>
  );
  
  export default Loader;
  