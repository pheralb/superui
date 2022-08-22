import { LinearProgress, CircularProgress } from "@superui/styles";

export function LinearProgressDemo() {
  return (
    <div className="component-preview">
      <h2>Primary</h2>
      <LinearProgress variant="primary" type="determinate" value={60} />
      <h2>Secondary</h2>
      <LinearProgress variant="secondary" type="determinate" value={25} />
      <h2>Danger</h2>
      <LinearProgress variant="danger" type="determinate" value={75} />
    </div>
  );
}

export function CircularProgressDemo() {
  return (
    <div className="component-preview">
      <div className="w-full flex flex-col md:flex-row justify-around">
        <div className="flex flex-col items-center">
          <h2>Primary</h2>
          <CircularProgress value={50} size="md" variant="primary" />
        </div>
        <div className="flex flex-col items-center">
          <h2>Secondary</h2>
          <CircularProgress value={15} size="xl" variant="secondary" />
        </div>
        <div className="flex flex-col items-center">
          <h2>Danger</h2>
          <CircularProgress value={40} size="lg" variant="danger" />
        </div>
      </div>
    </div>
  );
}
