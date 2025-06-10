import { ModeToggle } from "./components/ModeToggle";
import { Card } from "./components/ui/card";

export default function App() {
  return (
    <div className="text-4xl text-center w-full flex flex-col">
      hello world i love you 
      <div>
        <Card>
          <ModeToggle/>  
        </Card>
      </div>
    </div>
  )
}
