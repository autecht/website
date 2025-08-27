import { CircleLoader } from 'react-spinners';

export default function Loading() {
  return <div className = "loading-container">
            <CircleLoader  size={200} speed={1} color={"#031d3d"} />
          </div>
}