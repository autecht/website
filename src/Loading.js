import { MoonLoader } from 'react-spinners';

export default function Loading() {
  return <div className = "loading-container">
            <MoonLoader  size={150} speed={1} color={"#031d3d"} />
          </div>
}