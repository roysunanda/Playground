// "use client";

// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";

// export default function ToggleTheme() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       variant='outline'
//       size='icon'
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//       {theme === "dark" ? (
//         <Sun className='h-5 w-5' />
//       ) : (
//         <Moon className='h-5 w-5' />
//       )}

//       <span className='sr-only'>Toggle theme</span>
//     </Button>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant='outline' size='icon' aria-label='Toggle theme'>
        <Moon className='h-5 w-5' />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label='Toggle theme'>
      {isDark ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
    </Button>
  );
}
