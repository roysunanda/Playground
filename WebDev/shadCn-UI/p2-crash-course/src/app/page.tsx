import { Button } from "@/components/ui/button";
import ToggleTheme from "./toggle-mode";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Button>Click me</Button>
      <ToggleTheme />
    </div>
  );
}
